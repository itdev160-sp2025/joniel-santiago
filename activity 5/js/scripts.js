/********************************************************
 * Package data and constructor objects
 ********************************************************/


// Package data array (simulated data source, such as JSON or database recordset)
var data = [
{
    name: 'Path Intellisense',
    description: 'Visual Studio Code plugin that autocompletes filenames.',
    author: 'Christian Kohler',
    url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
    downloads: 15629344,
    stars: 122,
    price: 'Free',
    selector: 'p1'
},
{
    name: 'emmet',
    description: 'Emmet is the number one code snippet tool.',
    author: 'emmetio',
    url: 'https://atom.io/packages/emmet',
    downloads: 1662209,
    stars: 2534,
    price: 10.50,
    selector: 'p2'
},
];

// (Atom) Package constuctor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.price = data.price;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}


/*************************************************
 * Utility functions
 *************************************************/

// Return today's Date, formatted
var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
};


// Returns DOM element by id.
// We're just wrapping document.getElementById
// in a shorthand function. If this seems confusing,
// then just replace getEl with document.ElementById
// in the writePackageInfo function.
var getEl = function (id) {
    return document.getElementById(id);
};

/**
 * Write's the package object's data to the appropriate
 * DOM elements utilzing the package selector property.
 * @param {Package} package  // Package object
 * @param {void}
 */

var writePackageInfo = function(package) {
    // Get reference to DOM elements
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    urlEL = getEl(selector + '-url'),
    priceEl = getEl(selector + '-price'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');


    // Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    urlEL.textContent = package.url;
    priceEl.textContent = package.price;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.stars.getFormattedStars();
}
/**
 * Utilize package data and constuctor objects to 
 * Construct each package, then write it to the page.
 */
var init = function() {
    // Write one
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    /** Write package data one-by-one
     * Or by using a for loop if you are more comfortable doing it so
     */

    // Write packages one-by-one
    var pathI = new Package(data[0]);
    writePackageInfo(pathI);

    var emmet = new Package(data[1]);
    writePackageInfo(emmet);

    // It will continue with a couple more packages.... OR
    // Write packages with for loop 
    // for (var i = 0; i < data.length; i++) {
    //  var package = new Package(data[i]);
    //  writePackageInfo(package);
    // }
}

init();
// this will call the init funtion to run the script

