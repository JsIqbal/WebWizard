const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const https = require("https");
const { promisify } = require("util");

const execPromise = promisify(exec);

// Function to download the website icon
async function downloadIcon(url, dest) {
    const file = fs.createWriteStream(dest);
    return new Promise((resolve, reject) => {
        https
            .get(url, (response) => {
                response.pipe(file);
                file.on("finish", () => {
                    file.close(resolve);
                });
            })
            .on("error", (err) => {
                file.close();
                fs.unlink(dest, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error(
                            "Failed to delete file:",
                            unlinkErr.message
                        );
                    }
                    reject(err.message);
                });
            });
    });
}

// Function to create a Linux app
async function createLinuxApp(url, name) {
    // Replace spaces with underscores for file naming
    const sanitizedName = name.replace(/\s+/g, "_");
    const iconUrl = new URL("/favicon.ico", url).href;
    const iconPath = path.join(__dirname, `${sanitizedName}.png`);

    try {
        console.log(`Downloading icon from: ${iconUrl}`);
        await downloadIcon(iconUrl, iconPath);

        const desktopEntry = `
        [Desktop Entry]
        Version=1.0
        Name=${name}
        Exec=/usr/bin/google-chrome --app=${url}
        Icon=${iconPath}
        Type=Application
        Categories=Network;
        Terminal=false
        StartupWMClass=google-chrome
        `;

        const desktopFilePath = path.join(
            `/home/${process.env.USER}/.local/share/applications/`,
            `${sanitizedName}.desktop`
        );

        // Write the .desktop file
        fs.writeFileSync(desktopFilePath, desktopEntry);
        console.log(`Created .desktop file at: ${desktopFilePath}`);

        // Make the .desktop file executable
        await execPromise(`chmod +x "${desktopFilePath}"`);
        console.log(`${name} app created successfully!`);
    } catch (err) {
        console.error("Error creating app:", err);
    }
}

module.exports.createLinuxApp = createLinuxApp;
