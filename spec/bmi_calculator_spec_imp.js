describe("BMICalculatorImp", function() {
  var calculator;
  var person;

  beforeEach(function) {
    person = new Person({weight: 70, height: 195});
    calculator = new BMICalculatorImp();
  });

  it("calculates BMI for a person using imperial method", function() {
  calculator.imperial_bmi(person);
  expect(person.bmiValue).toEqual(28);
  });

});
