'use client';

export default function DocumentItem({ uuid, name, state }: { uuid: string; name: string; state: string }) {
	return (
		<li className="flex justify-between border-gray-400 p-4 last:border-b-0 hover:shadow-xl">
			<p>{name}</p>
			<p>{state}</p>
		</li>
	);
}
