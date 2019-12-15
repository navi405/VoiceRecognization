// call window object speech recognition...
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

var p=document.createElement("p");  //used to create html elements through javascript
 var words=document.getElementById("words");
 words.appendChild(p);
 console.log(words);

recognition.addEventListener("result",(e) => {
    console.log(e.results);
    var transcript=[...e.results]
    .map(result =>result[0])
    .map(result =>result.transcript)
    .join("");
    // p.innerHTML=transcript;
    if (e.results[0].isFinal) {
        p=document.createElement("p");
        words.appendChild(p);
        p.innerHTML=transcript;
    }
    // console.log(transcript);
});  //this Dom method is to listening events
recognition.addEventListener('end',recognition.start);
recognition.start();  //starting Speechrecognition...



