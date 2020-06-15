let key = document.querySelectorAll('.key');

// key.forEach(element => {
//     element.addEventListener('keydown', playMusic)

//     // console.log(element)
// });
window.addEventListener('keydown', playMusic)
function playMusic(e) {
    
    let audio = document.querySelector(`audio[data-key ="${e.keyCode}" ]`);
    if(!audio) return
    audio.currentTime = 0;
    audio.play();

    let key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.add('playing')
    
    let keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    function removeTransition(e) {
        key.classList.remove('playing')
    }
    
}