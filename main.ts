import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

let kinde; // Declare kinde in a scope accessible to event listeners

(async () => {
  kinde = await createKindeClient({
    client_id: "3d39e4c74dda4a1abc434f23788b33fd",
    domain: "https://noteshare.kinde.com",
    redirect_uri: "https://xzeius.github.io/Kinde/"
  });
})();

document.getElementById("login").addEventListener("click", async () => {
  if (kinde) {
    await kinde.login();
  } else {
    console.error("Kinde client not initialized.");
  }
});

document.getElementById("register").addEventListener("click", async () => {
  if (kinde) {
    await kinde.register();
  } else {
    console.error("Kinde client not initialized.");
  }
});
