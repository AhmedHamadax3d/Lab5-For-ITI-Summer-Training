//(1)......................................................
const isEven=function(number){
    if(number %2==0){
        console.log('True')
        
    }else{
        console.log('False')
    }
}
isEven(6)

//(2)....................................................
const allEvenNum=function(num1,num2){
    let start=Math.min(num1,num2)
    let end=Math.max(num1,num2)
    for(let i=start;i<end;i++){
        if (i %2==0) {
        console.log(i)
        }
    }
}
allEvenNum(1,5)

//3...........................................................
const getAverage =function() {  
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    }
    let average = sum / arguments.length;
    return average;
}
console.log('Result', getAverage(10,20,30,40,50,60,70,80,90,100));

//4....................................................................
function checkWinner(T1_G1,T1_G2,T1_G3,T2_G1,T2_G2,T2_G3,){
    let avgT1 = (T1_G1 + T1_G2 + T1_G3) / 3
    let avgT2 = (T2_G1 + T2_G2 + T2_G3) / 3
    console.log(avgT1)
    console.log(avgT2)
    if (avgT1 > avgT2) {
    console.log("Team 1 is the winner");
    } else{
    console.log("Team 2 is the winner");
    } 
    
}

checkWinner(10,20,30,40,50,60,70)

//5.......................................................................
function rectangleArea(){
    let width=Number(prompt("Enter The Width"))
    let height=Number(prompt("Enter The height"))
    console.log(width*height)
}
rectangleArea(10,10)

//6.......................................................................  
function sum (){
    let x=Number(prompt("Enter First Number"))
    let y=Number(prompt("Enter Seconde Number"))
    return x+y
    
}
console.log(sum())



//7................................................................................
function sumOfNumbers(){
    let count=Number(prompt('How Many Numbers You Want To Sum '))
    let sum=0
    for(let i=0;i<count;i++){
        let num =Number(prompt("Input Each Number Individually:"+i))
        sum += num
    }
    console.log("The total sum : " + sum);
}

sumOfNumbers()