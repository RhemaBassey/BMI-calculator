document.addEventListener("DOMContentLoaded", function () {
  var weightInput = document.getElementById("weightInput");
  var weightUnitDropdown = document.getElementById("weightUnit");
  var heightInput = document.getElementById("heightInput");
  var heightInputAlt = document.getElementById("heightInputAlt")

  var heightUnitDropdown = document.getElementById("heightUnit");

  document
    .getElementById("BMIdata")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var weight = parseFloat(weightInput.value);
      var weightUnit = weightUnitDropdown.value;

      var height = parseFloat(heightInput.value);
      var heightUnit = heightUnitDropdown.value;
      var heightAlt = heightInputAlt.value

      //weightInput bar toggle

      // convert to metric
      if (weightUnit == "imperial") {
        weight *= 0.45359237;
      }
      if (heightUnit == "imperial") {

        
        let separatorIndex = heightAlt.indexOf("|");
        var feet = heightAlt.slice(0,separatorIndex);
        var inches = heightAlt.slice(separatorIndex+1);

        height = 0.3048*feet + 0.0254*inches;

      }
      var BMI = weight / height ** 2;
      var BMIrange = {
        "0.0": "Underweight",
        18.5: "Normal weight",
        "25.0": "Overweight",
        "30.0": "Moderate Obesity",
        "35.0": "Severe Obesity",
        "40.0": "Morbid Obesity",
      };

      var category = "";
      for (keyWeight in BMIrange) {
        if (parseFloat(BMI.toFixed(2)) < keyWeight) {
          break;
        }
        category = BMIrange[keyWeight];
        6;
      }

      const scoreDisplay = document.getElementById("score");

      scoreDisplay.textContent = `Your BMI is ${BMI.toFixed(2)} (${category})`;
    });

  heightUnitDropdown.addEventListener("change", function () {


    if (this.value === "imperial") {
      heightInput.style.display = "none"
      heightInput.removeAttribute('required');

      heightInputAlt.style.display = "inline";
      heightInputAlt.setAttribute('required', 'required')

    } else if (this.value === "metric") {
      heightInput.style.display = "inline";
      heightInput.setAttribute('required', 'required')

      heightInputAlt.style.display = "none"
      heightInputAlt.removeAttribute('required');
    }
  });

   // Function to set the placeholder color
   function updatePlaceholderColor() {
    if (heightInputAlt.value === '') {
      heightInputAlt.classList.add('placeholder');
    } else {
      heightInputAlt.classList.remove('placeholder');
    }
  }

  // Initial placeholder color
  updatePlaceholderColor();

  heightInputAlt.addEventListener("change", updatePlaceholderColor);
});
