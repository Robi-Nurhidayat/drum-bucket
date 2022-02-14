let numberOfDrum = document.querySelectorAll('.drum').length;

for(let i = 0; i < numberOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        // var temp = `sounds/tom-${i+1}.mp3`;
        // console.log(temp)
        // var audio = new Audio(temp);
        // audio.play();

        this.style.color="white";
    })
}