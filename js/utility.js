// get input value
function getInputValueNumberById(id){
    return parseFloat(document.getElementById(id).value);
}

// get element inner text
function getElementText(id){
    return parseFloat(document.getElementById(id).innerText);
}

// set innerText
function setElementText(id, text) {
    return document.getElementById(id).innerText = text;
}

// getElement
function ElementGet (id){
    return document.getElementById(id);
}


// add class
function addClass (id, nameClass){
    return document.getElementById(id).classList.add(nameClass);
}


// remove class
function removeClass (id, nameClass){
    return document.getElementById(id).classList.remove(nameClass);
}