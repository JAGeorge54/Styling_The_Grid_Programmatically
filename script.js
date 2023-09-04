function move() {
    
    for(i = 1; i <= 12; i++) {
        let number = '';
        number = 's' + i;
        let element = document.getElementById(number);
        element.classList.add('on')
    }

}
