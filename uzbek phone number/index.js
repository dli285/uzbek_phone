let phoneInput = document.querySelector('.input')

phoneInput = addEventListener('input', function(event){
    let testingExpression = /^\d+$/

    if (testingExpression.test(event.target.value)){
        if ( event.target.classList.contains('error'))
            event.target.classList.remove('error')
    }else{
        event.target.classList.add('error')
    }
})
   
