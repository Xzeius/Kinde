// your_custom_script.js

(async () => {
    const kinde = await createKindeClient({
        client_id: "3d39e4c74dda4a1abc434f23788b33fd",
        domain: "https://noteshare.kinde.com",
        redirect_uri: window.location.origin
    });

    // Bind events to the login and register buttons
    document.getElementById("login").addEventListener("click", async () => {
        await kinde.login();
    });

    document.getElementById("register").addEventListener("click", async () => {
        await kinde.register();
    });
})();
