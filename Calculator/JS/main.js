// Creates an object to keep track of values.
const Calculator = {
    // This will display 0 on the calculator screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    // This checks whether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    // This will hold the operator, we set it to null for now.
    operator: null,
};

// This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // This checks if Wait_Second_Operand is true and sets Display_Value to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // This overwrites Display_Value if the current value is 0; otherwise, it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This section handles decimal points.
function Input_Decimal(dot) {
    // This ensures that accidental clicking of the decimal point doesn't cause bugs in the operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // We are saying that if the Display_Value does not contain a decimal point, we want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}

// This section handles operators.
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);

    // If an operator already exists and Wait_Second_Operand is true, update the operator.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    // If First_Operand is null, set it to the current input value.
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // Perform the calculation and store the result.
        const Perform_Calculation = {
            '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
            '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
            '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
            '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
            '=': (First_Operand, Second_Operand) => Second_Operand,
        };

        let result = Perform_Calculation[operator](First_Operand, Value_of_Input);
        result = Number(result).toFixed(9); // Round to 9 decimal places.
        result = (result * 1).toString(); // Remove trailing zeros.
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// Resets the calculator to its initial state.
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Updates the calculator screen with the current value.
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

// Adds event listeners to the calculator buttons.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // This targets the element that was clicked.
    const { target } = event;
    // If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    // This checks if the key that was clicked on was a number and calls the Input_Digit function.
    Input_Digit(target.value);
    Update_Display();
});