console.log('starting app');

//async callback;
//non-blocking
setTimeout(()=>{
    console.log('Inside of callback');
},0);

console.log('Finishing app');