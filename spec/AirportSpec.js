describe("Airport", function() {

  var airport

  beforeEach(function(){
    airport = new Airport();
  });

  describe("it has planes", function(){
    it("starts with 0 planes", function(){
      expect(airport.planes.length).toEqual(0);
      expect(airport.planes()).toEqual([]);
    });

    it("gets a plane if a plane lands", function(){
      var plane = "Test";
      airport.land_plane(plane);
      expect(airport.land_plane(plane).length).toEqual(2);
    });
  });
});
