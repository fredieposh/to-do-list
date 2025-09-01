export{addEventListenerToPageUnload};

function handlePageLeaving() {
    localStorage.removeItem("page",`${document.querySelector("body").innerHTML}`);
    localStorage.setItem("page",`${document.querySelector("body").innerHTML}`);
}

function addEventListenerToPageUnload() {
    window.addEventListener("unload",handlePageLeaving);
}