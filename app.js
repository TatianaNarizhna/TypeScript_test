var num;
num = 10.05;
var person = "Bob";
var arr = [];
arr = ["hhh", "kkk"];
var mmm = [];
mmm = [1, 2, "oooo", {}];
var arrObj;
arrObj = [{ name: "Tania" }, { name: "Mother" }];
var obj;
obj = { name: "Tania" };
console.log(obj.name);
var db;
db = {
    id: 1,
    title: "New",
    info: {
        date: new Date(),
        isNew: true
    }
};
var some;
some = 10;
some = "string";
var str;
if (typeof some === "string") {
    str = some;
}
// tuple  -кортеж, do not change
var fixed;
fixed = ["str", 10];
fixed.push("new");
fixed.pop();
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
})(Toggle || (Toggle = {}));
var service = {
    status: Toggle.ENABLE
};
if (service.status === Toggle.ENABLE) {
    console.log("It is active");
}
// Union Type
var union;
union = 10;
union = "str";
// Literal Type
var active;
active = "start";
var fruit = [];
function workWithArr(arr, value, action) {
    if (action === "add") {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
workWithArr(fruit, "banana", "add");
// types of returns in functions
function print() {
    console.log("some log");
}
function combine(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Some error");
}
// eval - hwo runs text as code
function createServerPerson(name) {
    return eval("\n  (() => {\n    return {\n      name: '".concat(name, "'\n    }\n  })()\n  "));
}
function createPerson(name) {
    return createServerPerson(name);
}
var person2 = createPerson("Alex");
// function type
var foo;
foo = function () { };
var foo2;
foo2 = function (param) {
    console.log("some number");
};
function culc(num1, num2, callback) {
    return callback(num1, num2);
}
function fooCallback(num1, num2) {
    return num1 + num2;
}
var result = culc(1, 2, fooCallback);
var person1 = {
    name: "Alex",
    age: 38,
    showName: function () {
        this.name;
    }
};
var person3 = {
    name: "Tania",
    age: 36,
    showName: function () {
        console.log(this.name);
    }
};
