import store from "./store/index.js";
import { createVideoElement } from "./helpers/index.js";

const { button, container, buttonBox } = store.domElements;
let { dragCounter } = store.state;

buttonBox.addEventListener("dragover", handleDragOver);
buttonBox.addEventListener("dragenter", handleDragEnter);
buttonBox.addEventListener("dragleave", handleDragEnd);
buttonBox.addEventListener("drop", handleDrop);

button.addEventListener("change", handleFileInput);

function addFile(file) {
    const blob = new Blob([file], {
        type: file.type,
    });
    const url = URL.createObjectURL(blob);
    const videoEl = createVideoElement(url);

    container.insertBefore(videoEl, buttonBox);
}

function handleFileInput(e) {
    const files = e.target.files;
    if (!files || !files[0]) return;

    addFile(files[0]);

    button.value = "";
}

function handleDragEnter() {
    dragCounter++;

    if (dragCounter === 1) {
        buttonBox.classList.add("dragged");
    }
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnd() {
    dragCounter--;
    if (dragCounter === 0) {
        buttonBox.classList.remove("dragged");
    }
}

function handleDrop(e) {
    e.preventDefault();
    handleDragEnd();
    Array.from(e.dataTransfer.files).forEach((file) => {
        addFile(file);
    });
}
