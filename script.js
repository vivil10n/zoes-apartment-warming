const ascii = `
             ______________________
            /_____________________/|
           |   _   _   _   _    | |
           |  |_| |_| |_| |_|   | |
           |                    | |
           |   _   _   _   _    | |
           |  |_| |_| |_| |_|   | |
           |                    | |
           |   _   _   _   _    | |
           |  |_| |_| |_| |_|   | |
           |                    | |
           |      ________      | |
           |     |  __  __|     | |
           |     | |  ||  |     | |
           |_____|_|__||__|_____|/
                /        \\
               /  ZOE'S   \\
              / APARTMENT  \\
             /______________\\
`;

const message = `

hello zoe!

congratulations on having your very own little corner of the world :-)

i hope this apartment sees many post-bouldering debriefs,
very large bowls of malatang,
random late-night snacks,
and people sitting around for much longer than they planned to.

may your fridge always be full,
your neighbours be normal (hopefully),
and your arms and bruises eventually recover from climbing.

thank you for letting me be one of the first people
to make some memories here with you <3

happy housewarming!!

love,
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