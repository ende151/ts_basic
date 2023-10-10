"use strict";
// let createdByNewBoolean: boolean = new Boolean(1);
// console.log( createdByNewBoolean,new Boolean() )
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// // ES6 中的二进制表示法
// let binaryLiteral: number = 0b1010;
// // ES6 中的八进制表示法
// let octalLiteral: number = 0o744;
// let notANumber: number = NaN;
// let infinityNumber: number = Infinity;
//
// console.log(decLiteral,hexLiteral,binaryLiteral,notANumber,octalLiteral,infinityNumber)
// function alertName(): void {
//     console.log('My name is Tom');
// }
// alertName()
// let unusable: void = undefined;
// console.log(unusable)
// let u: undefined = undefined;
// let n: null = null;
// let num1: number = u
// console.log( u, n , num1 )
// 定义好类型后  不可修改数据类型
// 但是定义成 any 之后就可以随便修改数据类型
// let newDow: number = 12
// newDow = '哈哈哈' // 数字类型禁止修改的
// let Dow:any = 12
// Dow = '哈哈哈' // 该操作是被允许的
// let anyThing: any = 'hello';
// console.log(anyThing,anyThing.myName);//myName ts 文件中不会报错但是在编译后的js问价则会提示为undefined
// // console.log(anyThing.myName.firstName); // 直接提示报错不会编译js文件
//以下所有的操作ts都不会提示  但是在编译后的js文件中则会提示问题
// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');
// 当不定义类型的时候  则默认是 any 所以就是随意修改类型都不会报错
let something;
// something = 'seven';
something = 7;
console.log(something);
