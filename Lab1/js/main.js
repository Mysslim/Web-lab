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

function changedEnable(...arrayOfAccesses) {

    let arrayOfRadioButton = [
        document.getElementById("RBnormal"),
        document.getElementById("RBbold"),
        document.getElementById("RBlighter"),
        document.getElementById("RBSnormal"),
        document.getElementById("RBitalic"),
        document.getElementById("RBoblique")
    ];

    for(let i = 0; i < arrayOfRadioButton.length; i++) {
        arrayOfRadioButton[i].checked = false;
        arrayOfRadioButton[i].disabled = arrayOfAccesses[i];
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