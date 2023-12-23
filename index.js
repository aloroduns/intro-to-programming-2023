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

var messageSection = document.getElementById("messages");
var messageList = messageSection.querySelector("ul");
var newMessage = document.createElement("li");

var userLink = document.createElement("a");
userLink.href = "mailto:" + usersEmail;
userLink.textContent = usersName;
newMessage.appendChild(userLink);

var messageSpan = document.createElement("span");
messageSpan.textContent = usersMessage;
newMessage.appendChild(messageSpan);

var removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
removeButton.addEventListener("click", function(){
    var entry = removeButton.parentNode;
    entry.remove();
});
var messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = event.target.userName.value;
    var email = event.target.usersEmail.value;
    var message = event.target.usersMessage.value;
    console.log(name, email, message);
});


copyright.innerHTML = `Oluwadunsin Ogunleye &copy; ${thisYear}`;

footer.appendChild(copyright);
