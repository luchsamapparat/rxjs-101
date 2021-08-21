//#region Asynchronous XHR Request

const loadDataCallbackButton = document.querySelector<HTMLButtonElement>('#load-data-callback-button')!;
const loadDataPromiseButton = document.querySelector<HTMLButtonElement>('#load-data-promise-button')!;
const loadDataAsyncButton = document.querySelector<HTMLButtonElement>('#load-data-async-button')!;
const dataContainer = document.querySelector<HTMLParagraphElement>('#data')!;

loadDataCallbackButton.addEventListener('click', () => {
    dataContainer.innerText = '';
    loadDataUsingXHR(
        data => dataContainer.innerText = data
    );
});

loadDataPromiseButton.addEventListener('click', () => {
    dataContainer.innerText = '';
    loadDataUsingFetch()
        .then(
            data => dataContainer.innerText = data
        );
});

loadDataAsyncButton.addEventListener('click', async () => {
    dataContainer.innerText = '';
    const data = await loadDataUsingFetch();
    dataContainer.innerText = data;
});


function loadDataUsingXHR(callback: (response: string) => void) {
    const request = new XMLHttpRequest();
    request.open('GET', '/data.txt', true);
    request.send(null);
    request.onload = () => {
        if (request.readyState === 4) {
            callback(request.response)
        }
    };
}

function loadDataUsingFetch() {
    return window.fetch('/data.txt')
        .then(response => response.text())
}

// Promise-based implementation is interchangeable with async/await implementation:
// 
// async function loadDataUsingFetch() {
//     const response = await window.fetch('/data.txt')
//     return response.text();
// }

//#endregion



//#region Counter

const counter = document.querySelector<HTMLParagraphElement>('#counter')!;

let seconds = 1;
setInterval(() => {
    seconds += 1;
    counter.innerText = seconds.toLocaleString();
}, 1000)

//#endregion