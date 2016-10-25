'use strict';

function Plane(){
  this._location = "somewhere"
}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function(airport){
  this._location.clearForTakeOff();
};
