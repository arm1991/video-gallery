const store = {
    domElements: {
        button: document.getElementById("video"),
        container: document.querySelector(".container"),
        buttonBox: document.getElementById("add-video-box"),
    },
    state: {
        dragCounter: 0,
    },
};

export default store;
