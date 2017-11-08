describe("BMICalculator_imp", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight_imp: 70, height_imp: 195});
    calculator = new BMICalculator_imp();
  });

  it("calculates BMI for a person using imperial method", function() {
  calculator.imperial_bmi(person);
  expect(person.bmiValue_imp).toEqual(28);
  });

});
