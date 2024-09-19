const display = document.getElementById('show');
const buttons = document.querySelectorAll('.calc form input[type="button"]');
let str = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;
        if (value === '=') {
            try {
                str = eval(str);
            } catch (error) {
                str = 'Error';
            }
        } else if (value === 'AC') {
            str = '';
        } else if (value === 'DE') {
            str = str.slice(0, -1);
        } else {
            str += value;
        }
        display.value = str;
    });
});
