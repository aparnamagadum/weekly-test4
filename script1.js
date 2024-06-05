(function fnA(a){
    return (function fnB(b){
        console.log(a);
    })(1);

})(0);