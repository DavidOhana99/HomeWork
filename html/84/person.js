class person{
    #first;
    #last;
    #age;
    constructor(first,last,age){
      this.#first= first;
      this.#last= last;
      this.#age=age;
    }

    toString(){
        return`first:${this.#first} Last:${this.#last} Age: ${this.#age}`  ;
    }
}

class student extends person{
    constructor(first,last,age,grade){
      super(first,last,age)
      this.grade =grade;
    }
    toString(){
        let s = super.toString();
        return`${s} my grade is ${this.grade}`  ;
    }
}

const p = new person('joe','biden',999,);
const s = new student('joe','biden',15,46);
console.log(p.toString());
console.log(s.toString());
