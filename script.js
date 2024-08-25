document.getElementById('convert-btn').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemp;

    if (isNaN(temp)) {
        document.getElementById('converted-temp').innerText = "Please enter a valid number.";
        return;
    }

    if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        document.getElementById('converted-temp').innerText = `${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (temp - 32) * 5/9;
        document.getElementById('converted-temp').innerText = `${convertedTemp.toFixed(2)} °C`;
    }
});
