
const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector("body"),
};
let colorChangeId = null;
// refs.body.append.document.createElement('div').append(refs.btnStop).prepend(refs.btnStart);

// refs.body.style.display = 'flex';
// refs.body.style.justifyContent = 'center';

refs.btnStart.addEventListener('click', startChanges);
refs.btnStop.addEventListener('click', stopChanges);

function startChanges() {
    colorChangeId= setInterval(() => {
        return refs.body.style.backgroundColor= getRandomHexColor();
    }, 1000); //
    refs.btnStart.disabled = true;
}

function stopChanges() {
    clearInterval(colorChangeId);
    refs.btnStart.disabled = false;
}
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
