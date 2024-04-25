// script.js
function showSolarAnimation() {
    hideAllAnimations();
    document.getElementById('solar-animation').classList.remove('hidden');
}

function showWindAnimation() {
    hideAllAnimations();
    document.getElementById('wind-animation').classList.remove('hidden');
}

function showHydroAnimation() {
    hideAllAnimations();
    document.getElementById('hydro-animation').classList.remove('hidden');
}
function showTidalAnimation() {
    hideAllAnimations();
    document.getElementById('tidal-animation').classList.remove('hidden');
}

function hideAllAnimations() {
    document.getElementById('solar-animation').classList.add('hidden');
    document.getElementById('wind-animation').classList.add('hidden');
    document.getElementById('hydro-animation').classList.add('hidden');
    document.getElementById('tidal-animation').classList.add('hidden');
}
