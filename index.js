function saveCheckboxValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedValues = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    });

    localStorage.setItem('checkedValues', JSON.stringify(checkedValues));
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    saveCheckboxValues();
});

function loadCheckboxValues() {
    const checkedValues = JSON.parse(localStorage.getItem('checkedValues'));

    if (checkedValues) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            if (checkedValues.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
    }
}

loadCheckboxValues();
