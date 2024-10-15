document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];

        if (currentTab && currentTab.url) {
            convertButton.disabled = false;

            convertButton.addEventListener("click", function () {
                console.log("Convert button clicked!");

                const pageUrl = currentTab.url;
                const pageTitle = currentTab.title;

                console.log(`Page URL: ${pageUrl}, Page Title: ${pageTitle}`);

                fetch("http://localhost:3000/create-app", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        url: pageUrl,
                        name: pageTitle,
                    }),
                })
                    .then((response) => response.text())
                    .then((data) => {
                        console.log("App created successfully:", data);
                    })
                    .catch((error) =>
                        console.error("Error in app creation:", error)
                    );
            });
        }
    });
});
