function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_imp = attr.weight_imp;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_bmi_immp = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};
