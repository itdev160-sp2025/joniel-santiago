var user = 'Joniel';
var saluration = 'Hello, ';
var greeting = saluration + user + '! Here are the latest photo of Human Torch.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


// Photo price 
var price = 20,
    photoDiscount = .10,
    photoPrice = price - (price * photoDiscount),
    priceEl = document.getElementById('price'),
    photoPriceEl = document.getElementById('photo-price');

priceEl.textContent = price.toFixed(2);
photoPriceEl.textContent = photoPrice.toFixed(2);