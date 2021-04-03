// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//Panacek
let panacek = document.getElementById('panacek');
let panacekX = Math.random()*window.innerWidth;
let panacekY = Math.random()*window.innerHeight;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const pohyb = 10;
let score = parseInt(document.getElementById('score').innerHTML);
console.log(score);
let panacekSirka = document.getElementById('panacek').width;
let panacekVyska = document.getElementById('panacek').height;

window.addEventListener('load', () =>{
    // startovacia pozicia panacka
    panacek.style.left = panacekX + 'px';
    panacek.style.top = panacekY + 'px';
    minceLoad();
});

//pohyb panacka
window.addEventListener('keydown', (e) =>{
    let newPosition = 0
    switch(e.key){
        case 'ArrowLeft':
            newPosition = parseInt(panacek.style.left) - pohyb;
            if (operationAllowed(newPosition, parseInt(panacek.style.top))) {
                panacek.style.left = newPosition + 'px';
			    panacek.src = 'obrazky/panacek-vlevo.png';
            }
            newPosition = 0;
            break;
        case 'ArrowRight':
            newPosition = parseInt(panacek.style.left) + pohyb;
            if (operationAllowed(newPosition, parseInt(panacek.style.top))) {
                panacek.style.left = newPosition + 'px';
			    panacek.src = 'obrazky/panacek-vpravo.png';
            }
            newPosition = 0;
            break;
        case 'ArrowUp':
            newPosition = parseInt(panacek.style.top) - pohyb;
            if (operationAllowed(parseInt(panacek.style.left), newPosition)) {
                panacek.style.top = newPosition + 'px';
			    panacek.src = 'obrazky/panacek-nahoru.png';
            }
            newPosition = 0;
            break;
        case 'ArrowDown':
            newPosition = parseInt(panacek.style.top) + pohyb;
            if (operationAllowed(parseInt(panacek.style.left), newPosition)) {
                panacek.style.top = newPosition + 'px';
			    panacek.src = 'obrazky/panacek.png';
            }
            newPosition = 0;
            break;
    };
    panacekUpdate();
    if(!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY))
    {
        minceCollect();
    }
});

//Mince
let mince = document.getElementById('mince');
let minceX = Math.random()*window.innerWidth;
let minceY = Math.random()*window.innerHeight;

let minceSirka = document.getElementById('mince').width;
let minceVyska = document.getElementById('mince').height;

window.addEventListener('load', () =>{
    // generovanie mince
	//this.minceLoad();
});

function operationAllowed(newPositionX, newPositionY){
    if(((newPositionX>= 0) && (newPositionX + panacekSirka <= windowWidth))
    &&
    ((newPositionY>= 0) && (newPositionY + panacekVyska <= windowHeight)))
    {
        return true;
    }
    else return false;
}

function minceCollect() {
   console.log("minceCollect called");
   score++;
   console.log(document.getElementById('mince').innerHTML);
   document.getElementById('score').innerHTML = score.toString();
   mince = document.getElementById('mince');
   minceX = Math.random()*window.innerWidth;
   minceY = Math.random()*window.innerHeight;

   minceSirka = document.getElementById('mince').width;
   minceVyska = document.getElementById('mince').height;
   mince.style.left = minceX + 'px';
   mince.style.top = minceY + 'px';
   console.log(score.toString());
   console.log(document.getElementById('score').innerHTML);
   console.log(minceX);
   console.log(minceY);
   document.getElementById('zvukmince').play(); 
   if (score == 5) {
        document.getElementById('zvukfanfara').play(); 
        alert('Vyhrál si.')
    }
}

function minceLoad() {
	minceX = Math.random()*window.innerWidth;
	minceY = Math.random()*window.innerHeight;

	mince.style.left = minceX + 'px';
    mince.style.top = minceY + 'px';
}

function panacekUpdate(){
    panacekX = parseInt(panacek.style.left);
    panacekY = parseInt(panacek.style.top);
}


