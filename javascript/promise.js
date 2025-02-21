// promise 
// syntax 

// return new Promise((resolve, reject) => {})

// walk the dog
// clean the kitchan
// put the trash out

function dog (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalk = true
            if (dogwalk){
                resolve("you walk the dog")
            }
            else {
                reject("you did not walk the dog")
            }
            
        }, 5000);
       
    })
}

function clean (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleankit =true
            if (cleankit){
                resolve("you clean the kitchan")
            }
            else {
                reject("you did not clean the kitchan")
            }
           
        }, 3000);
    })
}

function trash (){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const trashout = false
            if (trashout){
                resolve("you put the trash out")
            }
            else {
                reject("you did not put the trash out ")
            }
            
        }, 2000);
    })
}

// dog()
// .then(val => {console.log(val); return clean()})
// .then(val => {console.log(val); return trash()})
// .catch(val => {console.log(val);console.log("done all the work")});


// method 2 to call the promise 

// async function method2 () {
//     try {
//         const walk = await dog()
//         console.log(walk);
//         const kitchan = await clean()
//         console.log(kitchan);
//         const out = await trash()
//         console.log(out);
//     } catch (error) {
//         console.log(error);
        
//     }
      
// }
// method2();




