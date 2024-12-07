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