'use client';

import { useEffect, useState } from 'react';
import { useLoginStateLazyQuery } from '@/generated/graphql';

/**
 * 로그인 정보 조회
 *
 * @returns {{ loginUser: { email: string, uuid: string } | undefined | null, logout: () => void }}
 * */
export default function useLoginStateHook() {
	const [jwt, setJwt] = useState<string | undefined>(undefined);
	const [loginUser, setLoginUser] = useState<{ email: string; uuid: string } | undefined | null>(undefined);

	const [getLoginUser, { loading, error, data }] = useLoginStateLazyQuery();

	// 컴포넌트 마운트 시 Jwt 쿠키 정보 로드
	useEffect(() => {
		const jwt = getJwtByCookie();
		if (!jwt) {
			setLoginUser(null);
			return;
		}
		setJwt(jwt);
	}, []);

	// 쿠키기반 인증정보 조회
	useEffect(() => {
		if (!jwt || process.env['NEXT_PUBLIC_DEFAULT_LOGIN']) {
			return;
		}
		getLoginUser().then(({ data }) => {
			const result = data?.loginState;
			// 로그인 정보 x -> Jwt 쿠키 파기 및 새로고침
			if (!result) {
				logout();
			}
			setLoginUser(result);
		});
	}, [jwt, getLoginUser]);

	return { loginUser, logout };
}

function getJwtByCookie() {
	if (typeof document === 'undefined') {
		return null;
	}

	const jwtCookie = document.cookie
		.split(';')
		.map((value) => value.trim())
		.map((value) => value.split('='))
		.filter((value) => value[0] === 'JWT_TOKEN')
		.flat();

	return jwtCookie[1] || null;
}

function logout() {
	document.cookie = 'JWT_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	window.location.reload();
}
