"use client"

export default function Dashboard() {

    return <>
        <div className="flex gap-10 w-full justify-center">
            <div className="w-4/5 flex flex-col items-center gap-10">
                <div
                    className="gap-10 flex flex-grow justify-center border border-gray-300 rounded-2xl hover:shadow-xl p-6 transition-all w-full h-full">
                    <p>
                        Commodo ut magna ea sit dolor aute velit proident dolore do aliqua sit culpa et sit sunt consectetur eiusmod exercitation qui excepteur aute nisi irure sint ullamco exercitation quis labore anim occaecat enim id ex cillum dolore duis fugiat aliqua ad sint aute deserunt in pariatur aliqua esse nisi laboris reprehenderit eiusmod ad dolor esse minim ipsum ex adipisicing et magna ex dolore nostrud fugiat consectetur culpa aliqua duis ea aliqua elit dolor ex in pariatur incididunt ipsum proident incididunt proident id anim est sunt commodo enim consequat magna mollit qui ea occaecat do mollit duis reprehenderit tempor minim non.
                    </p>
                </div>

                <div className="w-full gap-10 flex justify-center">
                    <input
                        className="rounded-full flex-grow h-14 border-gray-300 border hover:shadow-xl transition-all"/>
                    <button
                        className="h-full aspect-square bg-gray-200 rounded-full border-gray-300 hover:shadow-xl transition-all"></button>
                </div>

                <div className="gap-10 flex justify-center">
                    <ul className="p-3.5 rounded-full flex gap-4 flex-grow h-14 border-gray-300 border hover:shadow-xl transition-all">
                        <li className="h-full aspect-square bg-gray-400 rounded-full"></li>
                        <li className="h-full aspect-square bg-gray-400 rounded-full"></li>
                        <li className="h-full aspect-square bg-gray-400 rounded-full"></li>
                        <li className="h-full aspect-square border border-gray-400 flex items-center justify-center text-xl text-gray-400 rounded-full">+</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}
