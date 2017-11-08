function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_imp = attr.weight_imp;
  this.height_imp = attr.height_imp;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_bmi_imp = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};
