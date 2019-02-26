(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{159:function(e,t,n){"use strict";e.exports={name:"e",category:"Constants",syntax:["e"],description:"Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",examples:["e","e ^ 2","exp(2)","log(e)"],seealso:["exp"]}},160:function(e,t,n){"use strict";e.exports={name:"pi",category:"Constants",syntax:["pi"],description:"The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",examples:["pi","sin(pi/2)"],seealso:["tau"]}},376:function(e,t,n){"use strict";e.exports={name:"bignumber",category:"Construction",syntax:["bignumber(x)"],description:"Create a big number from a number or string.",examples:["0.1 + 0.2","bignumber(0.1) + bignumber(0.2)",'bignumber("7.2")','bignumber("7.2e500")',"bignumber([0.1, 0.2, 0.3])"],seealso:["boolean","complex","fraction","index","matrix","string","unit"]}},377:function(e,t,n){"use strict";e.exports={name:"boolean",category:"Construction",syntax:["x","boolean(x)"],description:"Convert a string or number into a boolean.",examples:["boolean(0)","boolean(1)","boolean(3)",'boolean("true")','boolean("false")',"boolean([1, 0, 1, 1])"],seealso:["bignumber","complex","index","matrix","number","string","unit"]}},378:function(e,t,n){"use strict";e.exports={name:"complex",category:"Construction",syntax:["complex()","complex(re, im)","complex(string)"],description:"Create a complex number.",examples:["complex()","complex(2, 3)",'complex("7 - 2i")'],seealso:["bignumber","boolean","index","matrix","number","string","unit"]}},379:function(e,t,n){"use strict";e.exports={name:"createUnit",category:"Construction",syntax:["createUnit(definitions)","createUnit(name, definition)"],description:"Create a user-defined unit and register it with the Unit type.",examples:['createUnit("foo")','createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})','createUnit("mph", "1 mile/hour")'],seealso:["unit","splitUnit"]}},380:function(e,t,n){"use strict";e.exports={name:"fraction",category:"Construction",syntax:["fraction(num)","fraction(num,den)"],description:"Create a fraction from a number or from a numerator and denominator.",examples:["fraction(0.125)","fraction(1, 3) + fraction(2, 5)"],seealso:["bignumber","boolean","complex","index","matrix","string","unit"]}},381:function(e,t,n){"use strict";e.exports={name:"index",category:"Construction",syntax:["[start]","[start:end]","[start:step:end]","[start1, start 2, ...]","[start1:end1, start2:end2, ...]","[start1:step1:end1, start2:step2:end2, ...]"],description:"Create an index to get or replace a subset of a matrix",examples:["[]","[1, 2, 3]","A = [1, 2, 3; 4, 5, 6]","A[1, :]","A[1, 2] = 50","A[0:2, 0:2] = ones(2, 2)"],seealso:["bignumber","boolean","complex","matrix,","number","range","string","unit"]}},382:function(e,t,n){"use strict";e.exports={name:"matrix",category:"Construction",syntax:["[]","[a1, b1, ...; a2, b2, ...]","matrix()",'matrix("dense")',"matrix([...])"],description:"Create a matrix.",examples:["[]","[1, 2, 3]","[1, 2, 3; 4, 5, 6]","matrix()","matrix([3, 4])",'matrix([3, 4; 5, 6], "sparse")','matrix([3, 4; 5, 6], "sparse", "number")'],seealso:["bignumber","boolean","complex","index","number","string","unit","sparse"]}},383:function(e,t,n){"use strict";e.exports={name:"number",category:"Construction",syntax:["x","number(x)","number(unit, valuelessUnit)"],description:"Create a number or convert a string or boolean into a number.",examples:["2","2e3","4.05","number(2)",'number("7.2")',"number(true)","number([true, false, true, true])",'number(unit("52cm"), "m")'],seealso:["bignumber","boolean","complex","fraction","index","matrix","string","unit"]}},384:function(e,t,n){"use strict";e.exports={name:"sparse",category:"Construction",syntax:["sparse()","sparse([a1, b1, ...; a1, b2, ...])",'sparse([a1, b1, ...; a1, b2, ...], "number")'],description:"Create a sparse matrix.",examples:["sparse()","sparse([3, 4; 5, 6])",'sparse([3, 0; 5, 0], "number")'],seealso:["bignumber","boolean","complex","index","number","string","unit","matrix"]}},385:function(e,t,n){"use strict";e.exports={name:"splitUnit",category:"Construction",syntax:["splitUnit(unit: Unit, parts: Unit[])"],description:"Split a unit in an array of units whose sum is equal to the original unit.",examples:['splitUnit(1 m, ["feet", "inch"])'],seealso:["unit","createUnit"]}},386:function(e,t,n){"use strict";e.exports={name:"string",category:"Construction",syntax:['"text"',"string(x)"],description:"Create a string or convert a value to a string",examples:['"Hello World!"',"string(4.2)","string(3 + 2i)"],seealso:["bignumber","boolean","complex","index","matrix","number","unit"]}},387:function(e,t,n){"use strict";e.exports={name:"unit",category:"Construction",syntax:["value unit","unit(value, unit)","unit(string)"],description:"Create a unit.",examples:["5.5 mm","3 inch",'unit(7.1, "kilogram")','unit("23 deg")'],seealso:["bignumber","boolean","complex","index","matrix","number","string"]}},388:function(e,t,n){"use strict";e.exports={name:"false",category:"Constants",syntax:["false"],description:"Boolean value false",examples:["false"],seealso:["true"]}},389:function(e,t,n){"use strict";e.exports={name:"i",category:"Constants",syntax:["i"],description:"Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",examples:["i","i * i","sqrt(-1)"],seealso:[]}},390:function(e,t,n){"use strict";e.exports={name:"Infinity",category:"Constants",syntax:["Infinity"],description:"Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",examples:["Infinity","1 / 0"],seealso:[]}},391:function(e,t,n){"use strict";e.exports={name:"LN2",category:"Constants",syntax:["LN2"],description:"Returns the natural logarithm of 2, approximately equal to 0.693",examples:["LN2","log(2)"],seealso:[]}},392:function(e,t,n){"use strict";e.exports={name:"LN10",category:"Constants",syntax:["LN10"],description:"Returns the natural logarithm of 10, approximately equal to 2.302",examples:["LN10","log(10)"],seealso:[]}},393:function(e,t,n){"use strict";e.exports={name:"LOG2E",category:"Constants",syntax:["LOG2E"],description:"Returns the base-2 logarithm of E, approximately equal to 1.442",examples:["LOG2E","log(e, 2)"],seealso:[]}},394:function(e,t,n){"use strict";e.exports={name:"LOG10E",category:"Constants",syntax:["LOG10E"],description:"Returns the base-10 logarithm of E, approximately equal to 0.434",examples:["LOG10E","log(e, 10)"],seealso:[]}},395:function(e,t,n){"use strict";e.exports={name:"NaN",category:"Constants",syntax:["NaN"],description:"Not a number",examples:["NaN","0 / 0"],seealso:[]}},396:function(e,t,n){"use strict";e.exports={name:"null",category:"Constants",syntax:["null"],description:"Value null",examples:["null"],seealso:["true","false"]}},397:function(e,t,n){"use strict";e.exports={name:"phi",category:"Constants",syntax:["phi"],description:"Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",examples:["phi"],seealso:[]}},398:function(e,t,n){"use strict";e.exports={name:"SQRT1_2",category:"Constants",syntax:["SQRT1_2"],description:"Returns the square root of 1/2, approximately equal to 0.707",examples:["SQRT1_2","sqrt(1/2)"],seealso:[]}},399:function(e,t,n){"use strict";e.exports={name:"SQRT2",category:"Constants",syntax:["SQRT2"],description:"Returns the square root of 2, approximately equal to 1.414",examples:["SQRT2","sqrt(2)"],seealso:[]}},400:function(e,t,n){"use strict";e.exports={name:"tau",category:"Constants",syntax:["tau"],description:"Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",examples:["tau","2 * pi"],seealso:["pi"]}},401:function(e,t,n){"use strict";e.exports={name:"true",category:"Constants",syntax:["true"],description:"Boolean value true",examples:["true"],seealso:["false"]}},402:function(e,t,n){"use strict";e.exports={name:"version",category:"Constants",syntax:["version"],description:"A string with the version number of math.js",examples:["version"],seealso:[]}},459:function(e,t,n){"use strict";e.exports={name:"config",category:"Core",syntax:["config()","config(options)"],description:"Get configuration or change configuration.",examples:["config()","1/3 + 1/4",'config({number: "Fraction"})',"1/3 + 1/4"],seealso:[]}},460:function(e,t,n){"use strict";e.exports={name:"import",category:"Core",syntax:["import(functions)","import(functions, options)"],description:"Import functions or constants from an object.",examples:["import({myFn: f(x)=x^2, myConstant: 32 })","myFn(2)","myConstant"],seealso:[]}},461:function(e,t,n){"use strict";e.exports={name:"typed",category:"Core",syntax:["typed(signatures)","typed(name, signatures)"],description:"Create a typed function.",examples:['double = typed({ "number, number": f(x)=x+x })',"double(2)",'double("hello")'],seealso:[]}}}]);