# Notes - Javascript References vs Copying

[This project is taken from Wes Bos' Javascript 30 course ](https://javascript30.com/)

In this project Wes took us through the ways in which referencing and copying differ between strings, numbers and booleans and arrays and objects.

## Strings, numbers and booleans

In the below code we can see that strings and numbers are copied when assigned to new variables.

This means that we can overwrite the inital variable without affecting the copy (and vice versa)

    // start with strings, numbers and booleans
    // let age = 100;
    // let age2 = age;
    // console.log(age, age2);
    // expected output: 100, 100

    // age = 200;
    // console.log(age, age2);
    // expected output: 200, 100

    // let name = 'Wes';
    // let name2 = name;
    // console.log(name, name2);
      // expected output: 'Wes', 'Wes'

    // name = 'wesley';
    // console.log(name, name2);
    // expected output: 'Wesley', 'Wes'

This is not the case however with arrays and objects.
When we assign an array or object to a new variable we are creating a <em>reference</em> to the array or object not a copy of it.

So instead of creating a copy of that array/object and a new address in the memory, the new variable is simply pointed to the same array/object in the existing address.

Any changes made to the new variable will reflect on the original, because they point to the same location.

A way to avoid this problem is to create a new object or array and copy the original into it.

In arrays we do this using `array.splice()`, `.concat` or the `spread` operator:

    const team2 = players.slice();

    const team3 = [].concat(players);

    const team4 = [...players];

With objects we can use `Object.assign()`

It takes in an empty object, the name of the object we wish to assign, and any additional properties or properties we wish to overwrite:

    const cap2 = Object.assign({}, person, { number: 99, age: 12 });

We can also use the `spread` operator with objects:

    const clonedCircle = {...circle};

However these methods only produce a shallow copy of the object or array. For nested data structures this means that it will only copy one level deep.

To copy nested structures at all levels we need to use `deepclone`.
