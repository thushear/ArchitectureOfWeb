(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kongming on 2017/9/19.
 */
function greeting(name) {
    return "hello " + name;
}
exports.greeting = greeting;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.greeting(name);
}
showHello('greeting', 'thushear');
// 基础数据类型
var isFlag = true;
var num = 0;
var hexNum = 0x11;
var binNum = 3;
var str = "hello";
var str2 = str + " world";
var arr = [1, 2, 3];
var arrr = ['a', 'b', 'c'];
var arrrr = [1, 'a', true];
var tup = ["a0", false];
console.log(tup[0] + "---" + tup[1]);
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["BLUE"] = 2] = "BLUE";
    Color[Color["GREEN"] = 3] = "GREEN";
})(Color || (Color = {}));
var col = Color.GREEN;
console.log(col);
var nullval = null;
var undefinedVal = undefined;
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0dBRUc7QUFDSCxrQkFBeUIsSUFBVztJQUNoQyxNQUFNLENBQUMsV0FBUyxJQUFNLENBQUM7QUFDM0IsQ0FBQztBQUZELDRCQUVDOzs7O0FDTEQsaUNBQW1DO0FBRW5DLG1CQUFtQixPQUFjLEVBQUMsSUFBVztJQUN6QyxJQUFPLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBQ0QsU0FBUyxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQTtBQUVoQyxTQUFTO0FBQ1QsSUFBSyxNQUFNLEdBQWEsSUFBSSxDQUFDO0FBQzdCLElBQUssR0FBRyxHQUFZLENBQUMsQ0FBQztBQUN0QixJQUFLLE1BQU0sR0FBWSxJQUFJLENBQUM7QUFDNUIsSUFBSyxNQUFNLEdBQVksQ0FBSSxDQUFDO0FBQzVCLElBQUssR0FBRyxHQUFZLE9BQU8sQ0FBQztBQUM1QixJQUFLLElBQUksR0FBZSxHQUFHLFdBQVEsQ0FBQTtBQUNuQyxJQUFLLEdBQUcsR0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsSUFBSSxJQUFJLEdBQWMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLElBQUssS0FBSyxHQUFXLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxJQUFLLEdBQUcsR0FBc0IsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLElBQUssS0FBNEI7QUFBakMsV0FBSyxLQUFLO0lBQUUsK0JBQUssQ0FBQTtJQUFDLGlDQUFNLENBQUE7SUFBQyxtQ0FBTyxDQUFBO0FBQUEsQ0FBQyxFQUE1QixLQUFLLEtBQUwsS0FBSyxRQUF1QjtBQUNqQyxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsSUFBSSxPQUFPLEdBQVUsSUFBSSxDQUFDO0FBQzFCLElBQUksWUFBWSxHQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBrb25nbWluZyBvbiAyMDE3LzkvMTkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXRpbmcobmFtZTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGBoZWxsbyAke25hbWV9YDtcclxufSIsImltcG9ydCB7IGdyZWV0aW5nIH0gZnJvbSAgJy4vZ3JlZXQnXHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTpzdHJpbmcsbmFtZTpzdHJpbmcpe1xyXG4gICAgY29uc3QgIGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG4gICAgZWx0LmlubmVyVGV4dCA9IGdyZWV0aW5nKG5hbWUpO1xyXG59XHJcbnNob3dIZWxsbygnZ3JlZXRpbmcnLCd0aHVzaGVhcicpXHJcblxyXG4vLyDln7rnoYDmlbDmja7nsbvlnotcclxubGV0ICBpc0ZsYWcgOiBib29sZWFuID0gdHJ1ZTtcclxubGV0ICBudW0gOiBudW1iZXIgPSAwO1xyXG5sZXQgIGhleE51bSA6IG51bWJlciA9IDB4MTE7XHJcbmxldCAgYmluTnVtIDogbnVtYmVyID0gMGIxMTtcclxubGV0ICBzdHIgOiBzdHJpbmcgPSBcImhlbGxvXCI7XHJcbmxldCAgc3RyMiA6IHN0cmluZyA9IGAke3N0cn0gd29ybGRgXHJcbmxldCAgYXJyIDogbnVtYmVyW10gPSBbMSwyLDNdO1xyXG5sZXQgYXJyciA6IHN0cmluZ1tdID0gWydhJywnYicsJ2MnXTtcclxubGV0ICBhcnJyciA6IGFueVtdID0gWzEsJ2EnLHRydWVdO1xyXG5sZXQgIHR1cCA6IFtzdHJpbmcsYm9vbGVhbl0gPSBbXCJhMFwiLGZhbHNlXTtcclxuY29uc29sZS5sb2codHVwWzBdICsgXCItLS1cIiArIHR1cFsxXSk7XHJcbmVudW0gQ29sb3Ige1JFRD0xLEJMVUU9MixHUkVFTj0zfVxyXG5sZXQgY29sIDogQ29sb3IgPSBDb2xvci5HUkVFTjtcclxuY29uc29sZS5sb2coY29sKTtcclxubGV0IG51bGx2YWwgOiBudWxsID0gbnVsbDtcclxubGV0IHVuZGVmaW5lZFZhbCA6IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiJdfQ==
