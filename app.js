// chap 14-16 Arrays

// Q1
// studentName = []

// Q2
// studentName = []

// Q3
// pets = ["cat"]
// alert(pets)

// Q4
// num = [1,2]
// alert(num)

// Q5
// boolean = [true]
// alert(boolean)

// Q6
// mixedArray = ["cat",1,2,true]
// alert(mixedArray)

// Q7
// education = ["1) SSC <br>", "2) HSC<br>", "3) BCS<br>", "4) BS<br>", "5) BCOM<br>", "6) MS<br>", "7) M. Phil.<br>", "8) PhD<br>"]
// document.write("<h2> Qualifications : </h2> "+education)

// Q8
// var student = ["Michael","John","Tony"]
// var score = [320,230,480]
// percentage0 = [score[0]/500*100]
// percentage1 = [score[1]/500*100]
// percentage2 = [score[2]/500*100]
// document.write("Score of Micheal is "+score[0]+ ". percentage : " +percentage0 + "% <br>")
// document.write("Score of John is "+score[1]+ ". percentage : " +percentage1 + "% <br>")
// document.write("Score of Tony is "+score[2]+ ". percentage : " +percentage2 + "% <br>")

// Q9
// a
// color = prompt("Enter color")
// array = [color, "red","green","blue"]
// document.write(array)
// b
// color = prompt("Enter color")
// array = ["red","green","blue",color]
// document.write(array)
// c
// color = prompt("Enter color")
// color2 = prompt("Enter another color")
// array = ["red","green","blue",color,color2]
// document.write(array)
// d
// color = prompt("Enter color")
// array = ["red","green","blue",color]
// array = array.splice(1)
// document.write(array)
// e
// color = prompt("Enter color")
// array = ["red","green","blue",color]
// array.splice(0,2)
// document.write(array)
// f
// color = prompt("Enter color")
// index = prompt("Enter index")
// array = ["red","green","blue"]
// if(index == 0){
//     document.write(color," red ","green ","blue")
// }else if(index == 1){
//     document.write("red ",color," green ","blue")
// }else if(index == 2){
//     document.write(" red ","green ",color," blue")
// }else if(index == 3){
//     document.write("red ","green ","blue ",color)
// }else{
//     document.write("Invalid index")
// }
// g
// var color = ["red","blue","green","yellow"]
// var color2 = color.slice(0,2)
// document.write(color2)


// Q10
// score = [320,230,480,120]
// sortedScore = [120,230,320,120]
// document.write("Scores of students : "+ score + "<br>Ordered score of students : "+sortedScore)

// Q11
// cities = ["Islamabad","Karachi","Lahore","Peshawar","Quetta"]
// document.write("cities list : <br> "+cities)
// selectedCities = [cities[0],cities[4]]
// document.write("<br><br><br> Selected cities list :<br> "+selectedCities)

// // Q12
// array = ["This", "is", "my", "cat"]
// document.write("Array : <br>"+array)
// array2 = array.join(" ")
// document.write("<br><br>string : <br>"+array2)

// Q13
// devices = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br>"+devices) 
// document.write("<br><br>out : <br>" +devices[0])
// document.write("<br>out : <br>" +devices[1])
// document.write("<br>out : <br>" +devices[2])
// document.write("<br>out : <br>" +devices[3])

// Q14
// devices = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br>"+devices)
// document.write("<br><br>out : <br>" +devices[3])
// document.write("<br>out : <br>" +devices[2])
// document.write("<br>out : <br>" +devices[1])
// document.write("<br>out : <br>" +devices[0])

// Q15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>")
// document.write("<option>"+ phone[0] +"</option>")
// document.write("<option>"+ phone[1] +"</option>")
// document.write("<option>"+ phone[2] +"</option>")
// document.write("<option>"+ phone[3] +"</option>")
// document.write("<option>"+ phone[4] +"</option>")
// document.write("<option>"+ phone[5] +"</option>")
// document.write("</select>")

// chap 14 (if statement nested)

//  Q1
// password = prompt("Enter your password")
// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5")
//     } else {
//         alert("OK")
//     }
// }

// Q2
// if(a === 1){
//     if(c === "Max"){
//         alert("OK")
//     }
// }

// Q3
// if (a === 1 && c === "Max") {
//     alert("OK")
// }

// Q4
// var num1 = 10
// var num2 = 10
// if (num1 == num2){
//     if(num1 <= num2) {
//         alert("numbers are equal")
//     }
// }

//chap 15 (array 1)

// Q1
// array = [];

// Q2
// pet = ["cat"]

// Q3
// var alphabet = ["h","i","j","k"]
// alert(alphabet[2])

// Q4
// alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"]
// Length = alphabet.length
// alert("The length of array is: " + Length)

// Q5
// pet = ["cat"]
// pet[1]= ["dog"]
// alert(pet[1])

