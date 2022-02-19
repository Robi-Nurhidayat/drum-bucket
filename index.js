let numberOfDrum = document.querySelectorAll('.drum').length;

function drumSwitch(event){
    switch(event){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
        break;
        case "j":
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play()
        break;
        case "k":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play()
        break;
        case "l":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play()
        break;
        default:
            console.log("noting")
        
    }
}


for(let i = 0; i < numberOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        // var temp = `sounds/tom-${i+1}.mp3`;
        // console.log(temp)
        // var audio = new Audio(temp);
        // audio.play();

        var buttonAudio = this.innerHTML;

        drumSwitch(buttonAudio);

        buttonAnimation(buttonAudio);
    })
}



document.addEventListener("keypress",function(event){
    
    var eventKey = event.key;

    drumSwitch(eventKey);

    buttonAnimation(eventKey);
})


function buttonAnimation(currentKey){

    
    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },1000)

}