// function arr(a){
//     if(a>10){
//         console.log("this number is greater than 10")
//     }
//     else{console("less than 10 ")
// }
// }

// arr(11)


// a=[5,10,10,20,25,30]
// b=[]
// for(i=0;i<a.length;i+=2){
//     sum=a[i]+a[i+1]
//     b.push(a[i],a[i+1],sum)
//     // b.push(sum)
// }
// console.log(b)


// a=[1,2,3,20,40,30,20,7]
// b=20

// d=false
// for(i=0;i<a.length;i++){
//     if(a[i]===b){
//         a[i]=200
//         d=true
//         break
//     }
// }
// console.log(a)



// a=[1,2,4,2,3,5,6,7,7,8]
// b=a.sort()
// function duplicate(){
// for (i=0;i<b.length;i++){
//     if(b[i]==b[i-1]){
//         console.log(b+" "+"is duplicat")  
//       }
//     }
// }
// duplicate()




// a=[1,2,3,20,40,30,20,7]


// for(i=0;i<a.length;i++){
//     if(a[i]==20){
//         a[i]=200
//         break
//     }
// }
// console.log(a)
// a=4

// if(a%a==0)&&{
// console.log("prime number")
// }
// else{
//   console.log("not prime number")
// }
// console.log(a)

// count=0

// for (i=0;i<=20;i++){
//   if(a%i==0)
//   count=count+1
// }
// if (count==2){
//   console.log("is a prime number")

// }
// else{
//   console.log("is not a prime number")
// }


// prime=[]
// for (i=1;i<=20;i++){
// count=0
//   for (j=1;j<=20;j++){
//     if(i%j==0)
// count=count+1
//   }
//   if(count==2){
//   console.log("prine number")
//   }
//   else{
//     console.log("not prime number ")
//   }
// }




// a=[3,5,2,1,2]
// b=a.sort()
// console.log(a)
// a=[3,5,2,1,2]
// b=a.sort()
// console.log(a)




a=[1,2,11,,5,13]
b=[11,2,10,50]
output=[]
for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]==b[j]){
            output.push(a[i])
        }
    }
}
console.log(output)


