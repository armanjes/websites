// var result, base, height

// base = prompt("Enter Base: ")
// height = prompt("Enter Height: ")
// result = 0.5 * base * height

// document.write("height is: ", height," & base is: ", base)
// document.write(", Area of Triangle: ",result)

// --------------------------------------

// console.log(23>18)
// console.log(23<18)
// console.log(20<=20)
// console.log(20==20)
// console.log(20=="20")
// console.log(20===20)


// --------------------------------------

// var num = 50;
// if (num%2 == 0){
//     console.log("Even")
// }
// else{
//     console.log('Odd')
// }

// -length-chrat-toLowerCase-toUpperCase-slice-------------------------------------

// var word = "BANGLADESH"
// document.write(word.toLowerCase())

// ---------------------------------------

// var mark = prompt('Enter mark: ');

// if (mark>100 || mark<0) 
//     console.log('Invalid mark')

// else if (mark>=80 && mark<=100)
//     console.log('A+');

// else if (mark>=70 && mark<=79)
//     console.log('A');

// else if (mark>=60 && mark<=69)
//     console.log('A-');

// else if (mark>=50 && mark<=59)
//     console.log('B');

// else if (mark>=34 && mark<=49)
//     console.log('B-');

// else
//     console.log('Fail')

// ---------------------------------

// var num1, num2, num3;

// num1 = prompt('Enter num1: ') 
// num2 = prompt('Enter num2: ')
// num3 = prompt('Enter num3: ')

// if (num1<num2 && num3<num2)
//     console.log('num2 is the biggest ',num2)

// else if (num1<num3 && num2<num3)
//     console.log('num3 is the biggest ',num3)

// else {
//     console.log('num1 is the biggest', num1)
// }


//------------vowel = a e i o u --------------


// var letter = prompt('Enter letter: ');
// letter = letter.toLowerCase();

// if (letter == "a" || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'e')
// console.log('Vowel')

// else console.log('Consonant')

// -----------switch statement----------------------------------

// var digit = parseInt(prompt('Enter a digit: '))

// switch(digit){
//     case 0:
//         console.log('zero')
//         break
//     case 1:
//         console.log('one')
//         break
//     case 2:
//         console.log('two')
//         break
//     case 3:
//         console.log('three')
//         break
//     case 4:
//         console.log('four')
//         break
//     default:
//         console.log('Enter digit between 0 & 4')
// }

// ------------------------------------------

// var letter = prompt('Enter a letter: ')
// letter.toLowerCase()

// switch(letter){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('Vowel')
//         break
//     default:
//             console.log('Consonant')
//             break
// }

// ----     For Loop    -----------------------------------

var x;

// for (x=1; x<11; x+=1){
//     document.write("xyz" )
// }

// for(x=1;x<=100;x+=1){
//     document.write(' '+x)
// }

// for(x=1;x<=100;x+=2){
//     document.write(' '+x)
// }

// for(x=100; x>0; x-=1){
//     document.write(' '+x)
// }

// var sum = 0;
// var n = parseInt(prompt('Enter a number: '))

// for(x=1;x<=n;x+=1){
//     sum += x
// }
// document.write('sum = ',sum)




// ---DOM--- Document Object Model-------------------

// var link = document.getElementsByTagName("a")[0];
// link.innerHTML = "study with anis"

// link.style.textDecoration = "none"
// link.style.color = "red"
// link.style.fontSize = "1.25rem"
// link.href = "https:// www.google.com"

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("This is heading 3");

// heading3.appendChild(text);

// var myId = document.getElementById("mydiv");
// myId.appendChild(heading3)

// -----------------------------------------------------

// var heading2 = document.getElementsByTagName("h2")[0];
// myId.removeChild(heading2)

// -----------------------------------------------------

