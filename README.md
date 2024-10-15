# WebWizard - web page to linux native app!

## Description

A web extension to convert web pages to linux native application. Work is in progress and Alpha version is released.

## Prerequisites

-   Google Chrome or any Chromium-based browser (e.g., Brave, Microsoft Edge)

## Testing the Extension Locally

Follow these steps to test the extension locally in your browser:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/JsIqbal/WebWizard.git
    cd WebWizard

    npm install
    npm run start
    ```

2. **Open Chrome**
   Launch Google Chrome (or a Chromium-based browser).

3. **Open Extensions Page**

    - In the address bar, type `chrome://extensions/` and press Enter.
    - Alternatively, you can click on the three vertical dots in the upper right corner, go to **More tools**, and select **Extensions**.

4. **Enable Developer Mode**

    - In the top right corner of the Extensions page, toggle the **Developer mode** switch to the ON position.

5. **Load Unpacked Extension**

    - Click on the **Load unpacked** button.
    - Navigate to the directory where your extension files are located and select it.

6. **Test the Extension**

    - Once loaded, you should see your extension appear in the list.
    - Test the extension functionality by interacting with it in the browser.
    - Check for any errors or issues in the console by opening the Developer Tools (F12 or right-click > Inspect).

7. **Update the Extension**

    - If you make changes to the extension files, click the **Reload** (circular arrow) button next to your extension on the Extensions page to load the latest changes.

8. **Uninstall the Extension (Optional)**
    - To remove the extension, click the **Remove** button next to it on the Extensions page.

## Troubleshooting

-   If the extension does not load, ensure that there are no errors in the manifest file (`manifest.json`).
-   Check the console in Developer Tools for any error messages that may indicate what went wrong.

## License

Include your licensing information here.

## Contributing

If you'd like to contribute, please open an issue or submit a pull request.

```
path to remove the .desktop : /home/kraken/.local/share/applications
```
