/*1.闭包*/
function add(a){
	var sum = 0;
	if(arguments.length){
		sum += a;
		return add = function(b){
			if(arguments.length){
				sum += b;
			}else{
				return sum;
			}
		}
	}else{
		return sum;
	}
}


/*2.读取某个对象的属性时，首先搜索对象实例本身，如果没有搜索到的话再去原型对象上搜索。*/
function Person(){

}

Person.prototype.name = "gsm";

var p1 = new Person();
var p2 = new Person();

p1.name = "gy";
alert(p1.name); //"gy"
alert(p2.name); //"gsm"

/*3.hasOwnProperty()属性是不是在实例中，是返回true*/
p1.hasOwnProperty("name"); //true
p2.hasOwnProperty("name"); //false

/*4.in  只要属性在对象中，不管是在实例中还是原型对象中，就返回true*/ 
"name" in p2 //true

/*自己思考:属性在构造函数中的话，是否属于实例属性（应该属于，因为实例会复制一份构造函数的属性）*/
function foo(){
	this.name = "amy";
}
var f = new foo();
f.hasOwnProperty("name"); //true  //console.log(foo.prototype.name); //undefined


/*5.Object.keys()返回对象中的可访问、可枚举的属性，以字符串数组的形式*/
function Person(){

}
Person.prototype.name = "gsm";
Person.prototype.age = 24;

var p1 = new Person();
p1.school = "hygxuy";
p1.home = "huaian";
Object.keys(Person.prototype); //["name", "age"]
Object.keys(p1); //["school", "home"]


/*6.原型的动态性：关于创建实例后重写原型对象*/
function Person(){

}
Person.prototype.name = "gy";
var p = new Person();
Person.prototype = {
	name:"gsm",
	age:24
}
console.log(p.name) //gy
/*但是如果先重写原型再创建实例就指向新的了*/
function Person(){

}
Person.prototype.name = "gy";
Person.prototype = {
	name:"gsm",
	age:24
}
var p = new Person();
console.log(p.name) //gsm


function Person(){

}
Person.prototype.name = "gy";
Person.prototype.age = 26;

var p1 = new Person();
Person.prototype = {
	name:"gsm",
	age:24 
}
var p2 = new Person();
console.log(p1.name);
console.log(p2.age);




function clone(obj){
	function f(){}
	f.prototype = obj
	return new f();
}
var a = {name:"gsm"};
var b = clone(a);

console.log(b.name);    //'gsm'

a.name = 'gy';
console.log(b.name);    //gy

b.name = "hello";
console.log(a.name);    //gy

a.name = 'hi';
console.log(b.name);    //hello


/*点击弹出index*/
var nodes = document.querySelectorAll('ul li');

/*for循环 使用闭包*/
for(var i=0;i<nodes.length;i++){
	(function(i){
		nodes[i].addEventListener('click',function(){
			alert(i);
		})
	})(i)
}

//forEach
[].slice.call(nodes).forEach(function(item,index){
	item.addEventListener('click',function(){
		alert(index);
	})
})

//块级作用于声明变量let
for(let i=0;i<nodes.length;i++){
	nodes[i].addEventListener('click',function(){
		alert(i)
	})
}

