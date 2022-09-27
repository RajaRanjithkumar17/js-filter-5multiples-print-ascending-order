var range = 200;
 for(i=0;i<range;i++){

    if(i%5==0){
        var digits = i.toString().split('');
        var realDigits = digits.map(Number);

        if(i<10){
            console.log(i);
        }

        if(realDigits[0] <= realDigits[1]){
            console.log(i);
        }

    }
    
 }