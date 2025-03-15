'use client';

import { useEffect, useState } from 'react';

export default function useLongTimeTestHook(loadMsTime = 1000) {
	const [otherState, setOtherState] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		setTimeout(() => {
			// 로그인 정보 x -> Jwt 쿠키 파기 및 새로고침
			setOtherState(true);
		}, loadMsTime);
	}, [loadMsTime]);

	return { otherState };
}
