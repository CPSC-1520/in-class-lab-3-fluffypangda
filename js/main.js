// Enter your code below.
const resourcesDiv = document.querySelector('.javascript-resources'); 
const showButton = document.getElementById('show-resources'); 
showButton.addEventListener('click', () => {
resourcesDiv.classList.remove('d-none');
});
resourcesDiv.addEventListener('mouseover', (event) => {
    console.log(event.target); 
    event.target.classList.add('fw-bold'); 
});
resourcesDiv.addEventListener('mouseout', (event) => {
    event.target.classList.remove('fw-bold'); 
});
resourcesDiv.addEventListener('click', (event) => {
    event.target.classList.add('fst-italic'); 
});
