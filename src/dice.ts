const result_display_container: HTMLDivElement = document.getElementById('result-img-container') as HTMLDivElement;
const result: HTMLImageElement = document.getElementById('res') as HTMLImageElement;

function isEldred(){
    const ua = navigator.userAgent;
    return /Mac|iPhone|iPod|iPad/.test(ua);
}

function randomInt(min: number, max: number): number {
  const range = max - min + 1;
  const limit = 0xFFFFFFFF - (0xFFFFFFFF % range);

  const buf = new Uint32Array(1);
  let val: number;
  do {
    crypto.getRandomValues(buf);
    val = buf[0]!;
  } while (val >= limit);

  return min + (val % range);
}

export function update(i: number, value: number, max: number){
    let v: string = value.toString();
    let result_display = result_display_container.children.item(i)!;

    result_display.innerHTML = "";
    if(max <= 6){
        let img = document.createElement("img");
        img.alt = v;
        img.title = v;
        img.src = './img/de/de'+v+'.png';

        result_display.appendChild(img);
    }
    else{
        let span = document.createElement("span");
        span.innerText = v;

        result_display.appendChild(span);
    }
}

export function update_total(value: number){
    result.innerText = "Résultat : "+value.toString();
}

export function set_dice_number(n: number){
    result_display_container.innerHTML = '';

    for(let i=0; i<n; ++i){
        const child = document.createElement("div");
        child.classList.add("result-img");
        child.classList.add("qqq");

        result_display_container.appendChild(child);
    }
}

export function update_all(value: number, max: number){
    for(let i=0; i<result_display_container.children.length; ++i){
        update(i, value, max);
    }
}

export default function roll(max=6){
    let sum: number = 0;
    for(let i=0; i<result_display_container.children.length; ++i){
        let random;
        if(isEldred() && max == 20){
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();
    
            if(hour==21 && minute>=15 && minute < 30){
                random = randomInt(1, 6) * 3;
            }
            else if(hour==21 && minute >= 30 && minute <= 45){
                random = randomInt(1, 5)*4;
            }
            else{
                random = randomInt(1, 100);
                const random2 = randomInt(1, 1000000000);

                if (random <= 1){
                    random = 1;
                }
                else if (random <= 7){
                    random = random2 % 5 + 2;
                }
                else if(random <= 47){
                    random = random2 % 10 + 7;
                }
                else if(random <= 57){
                    random = 17;
                }
                else if(random <= 61){
                    random = 18;
                }
                else{
                    random = random2 %2 + 19;
                }
            }
        }
        else{
            random = randomInt(1, max);
        }

        update(i, random, max);
        sum += random;
    }
    update_total(sum);
}