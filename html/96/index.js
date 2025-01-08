function userinfo(name, age) {
    return "".concat(name, " is ").concat(age, " years old!");
}
var username = 'david';
var age = 25;
console.log(userinfo(username, age));
var foo = /** @class */ (function () {
    function foo(value) {
        this.value = value;
    }
    return foo;
}());
var y;
var j = new foo(23);
console.log(j);
var newuser = {
    first: 'david',
    last: 'ohana',
};
console.log(newuser);
