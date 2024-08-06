document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("BMIdata")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var weight = parseFloat(document.getElementById('weightInput').value);
      var height = parseFloat(document.getElementById('heightInput').value);

      var BMI = weight / height ** 2;
           var BMIrange = [0, 18.5, 25, 30, 35, 40]
	var BMIcategory = ["Underweight","Normal weight","Overweight","Moderate Obesity","Severe Obesity","Morbid Obesity"]
	
	var category = ""
      for (var i=0; i<BMIrange.length; i++){
	
            if (parseFloat(BMI.toFixed(2))< BMIrange[i]){
			break;
	}
		    category = BMIcategory[i];


}
      

      const scoreDisplay = document.getElementById("score");

      scoreDisplay.textContent = `Your BMI is ${BMI.toFixed(2)} (${category})`;

  
    });
});

// document.getElementById('bmiForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting the traditional way

//     // Get the values from the form
//     let weight = parseFloat(document.getElementById('weight').value);
//     let height = parseFloat(document.getElementById('height').value);

//     // Calculate BMI
//     let bmi = weight / (height ** 2);

//     // Display the result
//     document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;

//     // Log the result to the console (for debugging)
//     console.log('Calculated BMI:', bmi);
// });
