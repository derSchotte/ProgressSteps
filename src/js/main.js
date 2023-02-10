// Importieren Sie das SCSS-Stylesheet
import './../scss/style.scss';

// Definiere die Variabeln für den Fortschritt, zurück- und vorwärts-Button und Kreise/Elemente
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// CurrentActive speichert den aktuellen Wert des Fortschritts
let currentActive = 1;

// EventListener registrieren klick-Ereignis für 'next' und 'prev' Button
next.addEventListener('click', () => {
    currentActive++;

    // Prüfen, ob der Maximalwert des Fortschritts überschritten wird
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    // Aktualisiere den Fortschritt
    update();

})

prev.addEventListener('click', () => {
    currentActive--;

    // Prüfen, ob der Minimalwert des Fortschritts unterschritten wird
    if (currentActive < 1) {
        currentActive = 1;
    }

    // Aktualisiere den Fortschritt
    update();

})

// Funktion zum Aktualisieren des Fortschritts
function update() {
    // Iterieren über die Elemente und setzen 'active' Klasse + breite des Fortschritts
    circles.forEach((circle, index) => {

        if (index < currentActive) {
            circle.classList.add('active');

        } else {
            circle.classList.remove('active');

        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Prüfen des aktuellen Fortschritts und aktivieren/deaktivieren entsprechend
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
