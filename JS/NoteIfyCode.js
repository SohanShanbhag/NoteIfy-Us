function listen()
{
  if("speechSynthesis" in window){
    var recognition = new window.webkitSpeechRecognition();

    recognition.onstart = function(){
        console.log("Voice recognition started. Try speaking into the microphone.");
    }

    recognition.onerror = function(event){
        console.log("Error " + event.error);
    }

    recognition.onresult = function(event){
        var transcript = event.results[0][0].transcript;
        console.log(transcript);

        document.getElementById("textBox").innerText = document.getElementById("textBox").innerHTML +" "+ transcript;
    }

    recognition.start();
  }
}

