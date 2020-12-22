class Mediator {
    constructor(fontFamily, fontWeight, fontStyle, fontSize) {
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
    }

    changeStyles() {
        let portfolio = document.getElementById("portfolio");
        portfolio.style.fontFamily = this.fontFamily;
        portfolio.style.fontWeight = this.fontWeight;
        portfolio.style.fontStyle = this.fontStyle;
        portfolio.style.fontSize = this.fontSize;
    }
}

function changedEnable() {

    let div = document.getElementById("fontParametrs");
    let arrayOfRadioButton = [];

    div.childNodes.forEach(node => {
        node.childNodes.forEach(element => {
            if (element.type == "radio") 
                arrayOfRadioButton.push(document.getElementById(element.id));
        })
    });
    
    switch (event.currentTarget.value){
        case "Arial Black": {
            setEnableInRadioButton(arrayOfRadioButton[0], true);
            setEnableInRadioButton(arrayOfRadioButton[1], false);
            setEnableInRadioButton(arrayOfRadioButton[2], false);
            setEnableInRadioButton(arrayOfRadioButton[3], true);
            setEnableInRadioButton(arrayOfRadioButton[4], false);
            setEnableInRadioButton(arrayOfRadioButton[5], false);
            break;
        }
        case "Calibri": 
        case "Gabriola": 
        case "Mv boli": 
        case "Playbill": 
        case "Tahoma": 
        case "The Times New Roman":{
            setEnableInRadioButton(arrayOfRadioButton[0], true);
            setEnableInRadioButton(arrayOfRadioButton[1], true);
            setEnableInRadioButton(arrayOfRadioButton[2], false);
            setEnableInRadioButton(arrayOfRadioButton[3], true);
            setEnableInRadioButton(arrayOfRadioButton[4], true);
            setEnableInRadioButton(arrayOfRadioButton[5], false);
            break;
        }
        case "Webdings":
        case "Wingdings": {
            setEnableInRadioButton(arrayOfRadioButton[0], true);
            setEnableInRadioButton(arrayOfRadioButton[1], false);
            setEnableInRadioButton(arrayOfRadioButton[2], false);
            setEnableInRadioButton(arrayOfRadioButton[3], true);
            setEnableInRadioButton(arrayOfRadioButton[4], true);
            setEnableInRadioButton(arrayOfRadioButton[5], false);
        }
    }
}

function buttonOk() {
    
    let fontFamily = getSelectedOption("selectFont");
    let fontSize = getFontSize("quantity");
    let fontWeight = getSelectedRadioButton("RBnormal","RBbold","RBlighter");
    let fontStyle = getSelectedRadioButton("RBSnormal","RBitalic","RBoblique");

    let mediator = new Mediator(fontFamily, fontWeight, fontStyle, fontSize);
    mediator.changeStyles();
}

function getFontSize(IDnumber) {
    return document.getElementById(IDnumber).value + "px"; 
}

function getSelectedOption(IDselect) {
    
    let select = document.getElementById(IDselect);
    for(let option of select.childNodes) {
        if (option.selected) {
            return option.value;
        }
    }
    return null;
}

function getSelectedRadioButton(...IDRadioButtonFromGroup) {
    for(let IDRadioButton of IDRadioButtonFromGroup) {
        let radioButton = document.getElementById(IDRadioButton);
        
        if (radioButton.checked)
            return radioButton.value;
    }
    return null;
}

function setEnableInRadioButton(radioButton, enable)
{   
    radioButton.checked = false;
    radioButton.disabled = !enable;
}