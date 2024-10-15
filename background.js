chrome.action.onClicked.addListener((tab) => {
    const url = tab.url;
    const name = "My Linux App";

    fetch("http://localhost:3000/create-app", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, name }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("App created successfully:", data.message);
        })
        .catch((error) => {
            console.error("Error in app creation:", error);
        });
});
