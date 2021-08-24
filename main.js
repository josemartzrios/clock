'strict mode'

// Accedo a mis elementos del DOM segundos, minutos y horas para manejarlos
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// 1. Función que establezca la fecha actual
function setDate(){
    
    // 2. Almaceno en la const la fecha actual
    const now = new Date();

    // 3. Accedo y guardo en la variable los segundos
    const seconds = now.getSeconds();

    // 4. Para hacer que los segundos se representen en grados y se muevan las manecillas
    const secondsDegrees = ((seconds / 60) * 360);

    // 5. Accedo al style de mi const para cambiar la rotación de la manecilla de segundos
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Haré lo mismo que hice en los segundos para los minutos
    const mins = now.getMinutes();
    // el +90 es para que avance la manecilla esos grados
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Haré lo mismo que hice en segundos y minutos para Hours
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

// Llamo a la función setDate para que se ejecute con setInterval cada un segundo
setInterval(setDate, 1000);