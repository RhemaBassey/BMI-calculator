document.getElementById("BMIdata").addEventListener("submit", function (event) {
  event.preventDefault();
  var weight= document.getElementById("weightInput").value;
  var height= document.getElementById("heightInput").value;

  var BMI = weight/height**2
  console.log(BMI)
});
