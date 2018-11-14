function fn(){
    var dataIn = document.getElementById("dataIn").value;
    var intArray = dataIn.split(', ').map(function(dataIn){return Number(dataIn);});
    return intArray;

}

function minVal(resultArray){
    var resultArray = fn();
    var min = resultArray[0];
    for(var i = 0; i < resultArray.length; i++){
        if(min > resultArray[i]) min = resultArray[i];
    }
    return min;
    
}

function fn1(){
    document.getElementById("dataOut").innerHTML = minVal();
}