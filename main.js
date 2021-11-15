prediction_1= "";
prediction_2= "";

Webcam.set({
 width:350,
 height:350, 
 image_format:"png",
 png_quality:90,
});

camera=document.getElementById("camera");
Webcam.attach("#camera");


function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='captureimage'>";

});


}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BBpEK8_Eb/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
    }
    function check(){
     var img=document.getElementById("captureimage");
     classifier.classify(img,gotResult);
    }
    function speak(){
        var synth=window.speechSynthesis;
        speakdata1="The first prediction is"+prediction_1;
        speakdata2="The second prediction is"+prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
        synth.speak(utterThis);
       }
    function gotResult(error,results){
    if (error){
    console.error(error);
    }
    else {
    console.log(results);
      document.getElementById("result_emotion_name").innerHTML=results[0].label;
      document.getElementById("result_emotion_name2").innerHTML=results[1].label;
      prediction_1=results[0].label;
      prediction_2=results[1].label;
      speak();
      if(results[0].label=="Okay"){
       document.getElementById("update_emoji").innerHTML="&#128076;";
      }
      if(results[0].label=="Hi"){
        document.getElementById("update_emoji").innerHTML="&#128400;";
             
       }if(results[0].label=="Peace"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
             
       }
       if(results[0].label=="One"){
        document.getElementById("update_emoji").innerHTML="&#9757;";
             
       }
       if(results[1].label=="Okay"){
        document.getElementById("update_emoji2").innerHTML="&#128076;";
             
       }
       if(results[1].label=="Hi"){
        document.getElementById("update_emoji2").innerHTML="&#128400;";
             
       }
       if(results[1].label=="Peace"){
        document.getElementById("update_emoji2").innerHTML="&#9996;";
             
       }
       if(results[1].label=="One"){
        document.getElementById("update_emoji2").innerHTML="&#9757;";
             
       }
       
    }
    }
    
    
    
    