

function studentId(_name,_class,_rollNo,_age){
    this.name = _name,
    this.class = _class,
    this.rollNo = _rollNo,
    this.age = _age
}


const student1 = new studentId("aditya",12,26,18);

// console.log(student1.name);
// console.log(student1.class);
// console.log(student1.rollNo);
// console.log(student1.age);


// class

class Product{
    constructor(_type,_price){
        this.type = _type;
        this.price = _price;
    }

    displayProduct(){
        console.log(`${this.type} price is $${this.price}`);
    }
}

const product1 = new Product("shirt",19.88);
const product2 = new Product("pants",11.88);

// product1.displayProduct();
// product2.displayProduct();


// making maths uitility class

class MathUtils{
    constructor(_num1,_num2){
        this.num1 = _num1;
        this.num2 = _num2;
    }
    add(){
        return this.num1 + this.num2;
    }

    sub(){
        return this.num1 - this.num2;
    }

    mul(){
        return this.num1 * this.num2;
    }

    div(){
        return this.num1 / this.num2;
    }
}


// const num = new MathUtils(3,7);
// sum = num.add();
// console.log(sum);


// setters and getters

class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 3){
            this._name = newName;
        }
        else{
            console.error("Invalid name");
        }
    }

    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Invalid age");
        }
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

}

const person1 = new Person("aditya", 18);

console.log(person1.name);
console.log(person1.age);