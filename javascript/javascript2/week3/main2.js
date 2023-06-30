const myFunctions = [
    function() { console.log('Hello from function 1!'); },
    function() { console.log('Hello from function 2!'); },
    function() { console.log('Hello from function 3!'); }
    ];
      
    myFunctions.forEach(func => func());
    
    // Function as a const
    const myConstFunction = function() { console.log('Hello from my const function!'); }
    
    // Normal function declaration
    function myNormalFunction() { console.log('Hello from my normal function!'); }
    
    myConstFunction();
    myNormalFunction();
    
    const myObject = {
    myFunction: function() { console.log('Hello from my object function!'); }
    };
      
    myObject.myFunction();