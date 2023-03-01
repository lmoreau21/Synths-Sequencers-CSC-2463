let synth;
let notes = ['A3','B3','C4','D4','E4','F4','G4','A4','B4','C5','A#3','C#4','D#4','F#4','G#4','A#4'];
let slider;
let harmonS;
let sel;
let length;
let attack, decay, sus, release;
let noise;
let noiseSel;
//Tone.Transport.start();
function setup(){
  createCanvas(windowWidth, windowHeight);
  background('lightblue');
  slider = createSlider(.1,5,.3,.1);
  slider.style('width',width*3/4+'px');
  slider.position(width - width*7/8, 170)

  sel = createSelect();
  sel.position(width/4-20, 280);
  sel.option('sine');
  sel.option('triangle');
  sel.option('sawtooth');
  sel.option('square');
  sel.selected('sine');

  noiseSel = createSelect();
  noiseSel.position(width/4-20, 380);
  noiseSel.option('white');
  noiseSel.option('pink');
  noiseSel.option('brown');
  noiseSel.option('none');
  noiseSel.selected('none');

  filterSel = createSelect();
  filterSel.position(width/4-20, 480);
  filterSel.option('lowpass');
  filterSel.option('highpass');
  filterSel.option('bandpass');
  filterSel.option('lowshelf');
  filterSel.option('highshelf');
  filterSel.option('notch');
  filterSel.option('allpass');
  filterSel.option('peaking');

  filterSel.selected('lowpass')

  attack = createSlider(0, 1, 0.5, 0.01);
  attack.position(width*3/4-150, 320);
  decay = createSlider(0, 1, 0.5, 0.01);
  decay.position(width*3/4, 320);
  sus = createSlider(0, 1, 0.5, 0.01);
  sus.position(width*3/4-150, 390);
  release = createSlider(0, 1, 0.5, 0.01);
  release.position(width*3/4, 390);
  
  noise = new Tone.NoiseSynth({
    noise:{
      type: 'white',
      playbackRate: 0.5
    }
    
  }).toDestination();
  synth = new Tone.MonoSynth({
    detune:9,
    oscillator:{
      type:'sine'
    },
    envelope: { 
      attack: 0.15,
      decay: 0.15,
      sustain: 1,
      release: 5
    },
    filter: {
      Q: 2,
      type: 'lowpass',
      rolloff: -12
    },
    filterEnvelope: {
      attack: 0.001,
      decay: 0.32,
      sustain: 0.9,
      release: 3,
      baseFrequency: 700,
      octaves: 2.3
    }
   }).toDestination();

  
   
}

function draw(){
  background('lightblue');
  length = slider.value();
  textAlign(CENTER);
  textSize(35);
  text("Synths & Sequences", width/2, 60);
  textSize(25);
  text("Note Length: "+slider.value(), width/2, 150)
  text("Oscillator Type",width/4+20,250)
  text("Noise Type",width/4+20,350)
  text("Filter Type",width/4+20,450)
  text("Press a key\nw:A#3 r:C#3 t:D#3 u:F#3 i:G#3 o:A#3 \na:A3 s:B3 d:C4 f:D4 g:E4 h:F4 j:G4 k:A4 l:B4 ;:C5", width / 2, height / 2+200);
  text("Envelope",width*3/4-30,250)
  textSize(16);
  text('attack: '+attack.value(), width*3/4-100, 300);
  text('decay: '+decay.value(), width*3/4+50, 300);
  text('sustain: '+sus.value(), width*3/4-100, 370);
  text('release: '+release.value(), width*3/4+50, 370);
  synth.oscillator.type = sel.value();
  //noiseSound.type = noiseSel.value();
  synth.envelope.attack = attack.value();
  synth.envelope.decay = decay.value();
  synth.envelope.sustain = sus.value();
  synth.envelope.release = release.value();
  synth.filter.type = filterSel.value();
  if(noiseSel.value()!='none')
    noise.noise.type = noiseSel.value();
}

function keyPressed() {
  //console.log("key pressed")
  if(noiseSel.value()!='none')
    noise.triggerAttackRelease(length);
  switch(key.toLowerCase()){
    
    case 'a':
      synth.triggerAttackRelease(notes[0],length);
      break;
    case 'w':
      synth.triggerAttackRelease(notes[10],length);
      break;
    case 's':
      synth.triggerAttackRelease(notes[1],length);
      break;
    case 'd':
      synth.triggerAttackRelease(notes[2],length);
      break;
    case 'r':
      synth.triggerAttackRelease(notes[11],length);
      break;
    case 'f':
      synth.triggerAttackRelease(notes[3],length);
      break;
    case 't':
      synth.triggerAttackRelease(notes[12],length);
      break;
    case 'g':
      synth.triggerAttackRelease(notes[4],length);
      break;
    case 'h':
      synth.triggerAttackRelease(notes[5],length);
      break;
    case 'u':
      synth.triggerAttackRelease(notes[13],length);
      break;
    case 'j':
      synth.triggerAttackRelease(notes[6],length);
      break;
    case 'i':
      synth.triggerAttackRelease(notes[14],length);
      break;
    case 'k':
      synth.triggerAttackRelease(notes[7],length);
      break;
    case 'o':
      synth.triggerAttackRelease(notes[15],length);
      break;
    case 'l':
      synth.triggerAttackRelease(notes[8],length);
      break;
    case ';':
      synth.triggerAttackRelease(notes[9],length);
      break;
    
  }
}

