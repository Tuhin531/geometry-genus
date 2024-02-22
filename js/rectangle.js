document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const widthInput = document.getElementById('width-input');
    const widthInputString = widthInput.value;
    const NewWidthInput = parseFloat(widthInputString);
    widthInput.value = '';
    //  console.log(NewWidthInput);

    const lengthInput = document.getElementById('length-input');
    const lengthInputString = lengthInput.value;
    const NewLengthInput = parseFloat(lengthInputString);
    //  console.log( NewLengthInput);
    lengthInput.value = '';

    const calculateValue = NewWidthInput * NewLengthInput;
    
   
    const finalOutput= document.getElementById('calculate-value-rectangle');
    const finalOutputString = finalOutput.value;
    const NewFinalOutput = parseFloat(finalOutputString);
    // console.log(NewFinalOutput);
    finalOutput.innerText = calculateValue;
   

})

