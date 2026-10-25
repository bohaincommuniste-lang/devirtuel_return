// @ts-ignore
import roll, { set_dice_number, update, update_all } from "./dice.js?v=1";

const button: HTMLButtonElement = document.getElementById("roll") as HTMLButtonElement;
const n_dices_select: HTMLSelectElement = document.getElementById("n-dices") as HTMLSelectElement;
const faces_select: HTMLSelectElement = document.getElementById("faces") as HTMLSelectElement;
const help_box: HTMLDivElement = document.getElementById("help-box") as HTMLDivElement;

const params = new URLSearchParams(window.location.search);

const faces_param = params.get("faces");
const n_param = params.get("n_dices");

let faces: number = 6;
let n_dices: number = 1;

if (faces_param != undefined){
    faces = parseInt(faces_param);
    help_box.hidden = true;
}

if (n_param != undefined){
    n_dices = parseInt(n_param);
    help_box.hidden = true;
}

set_dice_number(n_dices);
update_all(faces, faces);
button.addEventListener("click", ()=>{
    roll(faces);
});

function reload(){
    window.location.href="./?faces="+faces+"&n_dices="+n_dices;
}

faces_select.addEventListener("change", (event: Event)=>{
    const target: HTMLSelectElement = event.target as HTMLSelectElement;

    if(target.value == 'all'){
        window.location.href='all.html'
        return;
    }

    faces = parseInt(target.value);
    reload();
});

n_dices_select.addEventListener("change", (event: Event)=>{
    const target: HTMLSelectElement = event.target as HTMLSelectElement;

    if(target.value == 'all'){
        window.location.href='all.html'
        return;
    }

    n_dices = parseInt(target.value);
    reload();
});

Array.from(faces_select.options).forEach((option) => {
    if (option.value == faces.toString()) {
        option.selected = true;
    }
});

Array.from(n_dices_select.options).forEach((option) => {
    if (option.value == n_dices.toString()) {
        option.selected = true;
    }
});
