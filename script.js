
// task 1

// function calcRectangleArea(width, height){

//         if(!Number(width) || !Number(height)){
//             throw new Error("Not a number")
//         }else {
//             return width * height
//         }
// }


// console.log(calcRectangleArea(2,"fsd"));

// task 2 

// function checkAge(age) {

//     try {
//         if (typeof age === 'string') {

//             if (age.length == 0) {
//                 throw new Error("The field is empty! Please enter your age");
//             } else
//                 throw new Error("You must enter only numbers");

//         } else if (typeof age != "number") {
//             throw new Error("You must enter only numbers");
//         } else if (age < 14) {
//             throw new Error("You are too young")
//         } else if (age >= 14) {
//             alert("You  have access to film ")

//         }

//     } catch (exeption) {
//         console.log(exeption.name + ': ' + exeption.message);
//     }

// }

// checkAge("") 

// task 3 

// class MonthException {


//     constructor(message) {
//         this.name = message
//     }

//     showMonthName(name) {
//         try {

//             if(name <= 12){

//             switch (name) {
//                 case 1:
//                     console.log("January")
//                     break;
//                 case 2:
//                     console.log("February")
//                     break;
//                 case 3:
//                     console.log("March")
//                     break;
//                 case 4:
//                     console.log("April")
//                     break;
//                 case 5:
//                     console.log("May")
//                     break;
//                 case 6:
//                     console.log("June")
//                     break;
//                 case 7:
//                     console.log("July")
//                     break;
//                 case 8:
//                     console.log("August")
//                     break;
//                 case 9:
//                     console.log("September")
//                     break;
//                 case 10:
//                     console.log("October")
//                     break;
//                 case 11:
//                     console.log("November")
//                     break;
//                 case 12:
//                     console.log("December")
//                     break;
//                 default:
//                     console.log("WTF")
//                     break;
//             }
//         }else 
//             throw new Error("MonthException Incorrect month number")
//         } catch (exeption) {
//             console.log(exeption.name + ': ' + exeption.message);
//         }

//     }

// }

// let message = new MonthException()
// message.showMonthName(122)


// task 4

function showUser(ids) {

    let newArr = []
    for (let i = 0; i < ids.length; i += 1) {

        try {

            if (ids[i] < 0) {
                throw new Error(`ID must not be negative ${ids[i]}`)
            } else {
                newArr.push({ 'id': ids[i] })
                console.log(ids[i]);
            }

        } catch (exeption) {
            console.log(`${exeption.name}: ${exeption.message}`);
        }
    }
    return newArr

}

console.log(showUser([7, -12, 44, 22, -44]))



