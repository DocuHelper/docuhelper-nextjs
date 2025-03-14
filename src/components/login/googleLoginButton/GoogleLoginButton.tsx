import GoogleButton from "react-google-button";

export default function GoogleLoginButton() {

    return <a href={"/oauth2/authorization/google"}>
        <GoogleButton type={"light"} />
    </a>
}