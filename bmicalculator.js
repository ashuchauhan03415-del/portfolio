function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter height and weight");
        return;
    }

    height = height / 100; // cm to meter
    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("bmi-value").innerText = "BMI: " + bmi;

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight 😕";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal Weight 😊";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight 😐";
    } else {
        status = "Obese 😟";
    }

    document.getElementById("bmi-status").innerText = status;
}
