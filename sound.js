let synth;
let notes = ['A3','B3','C4','D4','E4','F4','G4','A4','B4','C5'];
let slider;
let sel;
let length;
let attack;
let decay;
let sus;
let release;
//Tone.Transport.start();
function setup(){
  createCanvas(windowWidth, windowHeight);
  background('lightblue');
  slider = createSlider(.1,5,.3,.1);
  slider.style('width',width*3/4+'px');
  slider.position(width - width*7/8, 80)
  sel = createSelect();
  sel.position(width/4-20, 180);
  sel.option('sine');
  sel.option('triangle');
  sel.option('sawtooth');
  sel.option('square');
  sel.selected('sine');


  attack = createSlider(0, 1, 0.5, 0.01);
  attack.position(width*3/4-150, 220);
  decay = createSlider(0, 1, 0.5, 0.01);
  decay.position(width*3/4, 220);
  sus = createSlider(0, 1, 0.5, 0.01);
  sus.position(width*3/4-150, 290);
  release = createSlider(0, 1, 0.5, 0.01);
  release.position(width*3/4, 290);
 

  synth = new Tone.Synth({
    harmonicity:5,
    oscillator:{
      type:'sine'
    },
    envelope: { 
      attack: 0.15,
      decay: 0.15,
      sustain: 1,
      release: 5
    }
  }).toDestination();
}
function draw(){
  background('lightblue');
  length = slider.value();
  textAlign(CENTER);
  textSize(25);
  text("Note Length: "+slider.value(), width/2, 50)
  text("Oscillator Type",width/4+20,150)
  text("Press a key on the middle a row \n(a: A3; l: C4)", width / 2, height / 2);
  text("Envelope",width*3/4-30,150)
  textSize(16);
  text('attack', width*3/4-100, 200);
  text('decay', width*3/4+50, 200);
  text('sustain', width*3/4-100, 270);
  text('release', width*3/4+50, 270);
  
  synth.oscillator.type = sel.value();
  synth.envelope.attack = attack.value();
  synth.envelope.decay = decay.value();
  synth.envelope.sustain = sus.value();
  synth.envelope.release = release.value();
}

function keyPressed() {
  switch(key.toLowerCase()){
    case 'a':
      synth.triggerAttackRelease(notes[0],length);
      break;
    case 's':
      synth.triggerAttackRelease(notes[1],length);
      break;
    case 'd':
      synth.triggerAttackRelease(notes[2],length);
      break;
    case 'f':
      synth.triggerAttackRelease(notes[3],length);
      break;
    case 'g':
      synth.triggerAttackRelease(notes[4],length);
      break;
    case 'h':
      synth.triggerAttackRelease(notes[5],length);
      break;
    case 'i':
      synth.triggerAttackRelease(notes[6],length);
      break;
    case 'j':
      synth.triggerAttackRelease(notes[7],length);
      break;
    case 'k':
      synth.triggerAttackRelease(notes[8],length);
      break;
    case 'l':
      synth.triggerAttackRelease(notes[9],length);
      break;
  }
}

