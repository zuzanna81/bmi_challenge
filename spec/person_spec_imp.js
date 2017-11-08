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
  
});
