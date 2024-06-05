let hexInput = document.querySelector('input');
let convertBtn = document.querySelector('button');
let ans = document.querySelector('span');

convertBtn.addEventListener('click', () => {
    const hexCode = hexInput.value.trim(); //used trim() to remove any white space from both ends of a string.
    if (hexCode.length === 7 && hexCode.startsWith('#')) {
        const rgb = hexToRgb(hexCode);
        ans.innerText = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    } else {
        ans.innerText = 'Invalid hex code';
    }
});

function hexToRgb(hex) {
    let hexCode = hex.substring(1);
    let r = parseInt(hexCode.substring(0, 2), 16);
    let g = parseInt(hexCode.substring(2, 4), 16);
    let b = parseInt(hexCode.substring(4, 6), 16);
    return { r, g, b };
}