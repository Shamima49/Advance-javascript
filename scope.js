 let bonus = 20;

 function sum(first, second){
     let result = first + second  + bonus; 
     console.log(bonus);
     return result;
 }
 const output = sum(3, 7); 
 console.log(output);



 function sum(first, second){
     let result = first + second  + bonus; 

     if(result > 9){
         const mood = "happy";
         console.log(mood);
     }
     return result;
 }
  const output = sum(3, 7);
 console.log(output);


function sum(first, second){
         let result = first + second  + bonus; 
    
         if(result > 9){
             var mood = "happy";
             var mood = "fishy";
             var mood = "cranky";

         }
         console.log(mood);
         return result;
        }


// let & const can't run outside the scope.it's only run block scope.like that:if block,for loop block & any other scope{}.
// var can run all side of the function.it can hoist.

