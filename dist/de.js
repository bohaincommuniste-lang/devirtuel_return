const result_display_container = document.getElementById('result-img-container');
const result = document.getElementById('res');
function randomInt(min, max) {
    const range = max - min + 1;
    const limit = 0xFFFFFFFF - (0xFFFFFFFF % range);
    const buf = new Uint32Array(1);
    let val;
    do {
        crypto.getRandomValues(buf);
        val = buf[0];
    } while (val >= limit);
    return min + (val % range);
}
export function update(i, value, max) {
    let v = value.toString();
    let result_display = result_display_container.children.item(i);
    result_display.innerHTML = "";
    if (max <= 6) {
        let img = document.createElement("img");
        img.alt = v;
        img.title = v;
        img.src = './img/de/de' + v + '.png';
        result_display.appendChild(img);
    }
    else {
        let span = document.createElement("span");
        span.innerText = v;
        result_display.appendChild(span);
    }
}
export function update_total(value) {
    result.innerText = "Résultat : " + value.toString();
}
export function set_dice_number(n) {
    result_display_container.innerHTML = '';
    for (let i = 0; i < n; ++i) {
        const child = document.createElement("div");
        child.classList.add("result-img");
        child.classList.add("qqq");
        result_display_container.appendChild(child);
    }
}
export function update_all(value, max) {
    for (let i = 0; i < result_display_container.children.length; ++i) {
        update(i, value, max);
    }
}
export default function roll(max = 6) {
    let sum = 0;
    for (let i = 0; i < result_display_container.children.length; ++i) {
        let random = randomInt(1, max);
        update(i, random, max);
        sum += random;
    }
    update_total(sum);
}
//# sourceMappingURL=de.js.map