import DocumentListSideBar from "@/components/dashboard/DocumentListSideBar";
import UserProfile from "@/components/dashboard/UserProfile";

export default function layout({children}) {

    return <div className="flex w-full flex-grow">
        {/* left sidebar */}
        <div className=" bg-gray-200 min-w-80">
            <div className="flex flex-col h-full hover:drop-shadow-xl transition-all">
                {/* userProfile */}
                <div className="h-20">
                    <UserProfile/>
                </div>
                {/* documentList */}
                <div className="flex-grow bg-white">
                    <DocumentListSideBar/>
                </div>
                <div className="h-20">

                </div>
            </div>
        </div>
        {/* center */}
        <div className="p-4 flex flex-col flex-grow justify-center items-center hover:shadow-xl transition-all z-10">
            {children}
        </div>
        {/* right sidebar */}
        <div className="min-w-12 flex flex-col hover:drop-shadow-xl transition-all">
            <div className="bg-gray-200 aspect-square">

            </div>
            <div className="bg-gray-50 flex-grow">

            </div>
        </div>
    </div>
}