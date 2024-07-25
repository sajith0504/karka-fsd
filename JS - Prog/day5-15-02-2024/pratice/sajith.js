// a=[3,5,2,1,2]

// b=a.sort()
// function arr(){
// for (i=0;i<a.length;i++){
//     if(a[i]==a[i+1]){
//         console.log(a[i])
//     }
// }
// }
// arr()



a=[3,5,2,1,2]
b=2
c=[]
d=[]
function sum(){
    for(i=0;i<a.length;i++){
        if (a[i]!=b){
            c.push(a[i])
        }
    }
        d=a.length-c.length
        for(i=0;i<d;i++){
        
                c.push("*")      
        }
    }
    sum()
    console.log(c)




// a=[5,0,10,15,0,20,25,0]
// for(i=0;i<a.length;i++){
//     if(a[i]==0){
//        a[i] = "*"
//     }

  

// }
// console.log(a)




// a=[5,0,10,15,0,20,25,0]
// b=[]
// function arr(){
//     for(i=0;i<a.length;i++){
//         if(a[i]!=0){
//             b.push(a[i])
//         }
//     }
//     console.log(b)
// }
// arr()



// a=[5,10,30,20,25,30]
// b=[]

// function arr(){
//     for(i=0;i<a.length;i=i+2){
//         sum=a[i]+a[i+1]
//         b.push(a[i],a[i+1])
//         b.push(sum)
       
//     }
//     console.log(b)
// }
// arr()






// let a=[5,10,0,30,0,20,0,5,0]
// let b=[]
// for(i=0;i<a.length;i++){

//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
 
// }


// console.log(b)


// b=[]
// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
    
// }
// console.log(b)





// a=[5,10,30,20,25,30]
// b=[]
// for (i=0;i<a.length;i=i+2){
//     sum=a[i]+a[i+1]
//     b.push(a[i],a[i+1],sum)
// }
// console.log(b)



// x=[23,4,-6,23,-9,21,3,-45,-8]
// a=[]
// b=[]
// function arr(){
// for (i=0;i<x.length;i++){
//     if (x[i]<=-1){
// a.push(x[i])
//     }
//     else{
//         b.push(x[i])
//     }
// }
// console.log(a)
// console.log(b)
// }

// arr()



//  a=[5,10,15,20,22,23]
//  for (i=0;i<a.length;i++){
//     if (a[i]%2!==0){
//         a[i]=0
//     }
    
//  }
//  console.log(a)




// a=[1,2,3,4,0,3,4,5]
// b=0
// for (i=0;i<a.length;i++){
//     if (a[i]==0){
//     break
//     }
//     else{
//         b+=a[i]
//     }
// }
// console.log(b)

// b=0
// for(i=0;i<a.length;i++){
//     if (a[i]==0){
//         break
//     }
//     else{
//         b+=a[i]
//     }
// }
// console.log(b)

// pnum=0
// for (i=0;i<=10;i++){
   
//     sum=pnum+i
//     console.log(pnum,i,sum)
//     pnum=sum
// }

// function max(a,b,c){
//     if(a>b&&a>c){
//         console.log("a is greater")
//     }
//     else if(b>a&&b>c){
//         console.log("b is greater")
//     }
//     else if(c>a&&c>b){
//         console.log("c is greater")
//     }

// }
// max(452,42,12)





// a=[3,2,2,3]
// b=[]
// c=[]
// for (i=0;i<a.length;i++){
//     if(a[i]!=3){
//         b.push(a[i])
//     }
// }
//     c=a.length-b.length
//     for (i=0;i<c;i++){
//         b.push('_')
//     }
//     console.log(b)


// a=[1,2,3,4,3]
// function dub(a){
//     b=a.sort()
//     for(i=0;i<b.length;i++){
// if (a[i]==a[i+1]){
//     console.log(a[i])
// }
//     }
// }

// dub(a)


// a=[1,0,2,3,0,4,5,0]
// b=[]
// function arr(){
// for (i=0;i<a.length;i++){
//   b.push(a[i]) 
//   if(a[i]==0){
// b.push(0)
//   } 

// }

// b.length=a.length
// console.log(b)
// }
// arr()



// // Javascript program for the above approach 

// function pass(a) { 
//     const n = a.length; 
//     // Checking lower alphabet in string 
//      hasLower = false; 
//      hasUpper = false; 
//      hasDigit = false; 
//      specialChar = false; 
//     normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 "; 
    
//     for (let i = 0; i < n; i++) { 
//         if (a[i] >= "a" && a[i] <= "z") { 
//         hasLower = true; 
//         } 
//         if (a[i] >= "A" && a[i] <= "Z") { 
//         hasUpper = true; 
//         } 
//         if (a[i] >= "0" && a[i] <= "9") { 
//         hasDigit = true; 
//         } 
//         if (!normalChars.includes(a[i])) { 
//         specialChar = true; 
//         } 
//     } 
    
