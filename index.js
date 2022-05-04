// paspaudus bet kuri klaviaturos mygtuka - 
// kamuolys atsiranda virsuje, arba kyla i virsu

// klaviaturos mygtuka atleidus - 
// kamuolys atsiranda pradineje padetyje, 
// arba krenta zemyn

const ball = document.querySelector('#ball');

const keyDown = document.body.addEventListener('keydown', () =>  {
    ball.style.transition = '1s';
    ball.style.bottom= '1000px';
    console.log("keydown")   
})

const keyUp = document.body.addEventListener('keyup', () =>  {
    //ball.style.transition = '1s';
    ball.style.bottom= '40px';
    console.log("keyup");
});
//const keyUp = ball.addEventListener('click', () => )