'use client';

export default function Dashboard() {
	return (
		<>
			<div className="flex w-full justify-center gap-10">
				<div className="flex w-4/5 flex-col items-center gap-10">
					<div className="flex h-full w-full flex-grow justify-center gap-10 rounded-2xl border border-gray-300 p-6 transition-all hover:shadow-xl">
						<p>
							Commodo ut magna ea sit dolor aute velit proident dolore do aliqua sit culpa et sit sunt
							consectetur eiusmod exercitation qui excepteur aute nisi irure sint ullamco exercitation
							quis labore anim occaecat enim id ex cillum dolore duis fugiat aliqua ad sint aute deserunt
							in pariatur aliqua esse nisi laboris reprehenderit eiusmod ad dolor esse minim ipsum ex
							adipisicing et magna ex dolore nostrud fugiat consectetur culpa aliqua duis ea aliqua elit
							dolor ex in pariatur incididunt ipsum proident incididunt proident id anim est sunt commodo
							enim consequat magna mollit qui ea occaecat do mollit duis reprehenderit tempor minim non.
						</p>
					</div>

					<div className="flex w-full justify-center gap-10">
						<input className="h-14 flex-grow rounded-full border border-gray-300 transition-all hover:shadow-xl" />
						<button className="aspect-square h-full rounded-full border-gray-300 bg-gray-200 transition-all hover:shadow-xl"></button>
					</div>

					<div className="flex justify-center gap-10">
						<ul className="flex h-14 flex-grow gap-4 rounded-full border border-gray-300 p-3.5 transition-all hover:shadow-xl">
							<li className="aspect-square h-full rounded-full bg-gray-400"></li>
							<li className="aspect-square h-full rounded-full bg-gray-400"></li>
							<li className="aspect-square h-full rounded-full bg-gray-400"></li>
							<li className="flex aspect-square h-full items-center justify-center rounded-full border border-gray-400 text-xl text-gray-400">
								+
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
