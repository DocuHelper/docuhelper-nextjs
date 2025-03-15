'use client';

import useLoginStateHook from '@/customHook/useLoginStateHook';
import GoogleLoginButton from '@/components/login/googleLoginButton/GoogleLoginButton';

export default function LoginButton() {
	const { loginUser, logout } = useLoginStateHook();

	if (!loginUser) return <GoogleLoginButton />;

	return (
		<>
			<div className="flex items-center gap-4">
				<p>{loginUser.email}</p>
				<button onClick={logout}>Logout</button>
			</div>
		</>
	);
}
