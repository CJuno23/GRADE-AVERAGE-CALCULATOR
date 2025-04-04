/*let grades1 = prompt("Enter your first grade");
let grades2 = prompt("Enter your second grade");
let grades3 = prompt("Enter your third grade");
let average;
    
    
    
if (grades1 === null || grades2 === null || grades3 === null) {
    alert("Cancelled");
}else if (isNaN(grades1) || isNaN(grades2) || isNaN(grades3)){
    alert("Please enter valid numeric grades.")
}
 else {
    grades1 = Number(grades1);
    grades2 = Number(grades2);
    grades3 = Number(grades3); 
    average = (grades1+grades2+grades3)/3;

    
    if(average >= 90 && average <= 100){
        alert("Excellent!");
    }else if(average >= 80 && average <= 89){
        alert("Great job!")
    }else if(average >= 70 && average <= 79) {
        alert("Good effort!")
    }else {
        alert("Needs Improvement.")
    }
}
console.log(average);*/

let grades1 = prompt("Enter your first grade");
let grades2 = prompt("Enter your second grade");
let grades3 = prompt("Enter your third grade");
let average;

if (grades1 === null || grades2 === null || grades3 === null) {
    alert("Cancelled");
} else {
    grades1 = Number(grades1);
    grades2 = Number(grades2);
    grades3 = Number(grades3);

    // Validate input
    if (isNaN(grades1) || isNaN(grades2) || isNaN(grades3)) {
        alert("Please enter valid numeric grades.");
    } else if (
        grades1 < 0 || grades1 > 100 ||
        grades2 < 0 || grades2 > 100 ||
        grades3 < 0 || grades3 > 100
    ) {
        alert("Please enter grades between 0 and 100.");
    } else {
        // Calculate average
        average = (grades1 + grades2 + grades3) / 3;

        // Grade evaluation
        if (average >= 90 && average <= 100) {
            alert("Excellent!");
        } else if (average >= 80 && average <= 89) {
            alert("Great job!");
        } else if (average >= 70 && average <= 79) {
            alert("Good effort!");
        } else {
            alert("Needs Improvement.");
        }
    }
}
console.log(average);
