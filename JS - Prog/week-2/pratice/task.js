// a=[5,2,-7,3,-2,-1]
// b=[]

// for (i=0;i<a.length;i++){
// if(a[i]<=-1){
// b.push(a[i])

// }
// }
// console.log(b)


// a=[5,10,15,20,22,23]
// for(i=0;i<a.length;i++){
//     if(a[i]%2!=0){
//         a[i]=0
//     }
// }
// console.log(a)

//  a=[5,10,15,0,20,22,23]

// b=0
//  for(i=0;i<a.length;i++){
//     if(a[i]==0){
//         break  
//     }
//     else{
//         b+=a[i]
//     }
//  }
//  console.log(b)



// pnum=0
// for (i=0;i<=10;i++){
   
//     sum=pnum+i
//     console.log(pnum,i,sum)
//     pnum=sum
// }




// a=[1,0,2,3,0,4,5,0]
// b=[]
// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
       
//     }
 
// }
// b.length=a.length


// console.log(b)
// b.length=a.length





// a=[[1,2],[3,4]]
// b=[]
// c=0
// b=a.flat()
// for(i=0;i<b.length;i++){
// c+=b
// }
// console.log(c)



// task



// arr = [5,2,-7,3,-2,-1]
// b=[]
// for(i=0;i<arr.length;i++){
// if(arr[i]<=-1){
// b.push(arr[i])
// }
// }
// console.log(b)



// input=[5,10,15,20,22,23]

// for(i=0;i<input.length;i++){
// if(input[i]%2!=0){
// input[i] = 0
// }
// else{
// input[i]=input[i]
// }
// }
// console.log(input)




// input=[5, 10, 15, 20,0, 22, 23]

// b=0
// for(i=0;i<input.length;i++){
// if(input[i]==0){
//     break
// }
// else{
// b+=input[i]
// }
// }
// console.log(b)


// function age(a){
//     if(a<16){
//     console.log("you can't drive")
//     }
//     else if((a==16)||(a==17)){
//     console.log("you can drive but not vote")
//     }
//     else if(a=18||a<=24){
//     console.log("you can vote but not rent a car ")
//     } else if(a>=25){
//     console.log("you can do prety much any thing ")
//     }
//     }
//     age(22)



//     pnum=0
// for(i=0;i<=10;i++){
// sum=pnum+i
// console.log(pnum,i,sum)
// pnum=sum
// }



// even=[]
// odd=[]

// for(i=0;i<=50;i++){
// if(i%2==0){
// even.push(i)
// }
// else{
// i%2!=0
// odd.push(i)
// }
// }
// console.log("even",even.length)
// console.log("odd",odd.length)




// function multi(a,b){
//     if(a*b<=500){
//     console.log(a*b)
//     }
//     else{ (a*b>=500)
//     console.log(a+b)
//     }
//     }
//     multi(5,70)


// a=[3,1,2,3,6,3,3,,3,35,6]
// b=[]
// c=[]
// b=a.sort()
// for(i=0;i<b.length;i++){
//     if(b[i]!=b[i+1]){
//         c.push(b[i])
//     }
// }
// console.log(c)



// nums=[3,2,2,3]
// b=[]
// c=[]
// for (i=0;i<nums.length;i++){
//     if(nums[i]!=3){
//         b.push(nums[i])
//     }
// }
// c=nums.length-b.length

// for(i=0;i<c;i++){
//     // nums=b
//     b.push("_")
// }
// console.log(b)


// a=[1,0,2,3,0,4,5]
// b=[]
// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//    b.push(0)
// }
// }
// console.log(b)





// a=[1,2,3,4,5,6]
// b=[]
// for(i=0;i<a.length;i=i+2){
//     sum=a[i]+a[i+1]
//     b.push(a[i],a[i+1])
//     b.push(sum)
// }
// console.log(b)



// a=[5,10,0,30,0,20,0,5,0]
// b=[]
// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
// }
// console.log(b)





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


// a=[[23,98],[42,70]]
// b=[]
// c=[]
// b=a.flat()
// c=b.toString()
// console.log(c)


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

// a=[1,0,2,3,0,4,5,0]
// b=[]
// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
// }
//     b.length=a.length
    

// console.log(b)



// a=[5,10,20,2,0,33,100,90,]
// b=[]
// for(i=0;i<a.length;i=i+2){
//     sum=a[i]+a[i+1]
//  b.push(a[i],a[i+1],sum)
// }
// console.log(b)



// num1=[1,2,2,1]
// num2=[2,2]
// b=[]
// c=[]
// for(i=0;i<num1.length;i++){
//     arr1=num1[i]
//     for(j=0;j<num2.length;j++){
//         arr2=num2[j]
//         if(arr1===arr2){
//             b.push(arr1)
//         }
//     }
// }
// for(k=0;k<b.length;k++){
//     if(b[k]!=b[k+1]){
//         c.push(b[k])
//     }
// }
// console.log(c)



// a=[3,2,2,3]
// b=[]
// c=[]
// for(i=0;i<a.length;i++){
//     if(a[i]!=3){
//     b.push(a[i])
//     }
// }
// c=a.length-b.length
// for(i=0;i<c;i++){
//     b.push("_")
// }
// console.log(b)



// a=[1,2,3,4]
// b=[]
// b=a.sort()
// c="false"
// for(i=0;i<b.length;i++){
//     if(b[i]==b[i+1]){
//        c="true"
//     }
// }
// console.log(c)



