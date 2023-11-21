const today = new Date();


const thisYear = today.getFullYear();


const footer = document.querySelector('footer');


const copyright = document.createElement('p');


const skills = [
    'JavaScript', 'SQL',  'PowerBI'
];


const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');


for (let i = 0; i< skills.length; i++){
    const listItem = document.createElement('li');
    listItem.textContent = skills[i];


    skillsList.appendChild(listItem);
}




copyright.innerHTML = `Oluwadunsin Ogunleye &copy; ${thisYear}`;



footer.appendChild(copyright);
