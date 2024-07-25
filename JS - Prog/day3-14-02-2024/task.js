// a=2
// b=5
// c=a+b
// console.log(c)

// b=20
// h=50
// c=(1/2*b*h)
// console.log(c)

// a=5
// b=10
// c=a
// a=b
// b=c
// console.log(a,b)

// a=10
// b=30
// c=12
// average=(a+b+c)/3
// console.log(average)

// a=10
// b=30
// c=12
// d=3
// result=(((a+b)*c)/d)
// console.log(result)


// Name="sajith"
// age=22
// dob=5_02_2002
// height=160
// weight=60
// degree="Be"
// is_alive="yes"
// console.log(Name,age,dob,height,weight,degree,is_alive)


// word1="hallo"
// word2="world"
// word3=(word1+word2)
// console.log(word3)


// input="vignesh"
// console.log("hello"+" "+input)

// age=22
// total=100
// final=(total-age)
// console.log(final)

// tamil=70
// english=80
// maths=98
// science=100
// social=87
// total=(tamil+english+maths+science+social)
// average=(total/5)
// console.log


//task-2
// for(i=1;i<=5;i=i+1){
//     console.log(i)
// }

// for(i=1;i<=10;i=i+1){
//     console.log(i)
// }


// for(i=2;i<=20;i=i+2){
//     console.log(i)
// }


// frnds=["rvi","leebn","ajay","anish"]
// for(i=0;i<frnds.length;i++){
//     console.log(frnds[i])
// }

// for(i=0;i<30;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


// a=1
// if(a>=18){
//     console.log("the person is eligible")
// }
// else{
//     console.log("not eligible")
// }

// for(i=0;i<50;i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }

// age=30
// for(i=0;i<=age;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }



// task3




// function num(a){
//     b=a*a
//     return b
    
// }
// console.log(num(3))


// function num(a){
//     if(a%2==0){
//         console.log("even")
//     }
//     else if(a%2==1){
//         console.log("odd")
//     }
// }
// num(4)
// num(3)


// for(i=1;i<=100;i=i+1){
//     if(i%3==0&&i%5==0){
//         console.log("fizzbuzz")
//     }
//     else if(i%3==0){
//         console.log("fizz")
//     }
//     else if(i%5==0){
//         console.log("buzz")
//     }
//     else{
// result=(i)
// console.log(result)
// }

// }


// function year(a){
//     if (((a%4==0)&&(a%100!=0))|| (a%400==0))
//     console.log(a+" " +"is a leep year")
// }
// year(2024)


// function age(a){
//     if(a<16){
//         console.log("you can drive")
//     }
//     else if(a==16||a==17){
//         console.log("you can drive but not vote")
//     }
//     else if((a==18)||(a<=24)){
//         console.log("you can vote but not rent a car")
//     }
//     else if(a>=25){
//         console.log("you can do pretty much anything")
//     }

// }
// age(22)
// a=[123456]
// b=a.toString(a)
// console.log(b.length)

a=[1,2,3,4,5,0,6,7,8,9]
c=0
for(i=0;i<a.length;i++){
    if(a[i]==0){
        break  
    }
    else{
    c+=a[i]
    }
}
console.log(c)

// function max(a,b,c){
//     if((a>b)&&(a>c)){
//         console.log("a is grater")
//     }
//     else if((b>a)&&(b>c)){
//         console.log("b is greater")
//     }
//     else if((c>b)&&(c>a)){
//         console.log("c is greater")
//     }
// }
// max(1,2,3)




// a=[5,10,13,14,121,130,140,152]
// for (i=0;i<a.length;i++){
//     if ((a[i])%5==0){
//         a[i]=0
//     }
//     else {
//         a[i]="*"
//     }
// }
// console.log(a)




// a=[5,10,13,14,121,130,140,152]
// b=[]
// for (i=0;i<a.length;i++){
//     if(a[i]%5==0){
//     b.push(0)
//     }
//     else {
//         b.push("*")
//     }
// }
// console.log(b)


// a=[5,0,10,0,15,20,0,25]
// b=[]
// for(i=0;i<a.length;i++){
//     if (a[i]==0){
//         b.push(0,0)
//     }
//     else {
//         b.push(a[i])
//     }
// }
// 


// a=("saji")
// console.log(typeof(a))

// a=[3,2,2,1,3]
// b=3
// c=[]
// for (i=0;i<a.length;i++){
//     if (a[i]==b){
//         a.slice(a[i])
//         a.push("*")
//     }
//     else{
//         c.push(a[i])
//     }
// }
// console.log(c)


// a=[3,2,2,1,3]   
// b=3
// c=[]
// d=[]
// function arr(){
//     for (i=0;i<a.length;i++)
//     if (a[i]!=b){
//     c.push(a[i])
// }
// d=a.length-c.length
// for (i=0;i<d;i++){
//     c.push("*")
// }
// console.log(c)
// }
// arr()





// a=[1,5,73,48,56,6]
// b=(a[0]+a[1])
// c=(a[2]+a[3])
// d=(a[4]+a[5])
// e=[b,c,d]
// console.log(e)





// a=[3,2,2,1,3]
// b=3
// c=[]
// d=[]
// function sum(){
//     for (i=0;i<a.length;i++ ){
//         if(a[i]!=b){
//             c.push(a[i])
//         }
//     }
//     d=a.length-c.length
//     for (i=0;i<d.length;i++){
//         if (a[i]=d){
//             c.push("*")
//         }
//     }
//     console.log(c)
// }
// sum()

// a=[21,22,23,24,25,26,27,18]
// b=[]

// for(i=0;i<a.length;i=i+2){
//     sum=a[i]+a[i+1]
//     b.push(sum)    
// }


// console.log(b)


// // 
//     }
    

// a=("sajith")

// for(i=0;i<a.length;i++){
//     if((a[i]=="a")||(a[i]=="i")){
//         console.log(a[i] + " "+"is vovels") 
//     }
//     else{
//         console.log(a[i] + " " + "is consonent")
//     }
// }