 document.querySelector('#sports').addEventListener('click', function(event){
    console.log(event.target.getAttribute('id')  + ' is clicked');

    let change = event.target;
    if(change.matches('li')){
        change.style.backgroundColor = 'red';
        change.style.color = 'white';
    }
})
/*
ami kintu nicher code golo uporo functin er modde rakthe cheyeche but kaj korteche na, abar sports ke ekta vaiable er modde rakthe cheyeche tao kaj korteche na, shudo niche rakle kaj kore

color gulo vinno korte cheyeche toa kar kortheche na. 
link FreeCodeCamp.org
*/ 
let sports = document.querySelector('#sports');
let li = document.createElement('li');
li.innerText = 'Badminton';
li.setAttribute('id', 'banminton');
sports.appendChild(li);

