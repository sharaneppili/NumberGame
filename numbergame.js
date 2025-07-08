const a = [
    [],
    [],
    [],
    [],
    []
];
let index = 0;
let ans = [];
let para = document.getElementById("para");

function addintoarray(n) {
    let i = 0;
    let k = n;
    while (n) {
        if (n & 1 === 1) {
            a[i].push(k);
        }
        i += 1;
        n = n >> 1;
    }
}
for (let i = 0; i <= 30; i++) {
    addintoarray(i);
}



let boxcon = document.getElementById("boxcon");
let div = document.createElement("div");

boxcon.appendChild(div);

function getele(currele) {
    let currbox = document.createElement("div");
    for (let k = 0; k < currele.length; k++) {
        let elebox = document.createElement("button");
        elebox.classList.add("elementbox", "m-3");
        elebox.textContent = currele[k];
        currbox.appendChild(elebox);
        if (k % 4 === 0) {
            let br = document.createElement("br");
            currbox.appendChild(br);
        }
    }
    let ss = document.getElementById("paraelement");
    ss.textContent = "choose whether this box " + (index + 1) + " consist of your number";
   
    boxcon.appendChild(currbox);
}




let timer = document.getElementById("timer");

let arlen = a.length;

let inputyes = document.getElementById("inputyes");
let inputno = document.getElementById("inputno");
let block=document.getElementById("yesnoblock");
function displayresult(num){
 document.getElementById("yesnoblock").textContent="";
let resbox=document.getElementById("result");
let respara=document.getElementById("yourans");
resbox.classList.remove("d-none");
respara.textContent=num;


}
function result(num) {
    console.log("hello,nums"+num);
    num.reverse();
    let n = 0;
    let i = 0;
    while (i<=5) {
        let popedele = num.pop();
        if (popedele === 1) {
            n = n +( 2 ** i);
        }
        i=i+1;
       
    }
    console.log(n);
 displayresult(n);
}

let changeTime = setInterval(function() {
    if (index < arlen) {
        document.getElementById("firstbox").classList.add("d-none");
         block.classList.remove("d-none");
         boxcon.textContent = "";
        getele(a[index]);
        index = index + 1;
        let count = 9;
        let timercount = setInterval(function() {
            timer.textContent = count;
            count = count - 1;
            
            if (count === 0) {
                
                if (inputno.checked) {
                    ans.push(0);
                 
                }
                if (inputyes.checked) {
                    ans.push(1);
                   
                }
                clearInterval(timercount);
                if (!(inputyes.checked || inputno.checked) && index<5) {
                    
                    clearInterval(changeTime);
                    yesnoblock.textContent="";
                    document.getElementById("timeout").classList.remove("d-none");
                    console.log(index);
                    
                }
                inputno.checked = false;
                inputyes.checked = false;
                
            }
        }, 1000);



    }

    if (index==5 && ans.length==4) {

        clearInterval(changeTime);
       
        if (inputno.checked) {
            ans.push(0);
            inputno.checked = false;
        }
        if (inputyes.checked) {
            ans.push(1);
            inputyes.checked = false;
        }
       
        if (ans.length === 5) {
            console.log("res"+ans)
            result(ans);
        } 
        else{
           
                    yesnoblock.textContent="";
                    document.getElementById("timeout").classList.remove("d-none");
                    
        }
    }
}, 9000);
