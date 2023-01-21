let eyesCount = document.getElementById("eyes-el");
let noEyesCount = document.getElementById("noeyes-el");
let resetBtn = document.getElementById("reset-btn");
let warningBox = document.querySelector(".warning-message");
let eyesWarning = document.getElementById("eyes-warning");
let noEyesWarning = document.getElementById("noeyes-warning");
let btnEyesEl = document.querySelectorAll(".btn-eyes-el");
let btnNoEyesEl = document.querySelectorAll(".btn-noeyes-el");

let totalEyesCount = 0;
let totalNoEyesCount = 0;
let resetCount = 0;

function addEyes() {
    totalEyesCount += 1;
    eyesCount.textContent = totalEyesCount;
    
    if (totalEyesCount > totalNoEyesCount + 2) {
        warningBox.style.display = "block";
        eyesWarning.style.display = "block";
        eyesCount.style.background = "rgba(107,114,128,0.7)";
        eyesCount.style.color = "rgba(107,114,128,1)";
        
        for (let i = 0; i < btnEyesEl.length; ++i) {
            btnEyesEl[i].setAttribute('disabled', '');
            btnEyesEl[i].style.background = "#9CA3AF";
            btnEyesEl[i].style.cursor = "default";
            btnEyesEl[i].style.border = "0";
            btnEyesEl[i].style.boxShadow = "none";
        }
    } else if (totalEyesCount == totalNoEyesCount) {
        noEyesCount.removeAttribute('style');
        eyesCount.removeAttribute('style');        
        warningBox.style.display = "none";
        eyesWarning.style.display = "none";
        noEyesWarning.style.display = "none";
    
        for (let i = 0; i < btnNoEyesEl.length; ++i) {
            btnNoEyesEl[i].removeAttribute('disabled');
            btnNoEyesEl[i].removeAttribute('style');
        }
    }
}

function addNoEyes() {
    totalNoEyesCount += 1;
    noEyesCount.textContent = totalNoEyesCount;
    
    if (totalNoEyesCount > totalEyesCount + 2) {
        warningBox.style.display = "block";
        noEyesWarning.style.display = "block";
        noEyesCount.style.background = "rgba(107,114,128,0.7)";
        noEyesCount.style.color = "rgba(107,114,128,1)";
        for (let i = 0; i < btnEyesEl.length; ++i) {
            btnNoEyesEl[i].setAttribute('disabled', '');
            btnNoEyesEl[i].style.background = "#9CA3AF";
            btnNoEyesEl[i].style.cursor = "default";
            btnNoEyesEl[i].style.border = "0";
            btnNoEyesEl[i].style.boxShadow = "none";
        }
    } else if (totalNoEyesCount == totalEyesCount) {
        noEyesCount.removeAttribute('style');
        eyesCount.removeAttribute('style');        
        warningBox.style.display = "none";
        eyesWarning.style.display = "none";
        noEyesWarning.style.display = "none";
        
        for (let i = 0; i < btnEyesEl.length; ++i) {
            btnEyesEl[i].removeAttribute('disabled');
            btnEyesEl[i].removeAttribute('style');
        }
    }
}

function reset() {
    totalEyesCount = 0;
    totalNoEyesCount = 0;
    eyesCount.textContent = resetCount;
    noEyesCount.textContent = resetCount;
    warningBox.style.display = "none";
    eyesWarning.style.display = "none";
    eyesCount.removeAttribute('style');
    noEyesCount.removeAttribute('style');
    
     for (let i = 0; i < btnNoEyesEl.length; ++i) {
            btnNoEyesEl[i].removeAttribute('disabled');
            btnNoEyesEl[i].removeAttribute('style');
        }
    for (let i = 0; i < btnEyesEl.length; ++i) {
            btnEyesEl[i].removeAttribute('disabled');
            btnEyesEl[i].removeAttribute('style');
        }
}