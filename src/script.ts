//#region Asynchronous XHR Request

function loadDataViaCallback(callback: (response: string) => void) {
    const request = new XMLHttpRequest();
    request.open('GET', '/data.txt', true);
    request.send(null);
    request.onload = () => {
        if (request.readyState === 4) {
            callback(request.response)
        }
    };
}

async function loadDataViaFetch() {
    return (await window.fetch('/data.txt')).text();
}

const loadDataCallbackButton = document.querySelector<HTMLButtonElement>('#load-data-callback-button')!;
const loadDataPromiseButton = document.querySelector<HTMLButtonElement>('#load-data-promise-button')!;
const loadDataAsyncButton = document.querySelector<HTMLButtonElement>('#load-data-async-button')!;
const dataContainer = document.querySelector<HTMLParagraphElement>('#data')!;

loadDataCallbackButton.addEventListener('click', () => {
    dataContainer.innerText = '';
    loadDataViaCallback(
        data => dataContainer.innerText = data
    );
});

loadDataPromiseButton.addEventListener('click', () => {
    dataContainer.innerText = '';
    loadDataViaFetch()
        .then(
            data => dataContainer.innerText = data
        );
});

loadDataAsyncButton.addEventListener('click', async () => {
    dataContainer.innerText = '';
    const data = await loadDataViaFetch();
    dataContainer.innerText = data;
});

//#endregion



//#region Counter

const counter = document.querySelector<HTMLParagraphElement>('#counter')!;

let seconds = 1;
setInterval(() => {
    seconds += 1;
    counter.innerText = seconds.toLocaleString();
}, 1000)

//#endregion