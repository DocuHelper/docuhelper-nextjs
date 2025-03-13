export default function layout({children}) {

    return <div className="flex w-full flex-grow">
        <div className="bg-gray-200 min-w-80">
            <div className="flex flex-col h-full hover:drop-shadow-xl transition-all">
                <div className="h-20">

                </div>
                <div className="flex-grow bg-white">

                </div>
                <div className="h-20">

                </div>
            </div>
        </div>
        <div className="p-4 flex flex-col flex-grow justify-center items-center hover:shadow-xl transition-all z-10">
            {children}
        </div>
        <div className="min-w-12 flex flex-col hover:drop-shadow-xl transition-all">
            <div className="bg-gray-200 aspect-square">

            </div>
            <div className="bg-gray-50 flex-grow">

            </div>
        </div>
    </div>
}