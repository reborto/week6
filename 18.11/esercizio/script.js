const up = document.querySelector('#up');
const dx = document.querySelector('#dx');
const down = document.querySelector('#down');
const sx = document.querySelector('#sx');

const base = document.querySelector(".base");
const floor = document.querySelector(".floor");
const prot = document.querySelector(".prot");

let backgroundBoard = 0;
let backgroundFloor = 0;

dx.addEventListener('click', ()=>{
    prot.classList.remove('sx');
    base.style.backgroundPositionX=`${backgroundBoard-=3}px`;
    floor.style.backgroundPositionX=`${backgroundFloor-=20}px`;

    prot.classList.toggle('move');
    setTimeout(()=>{prot.classList.toggle('move')}, 50)
})

sx.addEventListener('click', ()=>{
    prot.classList.add('sx');
    base.style.backgroundPositionX=`${backgroundBoard+=3}px`;
    floor.style.backgroundPositionX=`${backgroundFloor+=20}px`;

    prot.classList.toggle('move');
    setTimeout(()=>{prot.classList.toggle('move')}, 50)
})


up.addEventListener('click',()=>{
    prot.classList.toggle('animate__bounce');
    setTimeout(()=>{prot.classList.toggle('animate__bounce')}, 2000)
})
