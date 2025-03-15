'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '@/components/config/redux/store';
import StoreStateProvider from '@/components/config/redux/StoreStateProvider';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore | any>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return (
		<Provider store={storeRef.current}>
			<StoreStateProvider>{children}</StoreStateProvider>
		</Provider>
	);
}
