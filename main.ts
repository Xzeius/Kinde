import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

(async () => {
const kinde = await createKindeClient({
client_id: "3d39e4c74dda4a1abc434f23788b33fd",
domain: "https://noteshare.kinde.com",
redirect_uri: "https://xzeius.github.io/Kinde/"
});
})
document.getElementById("login").addEventListener("click", async () => {
    await kinde.login();
    });
    document.getElementById("register").addEventListener("click", async () => {
    await kinde.register();
    });