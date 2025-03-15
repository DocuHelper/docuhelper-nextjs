'use client';

import { useAppDispatch } from '@/components/config/redux/hooks';
import useLoginStateHook from '@/customHook/useLoginStateHook';
import { initAuthStore } from '@/components/config/redux/auth-slice';
import useLongTimeTestHook from '@/customHook/useLongTimeTestHook';

/**
 * redux 상태 초기화까지 렌더링을 지연시킵니다.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function StoreStateProvider({ children }: { children: React.ReactNode }) {
	const dispatch = useAppDispatch();
	const { loginUser } = useLoginStateHook();
	const { otherState } = useLongTimeTestHook(1000);

	dispatch(initAuthStore(loginUser));

	if (loginUser === undefined || otherState === undefined) {
		console.log('로딩이 지연되고있습니다');
		return;
	} else {
		console.log('로딩 끝!');
	}

	return <>{children}</>;
}
