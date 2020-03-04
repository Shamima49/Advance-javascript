 function add(num1, num2){
   //  console.log(arguments);
     return num1 + num2 + arguments[2];
 }
 const result = add(2, 3, 5);
 console.log(result);

 convert to array

function add(num1, num2){
      console.log([...arguments]);
      return num1 + num2 + arguments[3];  //[3] position of index
  }
  const result = add(2, 3, 5, 7,);
  console.log(result);



    // arguments are not array.
    // it's array like object.