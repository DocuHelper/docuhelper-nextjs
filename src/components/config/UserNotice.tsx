'use client';

import { useSubNoticeSubscription } from '@/generated/graphql';
import { addChatHistory } from '@/components/config/redux/chat-slice';
import { useAppDispatch } from '@/components/config/redux/hooks';
import { useEffect } from 'react';

export default function UserNotice() {
	const dispatch = useAppDispatch();
	const { data, loading } = useSubNoticeSubscription();

	useEffect(() => {
		if (!loading && data) {
			const newNotice = JSON.parse(data?.subNotice);
			const noticeType: NoticeType = newNotice.noticeType;

			switch (noticeType) {
				case 'Chat':
					dispatch(addChatHistory(newNotice));
			}
		}
	}, [data, loading]);

	return <></>;
}

type NoticeType = 'Chat' | undefined;
