'use client';

import LoginButton from '@/components/login/LoginButton';
import { useAppSelector } from '@/components/config/redux/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const loginState = useAppSelector((state) => state.auth.user);
	const router = useRouter();

	useEffect(() => {
		if (loginState) {
			router.push('/dashboard');
		}
	}, [loginState, router]);

	if (loginState) {
		return null;
	}

	return (
		<>
			<h1 className="text-9xl">Docuhelper</h1>
			<div className="mb-10" />
			<div className="flex">
				<LoginButton />
			</div>
		</>
	);
}
