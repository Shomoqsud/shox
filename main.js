let a = +prompt("1-Son kiriting")
let b = +prompt("2-Son kiriting")
let c = +prompt("3-Son kiriting")

if ((a>b && a<c) || (a<b && a>c)) {
    alert("1-Son orta qiymat " + a)
}else if ((a<b && b<c) || (a>b && b>c)) {
    alert("2-Son orta qiymat " + b)
}else if ((c>a && b>c) || (a>c && b<c)) {
    alert("3-Son orta qiymat " + c)
}else {
    alert("Nimadr notori ketib qoldi")
}


let son1 = +prompt("Son kirit")

while (isNaN(son1) || son1==0) {
    son1 = +prompt("Sanga son kirit diyildiyu")
}
if (son1%2==0) {
    alert("Siz juft son kiritdingiz")
}else{
    alert("Siz toq kiriting")
}



let son =+prompt("Son kiriting:")
while (isNaN(son) || son==0) {
    son = +prompt("Sanga son kirit diyildiyu")
}

let deg =+prompt("Darajani kiriting:")
while (isNaN(deg) || deg==0) {
    deg = +prompt("Sanga son kirit diyildiyu")
}

let box = 1
for (let i = 1; i <=deg; i++) {
    box = box*son 
}
alert(box)


let soon = +prompt("son kirgazing ")
while (isNaN(soon) || soon == "0") {
    if (soon == "") {
        soon = prompt("0 sonni kirgazmang! ")
    }else{
        soon = prompt("faqat son kirgazing! ")
    }
}

let chess = " "

for (let i = 1; i <= soon; i++) {
  
    for (let j = 1; j <= soon; j++) {
        
        if (i == 1 || j == 1 || i == soon || j == soon || i == j ) {
            chess = chess + "[|]"
        }else{
            chess = chess + "   "
        }
        
    }
    console.log(chess);
    chess = " "
}