var user = 'Joniel';
var saluration = 'Nice to see you again, ';
var greeting = saluration + user + '! Here is the Best Marval Movies of all time.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


// Photo Price Of the Avengers:Endgame Fight Scene

var price = 40,
    photoDiscount = .10,
    photoPrice = price - (price * photoDiscount),
    priceEl = document.getElementById('price'),
    photoPriceEl = document.getElementById('photo-price');

priceEl.textContent = price.toFixed(2);
photoPriceEl.textContent = photoPrice.toFixed(2);



