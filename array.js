// 1
var a=["hii",10,true,"method"]
console.log(a.length)

// 2
var b=["hii","hello","namaste","hola"]
b.push("merhaba")
console.log(b)

// 3
var c=["white","blue","green","black"]
c.pop()
console.log(c)

// 4
var d=[10000,"coders","kphb","hyd"]
d.unshift("institute")
console.log(d)

// 5
var e=["trees","rain","sun","moon","stars","clouds"]
e.shift()
console.log(e)

// 6
const f=[1,2,3,4,5,6,7,8,9]
console.log(f.reverse())

// 7
var g=["hii","from","an","array","to","you"]
console.log(g.indexOf("array"))

// 8
var h=["white","blue","green","black"]
console.log(h.includes("orange"))

// 9
var i=[5,2,9,1,5,6]
i.sort((a,b)=>a-b) 
console.log(i)

// 10
var j=["elements","of","array"]
var j1=j.join(",")
console.log(j1)


// Questions with Multiple Array Methods
// 1
var k=[10000,"coders","kphb","hyd"]
k.push("telangana")
console.log(k)
k.shift()
console.log(k)

// 2
var l=["hii","everyone","good","morning"]
var l1=l.reverse()
console.log(l1)
l2=l1.join("")
console.log(l2)

// 3
var m=[3,6,8,4,2,3,6,10]
m1=m.sort((a,b)=>a-b) 
console.log(m1)
m1.pop()
console.log(m1)

// 4
var n=["white","blue","green","black"]
n.unshift("purple","brown")
console.log(n)
n.shift()
console.log(n.length)

// 5
var o=[5,2,9,1,6]
var o1=[3,6,2,3,6]
var o2=o.concat(o1)
console.log(o2)
o3=o2.sort((a,b)=>a-b)
console.log(o3)
o3.pop()
console.log(o3)