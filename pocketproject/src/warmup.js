
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = string;
    htmlElement.appendChild(paragraph);
    return htmlElement;
};

htmlGenerator('Welcome To the Pocket Project Marathon!', partyHeader);