var age = prompt('Cклько вам лет?')

if (age < 18) {
    alert('Вы ещё молоды. Вам надо учиться')
} else if(age < 50) {
    alert('Вам надо работать')
} else if(age < 60) {
    alert('Вам скоро на пеньсию')
} else if(age < 150) {
    alert('Вs пеньсионер')
} else {
    alert('Что-то пошло не так')
}