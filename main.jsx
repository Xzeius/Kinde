import {KindeProvider} from "@kinde-oss/kinde-auth-react";
const App = () => (
<KindeProvider
clientId="3d39e4c74dda4a1abc434f23788b33fd"
domain="https://noteshare.kinde.com"
redirectUri="https://xzeius.github.io/NoteShare./"
logoutUri="https://xzeius.github.io/NoteShare./"
>
<Routes />
</KindeProvider>
);
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
const { login, register } = useKindeAuth();
<button onClick={register} type="button">Register</button>
<button onClick={login} type="button">Log In</button>