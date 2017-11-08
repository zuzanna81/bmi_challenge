describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight_imp: 195, height_imp: 70});
  });

  it('should have weight of 198', function() {
    expect(person.weight_imp).toEqual(195);
  });

  it('should have height of 70', function() {
    expect(person.height_imp).toEqual(70);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi_imp();
    expect(person.bmiValue_imp).toEqual(28);
  });

  it('should have a BMI Message "Overweight"', function() {
    person.calculate_bmi_imp();
    expect(person.bmiMessage_imp).toEqual("Overweight");
  });

});
