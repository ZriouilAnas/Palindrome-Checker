const btn = document.querySelector('#check-btn');
const text = document.querySelector('#result');
const inputX = document.querySelector('#text-input');

btn.addEventListener('click' , 
    () => {
        const word = inputX.value;
        
        if (word == '') {
            text.innerText = 'Please input a value';
            alert('Please input a value');
        } else if (reverseString(word) == true) {
            text.innerText =  word + ' is a palindrome';
        } else if (reverseString(word) == false) {
            text.innerText =  word + ' is not a palindrome';
        }
    } 

)



function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    const cleanedText = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    var splitString = cleanedText.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
   

    //Step 4. Return the reversed string
    console.log(cleanedText)
    console.log(joinArray)

    return joinArray == cleanedText; // "olleh"
}
