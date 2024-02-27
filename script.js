let input = document.querySelector('#inputNum');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result > p');

// getting the value of the entered number by the user.
const getInputValue = () => {
    return input.value;
};

// generating a random number from 1 to 5.
const generateRandomNumber = () => {
    return Math.floor((Math.random() * 6))
};

// creating a click functionality on button to check whether the  guessed number is correct or not.
btn.addEventListener('click', function () {

    const val = getInputValue();
    const randomNum = generateRandomNumber();

    //Validate if the number is from 0 to 5 and it should be a num not a string.
    if (isNaN(val) || (val < 0 || val > 5)) {
        result.innerHTML = "<p>Please enter a valid number or in range of 0 to 5</p>";  

    } else if (val == randomNum) {
        result.innerHTML = "<p>YaY!! you guessed it right</p>";

    } else {
        result.innerHTML = `<p>Better luck next time --> THE RIGHT NUMBER IS ${randomNum}</p>`
    }

    input.value = "";
});

//accepting the submit event by pressing enter button.
input.addEventListener("keydown", (e) => {
    if (input.value === "" && e.key == "Enter") {
        result.innerHTML = "<p>Please enter a number before pressing the button</p>";

    } else if (e.key == "Enter") {
        btn.click();
    }
});

// emptying the input field after reloading
window.addEventListener('load', function () {
    input.value = "";
});

//---------------------------------------------------------------------------------------------------
