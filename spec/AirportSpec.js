describe("Airport", function() {

  var airport

  beforeEach(function(){
    airport = new Airport();
  });

  describe("it has planes", function(){
    it("starts with 0 planes", function(){
      expect(airport.planes().length).toEqual(0);
    });

    it("gets a plane if a plane lands", function(){
      expect(airport.land(plane)).toChange(airport.planes().length).by(1);
    });
  });
});