// chap 16 (Array 2)

// Q1
// pet = ["cat"]
// pet.push("dog")
// alert(pet)

// Q2
// var Alphabet=["h","i","j","k"]
// Alphabet.pop()
// alert(Alphabet)

// Q3
// var Alphabet=["h","j","i","k"]
// Alphabet.push("l", 9 )
// alert(Alphabet)

// chap 16 (Array 3)

// Q1
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.shift()
// alert(sizes)

// Q2
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.unshift("L","XS","XS")
// alert(sizes)

// Q3
// pet = ["cat"]
// pet.unshift("dog")
// alert(pet)

// Q4
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.splice(2,0,"L")
// alert(sizes)

// Q5
// var sizes = ["S","M","XL","XXL","XXXL"]
// var regSizes = ["S","M","XL"]
// alert(regSizes)

// Q6
// var pets = ["dog","cat","ox","duck","frog"]
// pets.splice(1,3,"horse","hen")
// alert(pets)

// Q7
// var pets = ["dog","cat","ox","duck","frog"];
// pets.splice(1,2)
// alert(pets)

// Q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
// pets2 = pets.slice(3,5)
// alert(pets2)

// chap 17-20 (for loops)

// Q1
// for(i = 1;i <= 10; i++){
    // document.write(i)
// }

// Q2
// for(i = 1;i <= 12; i++){
    //  document.write(i)
// }

// Q3
// for var i = 0 i <= 4 i++
// for (var i = 0; i <= 4; i++);

// Q4
// for(j = 1;j <= 100 ;j++){
    // document.write("<br>" + j)
// }

// Q5
// for(i = 3;i > 0;i--){
    // document.write(i)
// }

// Q6
// array.length

// Q7
// flag = true;

// Q8
// pets = ["cat","dog","fish"]
// for (let i = 0; i < pets.length; i++) {
    // document.write(i)
// }

// Q9
// for (i = 0; i <= 10; i++) {
    // if (i == 1) {
        // alert("it should be 1");
        // break;
    // }
// }

// Q10
// array = ["ali", "hamza", "faizan"];
// firstName = prompt("Enter first name");
// for (i = 0; i < array.length; i++){
//     if(firstName === array){
//         alert("Enter");
//     }else{
//         alert("Please write correct user name");
//     }
// }

// Q11
// list = ["apple","mango","banana"]
// userInput = prompt("enter fruit")
// var matchFound = false;
// for (var i = 0; i < list.length; i++){
//  if (userInput === list[i]){
//         alert("Match found"); 
//         matchFound = true; 
//         break;
//     }
// }

// Q12
// var firstArr = ["a","b","c","d","e","f"];
// var secondArr = [1,2,3,4,5,6]
// for(i = 0; i < firstArr.length; i++){
    // for(j = 0;j < secondArr.length;j++ ){
        // document.write(firstArr[i] + secondArr[j])
    // }
// }

// chap 17-20 (arrays and loop)

// Q1
// array = [1,2[3,4]

// Q2
// array = [
//     [0,1,2,3]
//     [1,0,1,2]
//     [2,1,0,1]
// ]

// Q3
// for(i = 1;i <= 10;i++){
    // document.write("<br>"+i)
// }

// Q4
// number1 = prompt("Enter a number to show its multiplication table")
// number2 = prompt("Enter multiplication table length")
// for(i = 1;i <= number2;i++){
//     document.write(i + "x"+number1 + "= " +number1*i +"<br>")
// }

// Q5
// fruits = ["apple"+"<br>"+"banana "+"<br>"+"mango"+"<br>"+"strawberry"+"<br>"+"orange"]
// for(i = 1; i <= fruits.length; i++){
//     document.write(fruits)
// }

// Q6
// a
// document.write("a. counting :")
// for(i = 1;i <=15;i++){
//     document.write(i+",")
// }
// // // b
// document.write("<br>b. reverse counting :")
// for(i = 10;i >=1;i--){
//     document.write(i+",")
// }
// // // c
// document.write("<br>c. Even:")
// for(i = 0;i <=20;i+=2){
//     document.write(i+",")
// }
// // d
// document.write("<br>d. odd:")
// for(i = 1;i <=20;i+=2){
//     document.write(i+",")
// }
// // e
// document.write("<br>c. Series:")
// for(i = 2;i <=20;i+=2){
//     document.write(i+"k,")
// }

// Q7
// array = ["cake", "apple pie", "cookie", "chips", "patties"]
// input = prompt("what you want to order")

// if (array.includes(input)){
//     document.write("the "+input + " is available")
// }else{
//      document.write("we are sorry "+input+" is not available in our store")
// }

// Q8
// A = [24, 53, 78, 91, 12]

// Q9


// Q10
for(i = 5;i <= 100;i+=5){
    document.write(i + "<br>")
}