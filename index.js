document.addEventListener("DOMContentLoaded", function () {
  var weightInput = document.getElementById("weightInput");
  var weightUnitDropdown = document.getElementById("weightUnit");

  var heightInput = document.getElementById("heightInput");
  var heightInputFt = document.getElementById("heightInputFt");
  var heightInputIn = document.getElementById("heightInputIn");


  var heightUnitDropdown = document.getElementById("heightUnit");

  document
    .getElementById("BMIdata")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var weight = parseFloat(weightInput.value);
      var weightUnit = weightUnitDropdown.value;

      var height = parseFloat(heightInput.value);
      var heightUnit = heightUnitDropdown.value;
      var heightAlt = heightInputAlt.value;

      //weightInput bar toggle

      // convert to metric
      if (weightUnit == "imperial") {
        weight *= 0.45359237;
      }
      if (heightUnit == "imperial") {
        
        var feet = heightInputFt.value;
        var inches = heightInputIn.value;


        height = 0.3048 * feet + 0.0254 * inches;
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

      scoreDisplay.textContent = `Your BMI is ${BMI.toFixed(2)} \n(${category})`;
    });

  heightUnitDropdown.addEventListener("change", function () {
    if (this.value === "imperial") {
      heightInput.style.display = "none";
      heightInput.removeAttribute("required");

      heightInputAlt.style.display = "inline";
      heightInputFt.setAttribute("required", "required");
      heightInputIn.setAttribute("required", "required");

    } else if (this.value === "metric") {
      heightInput.style.display = "inline";
      heightInput.setAttribute("required", "required");

      heightInputAlt.style.display = "none";
      heightInputFt.removeAttribute("required");
      heightInputIn.removeAttribute("required")
    }
  });

  // Function to set the placeholder color
  function updatePlaceholderColor() {
    if (heightInputFt.value === "") {
      heightInputFt.classList.add("placeholder");
    } else {
      heightInputFt.classList.remove("placeholder");
    }
    if (heightInputIn.value === "") {
      heightInputIn.classList.add("placeholder");
    } else {
      heightInputIn.classList.remove("placeholder");
    }
  }

  // Initial placeholder color
  updatePlaceholderColor();

  heightInputAlt.addEventListener("change", updatePlaceholderColor);
});
