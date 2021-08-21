//#region Synchronous XHR Request

const loadDataButton = document.querySelector<HTMLButtonElement>('#load-data-button')!;
const dataContainer = document.querySelector<HTMLParagraphElement>('#data')!;

loadDataButton.addEventListener('click', () => {
    dataContainer.innerText = loadData()
});

function loadData() {
    const request = new XMLHttpRequest();
    request.open('GET', '/data.txt', false);
    request.send(null);
    return request.response;
}

//#endregion



//#region Counter

const counter = document.querySelector<HTMLParagraphElement>('#counter')!;

let seconds = 1;
setInterval(() => {
    seconds += 1;
    counter.innerText = seconds.toLocaleString();
}, 1000)

//#endregion