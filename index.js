const music = new Audio('../Music/song.mp3');
let masterPlay = document.getElementById(`masterPlay`);
masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime<=0){
music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');

}else{
    music.pause();
    masterPlay.classList.remove('bi-pause-circle');
    masterPlay.classList.add('bi-play-circle');
    }
});


let down = document.querySelector('.heading-right');
down.onclick= function(){
down.classList.toggle('active');
}

let index = 0;
Array.from(document.getElementsByClassName('PlayListPlay')).forEach((e)=>{
    e.addEventListener('click', (ele)=>{

music.play();
masterPlay.classList.remove('bi-play-circle');
masterPlay.classList.add('bi-pause-circle');
    })
})