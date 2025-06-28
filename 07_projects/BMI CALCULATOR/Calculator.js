function calculateBMI() {
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let result = document.querySelector(".results"); // FIXED CLASS NAME

    if (!height || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height!`;
    } else if (!weight || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight!`;
    } else {
        const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: <strong>${BMI}</strong></span>`;
    }
}
