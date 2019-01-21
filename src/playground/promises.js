const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolved data.');
        //reject('Something went wrong.');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is another promise.');
        }, 5000);
    });
}).then((str) => {
    console.log('2', str);
}).catch((error) => {
    console.log('Error: ', error);
});

console.log('after');