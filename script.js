const ascii = `
           )
         ( _   _._
          |_|-'_~_\`-._
       _.-'-_~_-~_-~_-_\`-._
   _.-'_~-_~-_-~-_~_~-_~-_\`-._
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    |  []  []   []   []  [] |
    |           __    ___   |
  ._|  []  []  | .|  [___]  |_._._._._._._._._._._._._._._._._.
  |=|________()|__|()_______|=|=|=|=|=|=|=|=|=|=|=|=|=|=|=|=|=|
^^^^^^^^^^^^^^^ === ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ______________  ===
   <_ASEAN_BADDIES_>  ===
          ^|^            ===
              |                ===
`;

const message = `

sydney  →  canberra

a small housewarming delivery

hello linh, sabut and rishika!

thank you for inviting me into your new home :)

i brought a little something from sydney:
filipino bread for the table,
and aesop hand soap for the bathroom :p

may your new home be full of good food,
clean hands, warm lights,
and friends who always arrive hungry hehe

with love,
vivian
`;

const typedText = document.getElementById("typed-text");

let asciiIndex = 0;
let messageIndex = 0;

const asciiSpeed = 10;
const messageSpeed = 42;

function typeAscii() {
  if (asciiIndex < ascii.length) {
    typedText.textContent += ascii.charAt(asciiIndex);
    typedText.classList.add("cursor");
    asciiIndex++;
    setTimeout(typeAscii, asciiSpeed);
  } else {
    setTimeout(typeMessage, 500);
  }
}

function typeMessage() {
  if (messageIndex < message.length) {
    typedText.textContent += message.charAt(messageIndex);
    typedText.classList.add("cursor");
    messageIndex++;
    setTimeout(typeMessage, messageSpeed);
  } else {
    typedText.classList.remove("cursor");
  }
}

typeAscii();