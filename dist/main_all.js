import roll, { update } from "./dice_all.js";
const button = document.getElementById("roll");
const n_dices_select = document.getElementById("n-dices");
const faces_select = document.getElementById("faces");
const faces_input = document.getElementById("faces-input");
const n_dices_input = document.getElementById("n-dices-input");
button.addEventListener("click", (event) => {
    event.preventDefault();
    const faces = parseInt(faces_input.value);
    const n_dices = parseInt(n_dices_input.value);
    roll(faces, n_dices);
});
function reload(faces, n_dices) {
    window.location.href = "./?faces=" + faces + "&n_dices=" + n_dices;
}
n_dices_select.addEventListener("change", (event) => {
    reload("6", n_dices_select.value);
});
faces_select.addEventListener("change", (event) => {
    reload("6", faces_select.value);
});
//# sourceMappingURL=main_all.js.map