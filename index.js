let numberOfDrum = document.querySelectorAll('.drum').length;

for(let i = 0; i < numberOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        alert('hey you click me!')
    })
}