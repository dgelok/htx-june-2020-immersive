

let bob = function(num, str){

    console.log('bob', num, str, this);

    return true;
}

let student = {
    name: 'Cainan Barboza',
    occupation: 'Student',
    greetingMethod: function(fn){

        fn() // reference to bob

    }
}


// bob(1, "hello");