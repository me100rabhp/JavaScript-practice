const form = document.querySelector('form')
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const cato = document.querySelector('#cato')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weighteight}`;
    }else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`;
        if(BMI < 18.6){
            cato.innerHTML = `<span>UNDER Weight${BMI}</span>`;
        }else if(BMI >= 18.6 || BMI < 24.9 ){
            cato.innerHTML = `<span>Normal Weight${BMI}</span>`
        }
        if(BMI >= 24.9){
            cato.innerHTML = `<span>Over Weight${BMI}</span>`
        }
    }
   

});