//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    function findDomLevel(element) {
        let level = 0;
        while (element) {
            level++;
            element = element.parentElement;
        }
        return level;
    }

	const targetElement = document.getElementById('level');
    if (targetElement) {
        const domLevel = findDomLevel(targetElement);
        alert(`The level of the element is: ${domLevel}`);
    } else {
        alert('Element with id "level" not found.');
    }
});
