'use strict';

function quickSort(input) {
    if(!input && !input.isArray())
    {
        return;
    }
    if(input && input.length==0){
        return input;
    } else if(input.length ==1){
        return input;
    }
    if(input.every(function(element){return isNaN(element)})){
        return input.sort();
    }
    else{
        return input.sort(function(a,b){return a-b;});
    }
};
module.exports = quickSort;