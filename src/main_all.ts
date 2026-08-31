import roll, { update } from "./dice_all.js";

const button: HTMLButtonElement = document.getElementById("roll") as HTMLButtonElement;
const n_dices_select: HTMLSelectElement = document.getElementById("n-dices") as HTMLSelectElement;
const faces_select: HTMLSelectElement = document.getElementById("faces") as HTMLSelectElement;
const faces_input: HTMLInputElement = document.getElementById("faces-input") as HTMLInputElement;
const n_dices_input: HTMLInputElement = document.getElementById("n-dices-input") as HTMLInputElement;

button.addEventListener("click", (event: Event)=>{
    event.preventDefault();

    const faces: number = parseInt(faces_input.value);
    const n_dices: number = parseInt(n_dices_input.value);

    roll(faces, n_dices);
});

function reload(faces: string, n_dices: string){
    window.location.href="./?faces="+faces+"&n_dices="+n_dices;
}

n_dices_select.addEventListener("change", (event) => {
    reload("6", n_dices_select.value);
});

faces_select.addEventListener("change", (event) => {
    reload("6", faces_select.value);
});