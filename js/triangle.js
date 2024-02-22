
document.getElementById('triangle-calculate').addEventListener('click', function(){
    const baseInput = document.getElementById('base-input');
    const BaseInputString = baseInput.value;
    const NewBaseInput = parseFloat(BaseInputString);
    baseInput.value = '';
    //  console.log(NewBaseInput);

    const heightInput = document.getElementById('height-input');
    const heightInputString = heightInput.value;
    const NewHeightInput = parseFloat(heightInputString);
    //  console.log( NewHeightInput);
    heightInput.value = '';

    const calculateValue = 0.5 * NewBaseInput * NewHeightInput;
    
   
    const finalOutput= document.getElementById('calculate-value-show');
    const finalOutputString = finalOutput.value;
    const NewFinalOutput = parseFloat(finalOutputString);
    // console.log(NewFinalOutput);
    finalOutput.innerText = calculateValue;
   

})

