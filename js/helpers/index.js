export function createVideoElement(url) {
    // returns Type Node
    const tempDiv = document.createElement("div");

    tempDiv.innerHTML = `<div class="video-box">
                            <video controls width="auto" src="${url}"></video>
                         </div>`;

    return tempDiv.firstChild;
}
