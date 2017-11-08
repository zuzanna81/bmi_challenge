describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight_imp: 198, height_imp: 70});
  });

  it('should have weight of 198', function() {
    expect(person.weight_imp).toEqual(198);
  });

  it('should have height of 70', function() {
    expect(person.height_imp).toEqual(70);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi_imp();
    expect(person.bmiValue_imp).toEqual();
  });

  it('should have a BMI Message "Overweight"', function() {
    person.calculate_bmi_imp();
    expect(person.bmiMessage_imp).toEqual("Overweight");
  });

});
