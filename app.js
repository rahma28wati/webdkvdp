 let next = document.querySelector('.next')
 let prev = document.querySelector('.prev')

 next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide'). appendChild(items[5])
 })

 prev.addEventListerner('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.lenght - 1])// here the Lenght of items = 5
 })