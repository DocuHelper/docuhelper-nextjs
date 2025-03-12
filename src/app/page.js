import LoginButton from "@/components/login/LoginButton";

export default function Home() {
    return (
        <>
            <h1 className="text-9xl">Docuhelper</h1>
            <div className="mb-10"/>
            <div className="flex">
                <LoginButton/>
            </div>
        </>
    );
}
