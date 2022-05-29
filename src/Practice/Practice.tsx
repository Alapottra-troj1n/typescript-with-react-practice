import React from 'react';


let person : string = 'Saddu Bhai';
let age : number = 23;
let isGood : boolean = true;
let friends : string[] = ['kosol', 'nepo', 'lokesh']

//non interface way to express objects;

let nepo : {name:string, age:number , isGood:boolean} = {
    name: 'Nepo',
    age: 21,
    isGood: true

}

//interface way to declare objects

interface Alapottra {
    name: string,
    age?: number, //use question mark to let know ts that this property is optional to be added or if ? is not given it will show an error if expression does not have the age.
    isGood: boolean | string //or sign
}
let ala : Alapottra = {
    name: 'Alapottra',
    age: 23,
    isGood: true
}

function getType(age:number):number{

    const ageNum:number = 12;

    return age;

}



const Practice = () => {
    return (
        <div>
            {nepo.name}
        </div>
    );
};

export default Practice;