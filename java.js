 document.querySelector('#sports').addEventListener('click', function(event){
    console.log(event.target.getAttribute('id')  + ' is clicked');

    let change = event.target;
    if(change.matches('li')){
        change.style.backgroundColor = 'red';
        change.style.color = 'white';
    }
})
let sports = document.querySelector('#sports');
let li = document.createElement('li');
li.innerText = 'Badminton';
li.setAttribute('id', 'banminton');
sports.appendChild(li);

