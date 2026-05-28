const releaseMeta = document.querySelector("#releaseMeta");
const downloadLink = document.querySelector("#downloadLink");

async function setLatestReleaseDownload() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/rogue-socket/gitstatus/releases/latest",
      { headers: { Accept: "application/vnd.github+json" } }
    );

    if (!response.ok) {
      return;
    }

    const release = await response.json();
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const zipAsset =
      assets.find((asset) => /GitStatusBar.*\.zip$/i.test(asset.name)) ||
      assets.find((asset) => /\.zip$/i.test(asset.name));

    if (!zipAsset?.browser_download_url) {
      return;
    }

    downloadLink.href = zipAsset.browser_download_url;
    releaseMeta.textContent = `${release.tag_name} · ${zipAsset.name}`;
  } catch {
    releaseMeta.textContent = "macOS 13+ · latest release on GitHub";
  }
}

setLatestReleaseDownload();
