'use client';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/components/config/MyApolloClient';
import StoreProvider from '@/components/config/redux/StoreProvider';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

export default function WarpLayer({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<ApolloProvider client={client}>
				<ToastContainer
					toastStyle={{
						width: 'fit-content',
						paddingRight: '25px',
					}}
					stacked={true}
					position="bottom-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
					transition={Bounce}
				/>
				<StoreProvider>{children}</StoreProvider>
			</ApolloProvider>
		</>
	);
}
