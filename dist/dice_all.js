const result_total = document.getElementById('res-total');
const result_details = document.getElementById('res-details');
function isEldred() {
    const ua = navigator.userAgent;
    return /Mac|iPhone|iPod|iPad/.test(ua);
}
export function randomInts(min, max, n) {
    const range = max - min + 1;
    const limit = 0xFFFFFFFF - (0xFFFFFFFF % range);
    const result = new Array(n);
    const buf = new Uint32Array(n);
    crypto.getRandomValues(buf);
    for (let i = 0; i < n; i++) {
        let val = buf[i];
        while (val >= limit) {
            const singleBuf = new Uint32Array(1);
            crypto.getRandomValues(singleBuf);
            val = singleBuf[0];
        }
        result[i] = min + (val % range);
    }
    return result;
}
export function update(values) {
    let sum = 0;
    result_details.innerHTML = "";
    for (let i = 0; i < values.length; ++i) {
        let v = values[i];
        sum += v;
        result_details.innerHTML += v.toString() + ((i < values.length - 1) ? ' + ' : ' = ');
    }
    result_total.innerText = "Résultat : " + sum;
    const bold = document.createElement("span");
    bold.style.fontWeight = "bold";
    bold.innerHTML = sum.toString();
    result_details.appendChild(bold);
}
export default function roll(max, n) {
    let random;
    if (isEldred() && max == 20) {
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        if (hour == 21 && minute >= 15 && minute < 30) {
            random = randomInts(1, 6, n);
            for (let i = 0; i < n; ++i)
                random[i] *= 3;
        }
        else if (hour == 21 && minute >= 30 && minute <= 45) {
            random = randomInts(1, 5, n);
            for (let i = 0; i < n; ++i)
                random[i] *= 4;
        }
        else {
            random = randomInts(1, 100, n);
            const random2 = randomInts(1, 1000000000, n);
            for (let i = 0; i < n; ++i) {
                if (random[i] <= 1) {
                    random[i] = 1;
                }
                else if (random[i] <= 7) {
                    random[i] = random2[i] % 5 + 2;
                }
                else if (random[i] <= 47) {
                    random[i] = random2[i] % 10 + 7;
                }
                else if (random[i] <= 57) {
                    random[i] = 17;
                }
                else if (random[i] <= 61) {
                    random[i] = 18;
                }
                else {
                    random[i] = random2[i] % 2 + 19;
                }
            }
        }
    }
    else {
        random = randomInts(1, max, n);
    }
    update(random);
}
//# sourceMappingURL=dice_all.js.map