// for (let a = 0; a < 10; a++){
//     console.log(a);
//   }
//   for (var b = 0; b < 10; b++){
//     console.log(b);
//   }

//   const name =["Ankur"]

//   for(let i =0; i<name.length;--i){
//     console.log(name);
//   }


  // prime numer which divide by 0 or 2

function PrimeNumber(number){

    for (let i = 0; i<number.length;i++) {
        {
        if (number % 0 && number % 2){
          return true
        }

        else {
            return false
        }
    }
}

 
}

const ankur = PrimeNumber(5)
console.log(ankur);



function Palindrome (str){

    let str1 = str.length-1;

    for(let i =0; i<str.length/2; i++){

        for(let j= 0;j<str.length;j++){
            if(str1 [i]! == str1[j]){
                return false;
            }
            
        }
    return true;
    }
}



 