//     // Strength of password 
//      strength = "Weak"; 
//     if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) { 
//         strength = "Strong"; 
//     } else if ((hasLower || hasUpper) && specialChar && n >= 6) { 
//         strength = "Moderate"; 
//     } 
    
//     console.log(`Strength of password: ${strength}`); 
//     } 
    
//     // Driver code 
    //  a = "GeeksforGeeks!@12"; 
//     pass(a); 
    
//     // This code is contributed by princekumaras
    




// a = "GeeksforGeeks!@12" 
// n=a.length
// lowercase="false"
// uppercase="false"
// onedigit="false"
// onespecial="false"
// normalchar="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// function pass(a){
//     for(i=0;i<n;i++){
// if(a[i]=a||a[i]<=z){
// lowercase="true"
// }
// if(a[i]="A" ||a[i]<=Z){
//     uppercase="true"
// }
// if(a[i]=0||a[i]<=9){
//     onedigit="true"
//     }
//     if(a[i]!=normalchar){
//         onespecial="true"
//     }
// }

// if(lowercase&&uppercase&&onedigit&&onespecial&&n>8){
// strength="strong"
// }
// else{
//     strength="week"
// }
// console.log(strength)
// }
// pass(a)



// a=[[1,2],[3,4]]
// b=[]
// c=0
// b=a.flat()
// // console.log(b)
// for(i=0;i<b.length;i+=1){
   
// c+=b[i]



// }
// console.log(c)





// a=[[23,98],[42,70]]
// b=[]
// c=[]
// b=a.flat()
// c=b.toString()
// console.log(c)



// a=[5,10,15,20,22,23]
//    for(i=0;i<a.length;i++){
// if(a[i]%2!=0){
//     a[i] = 0

// }

//     }
//     console.log(a)
// a=[5,0,10,15,0,20,25,0]
// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//        a[i] = 0
//     }

  

// }
// console.log(a)




// a=[3,2,2,3]
// b=[]
// c=[]

// for(i=0;i<a.length;i++){
//     if(a[i]!=3){
//     b.push(a[i])
//     }
// }
//     c=a.length-b.length
//  for(i=0;i<c;i++){

//     b.push("_")
//  }



// console.log(b)



// a=[3,2,2,3]
// b=[]
// c=[]
// for (i=0;i<a.length;i++){
//     if(a[i]!=3){
//         b.push(a[i])
//     }
// }
//     c=a.length-b.length
//     for (i=0;i<c;i++){
//         b.push('_')
//     }
//     console.log(b)



// a=[5,10,20,2,0,33,100,90]
// b=[]
// for(i=0;i<a.length;i=i+2){
//     sum=a[i]+a[i+1]
//     b.push(a[i],a[i+1],sum)
// }
// console.log(b)





// a=[5,10,30,20,25,30]
// b=[]
// for (i=0;i<a.length;i=i+2){
//     sum=a[i]+a[i+1]
//     b.push(a[i],a[i+1],sum)
// }
// console.log(b)

// a=[1,0,2,3,0,4,5,0]
// b=[]


// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
// }
// console.log(b)
// a="saJIth0504@"
// // n=a.length
// lowercase="false"
// uppercase="false"
// onedigit="false"
// special="false"
// overallcha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// function pass(a){
//     for(i=0;i<a.length;i++){
//     if(a[i]==a&&a[i]<=z){
//         lowercase="true"
//     }
//     if( (a[i]==" A")&&(a[i]<="Z")){
//         uppercase="true"
//     }
//     if(a[i]==0&&a[i]<=9){
//         onedigit="true"
//     }
//     if(a[i]!=overallcha){
// specal="true"
//     }
//     }

// if(uppercase&&lowercase&&onedigit&&overallcha&&a.length>8){
//     strength="strong"
// }
// else{
//     strength="week"
// }
// console.log(strength)
// }
// pass(a)




// num1=[1,2,2,1]
// num2=[2,2]
// c=[]
// d=[]
//     for(i=0;i<num1.length;i++){
//         arr1=num1[i]
    
//     for(j=0;j<num2.length;j++){
//         arr2=num2[j]
    
//     if(arr1==arr2){
//     c.push(arr1)
//     }
// }
//     }
//     for(k=0;k<c.length;k++){
//     if(c[k]!=c[k+1]){
//         d.push(c[k])
//     console.log(d)
//     }
// }





// num1=[1,2,2,1]
// num2=[2,2]
// c=[]
// d=[]
// for(i=0;i<num1.length;i++){
//     arr1=num1[i]
//     for(j=0;j<num2.length;j++){
//         arr2=num2[i]
//         if(arr1===arr2){
//             c.push(arr1)
//         }
//     }
// }
// for(k=0;k<c.length;k++){
//     if(c[k]!=c[k+1]){
// d.push(c[k])
//     }
// }
// console.log(d)