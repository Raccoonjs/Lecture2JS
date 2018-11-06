function task1 (FirstNumber,SecondNubmer){
    if (FirstNumber>SecondNubmer){
        return true;
    }
    else{
        return false;
    }
}   

function task2(SmthString){
    console.log("Вы ввели:"+ SmthString);
}

function task3(Any){
    if(Any==null || Any==undefined){
        return true;
    }
    else{
        return false;
     }
}

function task4(SmthObject){
    SmthObject = {
        checked:true
    }
}

function task5 (f) {

    for (i = 0; i < f; i++){
        console.log(i);    
    }
    for (i = f; i >= 0; i--){
        console.log(i);
    }     
}
