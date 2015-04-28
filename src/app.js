$( document ).ready(function() {

  var chip = new Chip8();

  // for now we will hardcode what file to load 
  chip.loadProgram('MERLIN');

  chip.loadFonts();

  var tick = function() {
    chip.setKeyBuffer();
    chip.run();
    chip.display.render(chip.screenBuffer);
    requestAnimationFrame(tick);
  };

  tick();

  // testing purposes
  // console.log(chip.memory);

});