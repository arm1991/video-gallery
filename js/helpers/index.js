export function createVideoElement(url) {
    // returns Type Node
    const tempDiv = document.createElement("div");

    tempDiv.innerHTML = `<div class="video-box">
                            <video controls width="auto" src="${url}"></video>
                            <a class="download-button" href="${url}" download>
                                Download
                            </a>
                         </div>
                         `;

    return tempDiv.firstChild;
}
