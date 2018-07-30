var asyncAdd =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (typeof a ==='number' && typeof b ==='number'){
                resolve(a+b)}
                else{
                    reject('Argument must be numbers!!!')
                }

        },2000)
    })
};

asyncAdd(5,7)
    .then((res)=> {
        console.log('results : ', res),

            (error) => {
                console.log(error);
            }
    })


//
// var somePromise = new Promise((resolve, reject)=>{
// // can only do one of the message once
// // promise is settled whether it is resolve or rejected!
//     setTimeout(()=>{
//         resolve('Hey! it worked!')
//         reject('unable to resolve promise!')
//         }
//     ,2000)
//
//
// });
//
// somePromise.then(
//     (message)=> {
//     console.log('success :', message);
// },
//     (error)=>{
//     console.log('Error:', error)
//     });