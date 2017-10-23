import { greeting } from  './greet'

function showHello(divName:string,name:string){
    const  elt = document.getElementById(divName);
    elt.innerText = greeting(name);
}
showHello('greeting','thushear')

// 基础数据类型
let  isFlag : boolean = true;
let  num : number = 0;
let  hexNum : number = 0x11;
let  binNum : number = 0b11;
let  str : string = "hello";
let  str2 : string = `${str} world`
let  arr : number[] = [1,2,3];
let arrr : string[] = ['a','b','c'];
let  arrrr : any[] = [1,'a',true];
let  tup : [string,boolean] = ["a0",false];
console.log(tup[0] + "---" + tup[1]);
enum Color {RED=1,BLUE=2,GREEN=3}
let col : Color = Color.GREEN;
console.log(col);
let nullval : null = null;
let undefinedVal : undefined = undefined;

