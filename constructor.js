var Car = function(driverName, carModel) {
  this.driverName = driverName;
  this.carModel = carModel;

  this.carStop = function() {
    console.log("Car is not running!!!");
  };

  this.driver = function() {
    console.log("Driver name is " + this.driverName);
  };

  this.carSpeed = function(time, speed) {
    console.log(time * speed + " km/h");
  };
};

var myCar = new Car("John", "Porche");
myCar.carSpeed(10, 20);
myCar.driver();
