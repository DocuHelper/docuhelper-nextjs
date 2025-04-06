'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownPreview({ markdown }: { markdown: string }) {
	return (
		<Markdown className="prose" remarkPlugins={[remarkGfm]}>
			{markdown}
		</Markdown>
	);
}
