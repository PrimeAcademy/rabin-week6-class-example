console.log("js sourced");

// jquery needs to wait for things to be ready
$(document).ready(onReady);

function onReady() {
    console.log("doc is ready");
    // click on a button, run a function
    $('#logName').on('click', getName);
}

function getName() {
    // get the name from the input
    console.log('clicked on the button');

    // get input values
    let name = $('#name').val(); // get value

    console.log('user entered:', name);

    // pass them to another function
    myFunction(name);
}

// use this function...
// nameIn is kittyfoo/taco
function myFunction(kris) {
    // kris
    console.log('parameter value:', kris);
}