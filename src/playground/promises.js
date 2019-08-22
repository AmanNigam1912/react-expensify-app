const promise = new Promise((resolve, reject) => {
    //here we do async js tasks
    //like making request to servers,
    //trigger firebase data change
    setTimeout(() => {
        //can resolve only single value
        // resolve(
        //     //'this is my resolve data');
        //     {
        //         name: 'Aman',
        //         age: 27
        //     });
        //resolve('this is my other resolve data'); //ignored as resolve or rejected only once
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

//.then registers a callback
//calbback fired when promise resolves
//both then clause will run if the promise is resolved
//and both will not run if promise is rejected
promise.then((data) => {
    console.log(data.name);
    console.log(data.age);

    //return 'some data';

    //we caan return a promise from a then clause
    //in this case the then clause mentioned after this will be its resolve then clause
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error', error);
});
// , (error) => {
//     console.log('error', error);
// });

console.log('after');