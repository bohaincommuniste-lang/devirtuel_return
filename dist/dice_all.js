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
        random = randomInts(1, 100, n);
        const random2 = randomInts(1, 1000000000, n);
        for (let i = 0; i < n; ++i) {
            if (random[i] <= 8) {
                random[i] = 1;
            }
            else if (random[i] <= 16) {
                random[i] = 17;
            }
            else if (random[i] <= 24) {
                random[i] = 19;
            }
            else if (random[i] <= 32) {
                random[i] = 20;
            }
            else if (random[i] <= 40) {
                random[i] = 3;
            }
            else if (random[i] <= 48) {
                random[i] = 11;
            }
            else if (random[i] <= 52) {
                random[i] = 2;
            }
            else if (random[i] <= 56) {
                random[i] = 4;
            }
            else if (random[i] <= 60) {
                random[i] = 5;
            }
            else if (random[i] <= 63) {
                random[i] = 6;
            }
            else if (random[i] <= 67) {
                random[i] = 7;
            }
            else if (random[i] <= 71) {
                random[i] = 8;
            }
            else if (random[i] <= 75) {
                random[i] = 9;
            }
            else if (random[i] <= 78) {
                random[i] = 10;
            }
            else if (random[i] <= 82) {
                random[i] = 12;
            }
            else if (random[i] <= 84) {
                random[i] = 13;
            }
            else if (random[i] <= 88) {
                random[i] = 14;
            }
            else if (random[i] <= 91) {
                random[i] = 15;
            }
            else if (random[i] <= 95) {
                random[i] = 16;
            }
            else {
                random[i] = 18;
            }
        }
    }
    else {
        random = randomInts(1, max, n);
    }
    update(random);
}
//# sourceMappingURL=dice_all.js.map