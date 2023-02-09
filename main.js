var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        speak();
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    if(recognition=="toma mi selfie"){
        setTimeout( function(){
            take_selfie();
            save();
        }, 5000);
    }

    }


function take_selfie() { 
    Webcam.snap(function(data_uri) { 
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    
}); }

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function save() {

}

