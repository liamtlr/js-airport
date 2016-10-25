// 'use strict';
//
// describe("Airport:", function() {
//
//   var airport;
//   var plane;
//
//   beforeEach(function(){
//     airport = new Airport();
//     plane = jasmine.createSpy('plane', ['land']);
//   });
//
//     it("starts with 0 planes", function(){
//       expect(airport.planes.length).toEqual(0);
//       expect(airport.planes()).toEqual([]);
//     });
//
//     it('can clear planes for landing', function(){
//       airport.clearForLanding(plane);
//       expect(airport.planes()).toEqual([plane]);
//     });
//
// });

'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
