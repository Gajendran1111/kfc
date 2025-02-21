// callback 

function call1 (callback){
    setTimeout(() => {
        console.log("come fast");
        callback();
    }, 3000);
 
}
function call2 (callback){
    setTimeout(() => {
        console.log("come slow");
        
    }, 1000);
}
call1(call2);

// callback hell

function a (callback){
    setTimeout(() => {
        console.log("open")
        callback()
    }, 3000);
}
function b (callback){
    setTimeout(() => {
        console.log("take");
        callback()
    }, 2000);
}
function c (callback){
    setTimeout(() => {
        console.log("check");
        callback()
    }, 1000);
}
function d (callback){
    setTimeout(() => {
        console.log("close");
        callback()
    }, 500); 
}
a(()=>{
    b(()=>{
        c(()=>{
            d(()=>{})
        })
    })
})


