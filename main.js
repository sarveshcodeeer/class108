function st() {

navigator.mediaDevices.getUserMedia({audio:true})

}

classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cmCVZKXFX/model.json" , modelReady );

function modelReady() {

    console.log("model has loaded commander")
classifier.classify(gotResult)
}

function gotResult(error,results) {


if(error){
console.log(error)

}
else{
console.log(results)

document.getElementById("sond").innerHTML = "I can hear you - "+ results[0].label ; 
percentage =  results[0].confidence * 100 ; 
document.getElementById("accy").innerHTML = "Accuracy -  "+ percentage.toFixed(2) ; 

if(results[0].label=="clap"){

document.getElementById("a1").src = "aliens-01.gif" ; 
document.getElementById("a2").src = "aliens-02.png" ; 
document.getElementById("a3").src = "aliens-03.png" ; 
document.getElementById("a4").src = "aliens-04.png" ; 
}

if(results[0].label=="snap"){

    document.getElementById("a1").src = "aliens-01.png" ; 
    document.getElementById("a2").src = "aliens-02.gif" ; 
    document.getElementById("a3").src = "aliens-03.png" ; 
    document.getElementById("a4").src = "aliens-04.png" ; 
    }

    if(results[0].label=="Class 4 "){

        document.getElementById("a1").src = "aliens-01.png" ; 
        document.getElementById("a2").src = "aliens-02.png" ; 
        document.getElementById("a3").src = "aliens-03.gif" ; 
        document.getElementById("a4").src = "aliens-04.png" ; 
        }

        if(results[0].label=="Background Noise"){

            document.getElementById("a1").src = "aliens-01.png" ; 
            document.getElementById("a2").src = "aliens-02.png" ; 
            document.getElementById("a3").src = "aliens-03.png" ; 
            document.getElementById("a4").src = "aliens-04.gif" ; 
            }
}}