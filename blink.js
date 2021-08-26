var five = require("johnny-five");
const {Board, Servo} = require("johnny-five");
const { start } = require("repl");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  var servo = new five.Servo({
    pin: 10,
    startAt:90,
    pwmRange: [555, 2000]
  });
  var pos = 154;
  
    this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    },
    blk: function() {
      led.blink(300);
    },
    stp: function() {
      led.stop();
    },
    test: function() {
      servo.sweep()
    },
    stop: function() {
      servo.stop()
    },
    home: function() {
      servo.home()
    },
    to: function(a) {
      servo.to(a);      
    }
  });
});

