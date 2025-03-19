const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const heightFeet = parseFloat(document.querySelector("#height").value); // Read height in feet
    const weight = parseFloat(document.querySelector("#weight").value); // Read weight in kg
    const result = document.querySelector("#result");

    // Validate height
    if (isNaN(heightFeet) || heightFeet <= 0) {
        result.innerHTML = "Please enter a valid height!";
        return;
    }

    // Validate weight
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight!";
        return;
    }

    // Convert feet to centimeters
    const heightCm = heightFeet * 30.48; // Convert feet to cm

    // Calculate BMI
    const bmi = (weight / ((heightCm / 100) ** 2)).toFixed(2);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = `<span>Your BMI is: ${bmi} (${category})</span>`;
});
