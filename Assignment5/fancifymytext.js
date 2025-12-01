function makeTextBigger() {
    alert("Hello, world!");
    const textArea = document.getElementById("userText");
    if (textArea) {
        textArea.style.fontSize = "24pt";
    }
}

function setTextStyle() {
    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancyRadio");
    const boringRadio = document.getElementById("boringRadio");
    if (!textArea || !fancyRadio || !boringRadio) {
        return;
    }

    if (fancyRadio.checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    const textArea = document.getElementById("userText");
    if (!textArea) {
        return;
    }

    textArea.value = textArea.value.toUpperCase();
    const sentences = textArea.value.split(".");
    const updatedSentences = sentences
        .map(sentence => {
            const trimmed = sentence.trim();
            if (trimmed.length === 0) {
                return "";
            }
            const words = trimmed.split(/\s+/);
            const lastIndex = words.length - 1;
            words[lastIndex] = `${words[lastIndex]}-Moo`;
            return words.join(" ");
        })
        .filter(sentence => sentence.length > 0);

    if (updatedSentences.length > 0) {
        textArea.value = `${updatedSentences.join(". ")}.`;
    }
}
