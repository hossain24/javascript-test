var myCar = new Object();

myCar.driver = "John";
myCar.model = "Porche";
myCar.status = function() {
  console.log("Now it's running....");
};
myCar.drive = function(speed, time) {
  console.log(speed * time + " km/h");
};

console.log(myCar.model);
myCar.status();
myCar.drive(50, 10);

myCarSecond = {
  driver: "Josef",
  model: "Lamborgini",
  status: function() {
    console.log("Now it's not running!!!");
  },
  drive: function(speed, time) {
    console.log(speed * time + " km/h");
  }
};
console.log(myCarSecond.model);
myCarSecond.status();
myCarSecond.drive(0, 0);
