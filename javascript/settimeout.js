// settimeout

function task1 (){
    setTimeout(() => {
        console.log("good morning");
        
    },3000);
}
function task2 (){
    setTimeout(() => {
        console.log("good evening");
        
    }, 2000);
}
function task3 (){
    setTimeout(() => {
        console.log("good night");
        
    }, 1000);
}

task1();
task2();
task3();

