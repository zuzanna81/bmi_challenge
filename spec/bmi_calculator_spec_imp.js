describe("BMICalculator_imp", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 195, height: 70});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(27.98);
  });

});
