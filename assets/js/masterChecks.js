// Early Master Checkbox

const earlyChecks = document.querySelectorAll(".early-check");
const earlyMasterCheckbox = document.getElementById("earlyMaster");

function earlyMasterOn(){
    for(let i = 0; i < earlyChecks.length; i++){
        if(!earlyChecks[i].checked){
            earlyChecks[i].click();    
        }
    }    
}

function earlyMasterOff(){
    for(let i = 0; i < earlyChecks.length; i++){
        if(earlyChecks[i].checked){
            earlyChecks[i].click();
        }
    }    
}

$(earlyMasterCheckbox).click(function(){
    setTimeout(function(){
        if(earlyMasterCheckbox.checked){
            earlyMasterOn();
        } else {
            earlyMasterOff();
        }
    }, 1000)
})

// baroque master checkbox =======================================

const baroqueChecks = document.querySelectorAll(".baroque-check");
const baroqueMasterCheckbox = document.getElementById("baroqueMaster");

function baroqueMasterOn(){
    for(let i = 0; i < baroqueChecks.length; i++){
        if(!baroqueChecks[i].checked){
            baroqueChecks[i].click();    
        }
    }    
}

function baroqueMasterOff(){
    for(let i = 0; i < baroqueChecks.length; i++){
        if(baroqueChecks[i].checked){
            baroqueChecks[i].click();
        }
    }    
}

$(baroqueMasterCheckbox).click(function(){
    setTimeout(function(){
        if(baroqueMasterCheckbox.checked){
            baroqueMasterOn();
        } else {
            baroqueMasterOff();
        }
    }, 30)
})

// Classical Master Checkbox

const classicalChecks = document.querySelectorAll(".classical-check");
const classicalMasterCheckbox = document.getElementById("classicalMaster");

function classicalMasterOn(){
    for(let i = 0; i < classicalChecks.length; i++){
        if(!classicalChecks[i].checked){
            classicalChecks[i].click();    
        }
    }    
}

function classicalMasterOff(){
    for(let i = 0; i < classicalChecks.length; i++){
        if(classicalChecks[i].checked){
            classicalChecks[i].click();
        }
    }    
}

$(classicalMasterCheckbox).click(function(){
    if(classicalMasterCheckbox.checked){
        classicalMasterOn();
    } else {
        classicalMasterOff();
    }
})

// Romantic Master Checkbox

const romanticChecks = document.querySelectorAll(".romantic-check");
const romanticMasterCheckbox = document.getElementById("romanticMaster");

function romanticMasterOn(){
    for(let i = 0; i < romanticChecks.length; i++){
        if(!romanticChecks[i].checked){
            romanticChecks[i].click();    
        }
    }    
}

function romanticMasterOff(){
    for(let i = 0; i < romanticChecks.length; i++){
        if(romanticChecks[i].checked){
            romanticChecks[i].click();
        }
    }    
}

$(romanticMasterCheckbox).click(function(){
    setTimeout(function(){
        if(romanticMasterCheckbox.checked){
            romanticMasterOn();
        } else {
            romanticMasterOff();
        }
    }, 30)
})

// 20th Century Master Checkbox

const twentiethChecks = document.querySelectorAll(".twentieth-check");
const twentiethMasterCheckbox = document.getElementById("twentiethMaster");

function twentiethMasterOn(){
    for(let i = 0; i < twentiethChecks.length; i++){
        if(!twentiethChecks[i].checked){
            twentiethChecks[i].click();    
        }
    }    
}

function twentiethMasterOff(){
    for(let i = 0; i < twentiethChecks.length; i++){
        if(twentiethChecks[i].checked){
            twentiethChecks[i].click();
        }
    }    
}

$(twentiethMasterCheckbox).click(function(){
    setTimeout(function(){
        if(twentiethMasterCheckbox.checked){
            twentiethMasterOn();
        } else {
            twentiethMasterOff();
        }
    }, 30)
})

