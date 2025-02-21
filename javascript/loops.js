// for loop 
// while loop 
// do while 
// for of 
// for in 


// for loop 

// syntax
// for (initialization ;condition ; incerment or decrement)

for (let a = 10; a>=1; a--){
    console.log(a);
    
}

// while loop 

// initialization 
//( Condition)
// code run 
//  ++ / --

let b = 1;
while (b<=5){
    console.log("java");
    b++
    
};

let c = 5;
do{
    console.log("js");
    c--
}while(c>=1);


// for of 

let fruit = ["apple","banana","orange","graps","mango"];
for (sap  of fruit){
    console.log(sap);
    
}

// for in 

let obj = {
    name :"lavanya",
    place :"chennai",
    age : 40,

}

for (saparate in obj){
    console.log(saparate+";"+obj[saparate]);
    
}