// a=[0,1,0,3,1,2]
// b=[]
// c=0
//   for(i=0;i<a.length;i++){
//     if(a[i]!=0){
//         b.push(a[i])
//     }
   
//   }
//   c=a.length-b.length
//   for(i=0;i<c;i++){
//     b.push("*")
//   }

//       console.log(b)  
    


 

// function pass(a) { 
//     const n = a.length
     
//      hasLower = false 
//      hasUpper = false 
//      hasDigit = false 
//      specialChar = false
//     normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 "
    
//     for (let i = 0; i < n; i++) { 
//         if (a[i] >= "a" && a[i] <= "z") { 
//         hasLower = true
//         } 
//         if (a[i] >= "A" && a[i] <= "Z") { 
//         hasUpper = true 
//         } 
//         if (a[i] >= "0" && a[i] <= "9") { 
//         hasDigit = true 
//         } 
//         if (!normalChars.includes(a[i])) { 
//         specialChar = true 
//         } 
//     } 
    
     
//      strength = "Weak" 
//     if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) { 
//         strength = "Strong"
//     } else if ((hasLower || hasUpper) && specialChar && n >= 6) { 
//         strength = "Moderate"
//     } 
    
//     console.log(strength)
//     } 
    

    //  a = "sajith1881@" 
    // pass(a)
    
    


// function pass(a){
//     n=a.length
//     haslower=false
//     hasupper=false
//     hasdigit=false
//     hasspecal=false
//     charaters="abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

//     for(i=0;i<n;i++){
//         if(a[i]>="a" && a[i]<="z"){
//             haslower=true

//         }
//         if(a[i]>="A"&&a[i]<="Z"){
//             hasupper=true
//         }
//         if(a[i]>="0"&&a[i]<="9"){
//             hasdigit=true
//         }
//         if(!charaters.includes(a[i])){
//             hasspecal=true
//         }
//     }
//     strength="week"
//     if(haslower&&hasupper&&hasdigit&&hasspecal&&a.length>=8){
//         strength="strong"
//     }
//     else if((haslower||hasupper)&&hasdigit&&hasspecal&&a.length>=6){
//         strength="modify"
//     }
//     console.log(strength)
// }
// a="sajith1881#"
// pass(a)


// num1=[1,2,2,1]
// num2=[2,2]
// b=[]
// c=[]
// d=[]
// for(i=0;i<num1.length;i++){
//     arr1=num1[i]
//     for(j=0;j<num2.length;j++){
//         arr2=num2[i]
//         if(arr1===arr2){
//             b.push(arr1)

//         }
//     }
// }
// c=b.sort()
// for(k=0;k<c.length;k++){
// if(c[k]!=c[k+1]){
// d.push(c[k])
// }
// }
// console.log(d)


// pnum=0
// for(i=1;i<=10;i++){
//     sum=pnum+i
//     console.log(pnum,i,sum)
//     pnum=sum
// }
  



// a=[1,2,3,4]
// b=[]
// c=false
// b=a.sort()
// for(i=0;i<b.length;i++){
// if(b[i]==b[i+1])
// c=true
// }
// console.log(c)


// a=[1,0,2,3,0,4,5,0]
// b=[]

// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
  
// }
// b.length=a.length
// console.log(b)

// function age(a){
//     b=a
//     c=2-28-2024
//     d=b-c
//     console.log(d)
// }
// a=2-5-2002
// age(a)

// arr = [1, 2, 3, 4, 2, 5, 6, 3];

// function removeDuplicates(arr) {
//     let b = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!b.includes(arr[i])) {
//             b.push(arr[i]);
//         }
//     }
//         console.log(b)
//     // return b
    
// }
// removeDuplicates(arr)



// arr = [1,2,3,4,2,5,6,3];
// b=[]
// function num(arr){
// for(i=0;i<arr.length;i++){
//     dub=false
//     for(j=0;j<b.length;j++){
//         if(b[j]==arr[i]){
//             dub=true
//         }
    
//     }
//     if(dub==false){
//     b.push(arr[i])
// }
// }
// console.log(b)
// }

// num(arr)

// a=[8,15,17,4,3,2]
// max=a[0]
// min=[]
// for(i=0;i<a.length;i++){
  
//     if(a[i]>max){
//         max=a[i]
//     }
// }
// console.log(max)
// for(i=0;i<a.length;i++){
//     if(a[i]<max){
//         min.push(a[i])
//     }
// }
// console.log(min)


// a="adam is a boy and adam love to play cricket"
// b=a.split(" ")
// c="adam"
// count=0

// for(i=0;i<b.length;i++){
//  if(b[i]==c){
//     count+=1
//  }
// }
// console.log(count)





// a=0
// b=1
// for(i=0;i<=10;i++){
//     c=a+b


//     console.log(c)
//     a=b
//     b=c

// }


// a=[1,0,2,0,4,0,56,7,8,0]
// b=[]
// for(i=0;i<a.length;i++){
//     b.push(a[i])
//     if(a[i]==0){
//         b.push(0)
//     }
// }
// console.log(b)


// n=15
// a=0
// b=1
// num=[]
// for(i=0;i<=n;i++){
//      num.push(a)
//     console.log(a)
//     c=a+b
//     a=b
//     b=c

// }




a=[1,2,3,0,4,0,3,0]
b=[0,0]
for(i=0;i<a.length;i++){
    if(a[i]==0){
        a.push(b)
        
        
    }
    else{
        b.push(a[i])
    }
}
console.log(a)