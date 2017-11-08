function BMICalculator_imp(){
};

BMICalculator_imp.prototype.imperial_bmi = function(obj) {
  var weight_imp = obj.weight_imp;
  var height_imp = obj.height_imp;
  if (weight_imp > 0 && height_imp > 0) {
    var finalBmi_imp = (weight_imp * 703) / (height_imp * height_imp);
    obj.bmiValue_imp = parseFloat(finalBmi_imp.toFixed(2));
  }
};

function setBMIMessage_imp (obj){
  if (obj.bmiValue_imp < 18.5) {
    obj.bmiMessage_imp = "Underweight"
  }
  if (obj.bmiValue_imp > 18.5 && obj.bmiValue_imp < 25) {
    obj.bmiMessage_imp = "Normal"
  }
  if (obj.bmiValue_imp > 25 && obj.bmiValue_imp < 30) {
    obj.bmiMessage_imp = "Overweight"
  }
  if (obj.bmiValue_imp> 30) {
    obj.bmiMessage_imp = "Obese"
  }
}

BMICalculator_imp.prototype.imperial_bmi = function(obj) {
  var weight_imp = obj.weight_imp;
  var height_imp = obj.height_imp;
  if (weight_imp > 0 && height_imp > 0) {
    var finalBmi_imp = (weight * 703) / (height_imp * height_imp);
    obj.bmiValue_imp = parseFloat(finalBmi_imp.toFixed(2));
    setBMIMessage_imp(obj)
  }
};
