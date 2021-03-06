import {GetInput} from './playNotes';

function thisWillExport(firstMat){
    var matrix = [];
    var menor = 100;
    var mayor = -100;
    for(var i=0; i < firstMat.length; i++) {
        matrix[i] = [];
        for(var j=0; j<87; j++) {
            matrix[i][j] = null;
        }
        if(firstMat[i][1]<menor){
            menor = firstMat[i][1];
        }
        if(firstMat[i][2]>mayor){
            mayor = firstMat[i][2];
        }
    }
    for(var i=0; i < firstMat.length; i++) {
        var y = firstMat[i][0];
        var l = firstMat[i][1];
        var r = firstMat[i][2];
        var s = firstMat[i][3];
        var x = getXarray(l, r, s);
        for(var j=0; j<y.length; j++){
            matrix[i][x[j]+40]=y[j];
        }
        matrix[i]=matrix[i].slice(menor+40,mayor+41);
    }
    return matrix;
}

function getXarray(l, r, s){
    var x = [];
    var max =(r-l)/s;
    var val = l;
    for(var i=0; i<=max; i++) {
        x[i] = val;
        val+=s;
        val=roundFive(val);
    }
    return x
}

function roundFive (num){
    if(Math.round(num)>num){
        num=Math.round(num)-0.5;
    }else{
        num=Math.round(num);
    }
    return num;
}
function printThis(mat){
    for(var i=0; i<mat.length; i++) {
        console.log(mat[i]);
    }
}
export const MakeMatrix = (info) => {
    var result = thisWillExport(info);
    console.log(result);
    //GetInput(result,null,1000);
    return result;
}
