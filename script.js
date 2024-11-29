const form = document.getElementById('form');


form.addEventListener('submit', function(event)  {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = (weight /(height * height)).toFixed(2);
    const value= document.getElementById('value');
    let description ='';

    if (bmi < 18.5) {
        description = 'Você está abaixo do Peso';
    }else if( bmi >= 18.6 && bmi <= 24.9){
        description = 'Você está no peso ideal';

    }else if( bmi >= 25.0 && bmi <= 29.9){
        description = 'Você está com sobrepeso';

    }else if( bmi >= 30.0 && bmi <= 39.99){
        description = 'Você está obeso';

    } else {
        description = 'Você está em um estado de obesidade grave';
    }           
    value.textContent=bmi;
    document.getElementById('description').textContent = description;
});  
    function resetIMC() {
        document.getElementById('value').textContent = '';
        document.getElementById('description').textContent = '';
    };
    
    
