const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

const skills = ['JavaScript', 'SQL', 'PowerBI'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = skills[i];
    skillsList.appendChild(listItem);
}
window.onload = function() {
var messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = event.target.userName.value;
    var email = event.target.usersEmail.value;
    var message = event.target.usersMessage.value;
    console.log(name, email, message);

    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");
    var newMessage = document.createElement("li");

    var userLink = document.createElement("a");
    userLink.href = "mailto:" + email;
    userLink.textContent = name;
    newMessage.appendChild(userLink);

    var messageSpan = document.createElement("span");
    messageSpan.textContent = message;
    newMessage.appendChild(messageSpan);

    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        var entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);

    var editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.addEventListener("click", function() {
        var entry = editButton.parentNode;
        var newMessage = prompt("Enter new message:");
        if (newMessage) {
            entry.querySelector("span").textContent = newMessage;
        }
    });
    
    
    newMessage.appendChild(editButton);

    messageList.appendChild(newMessage);
});
}

copyright.innerHTML = `Oluwadunsin Ogunleye © ${thisYear}`;
footer.appendChild(copyright);

fetch('https://api.github.com/users/aloroduns/repos')
.then(response => response.json())
.then(repositories => {
    console.log(repositories);

    var projectSection = document.getElementById('projects');
    var projectList = projectSection.querySelector('ul');

    for (var i = 0; i < repositories.length; i++) {
        var project =  document.createElement('li');
        
        var projectLink = document.createElement('a');
        projectLink.href = repositories[i].html_url;
        projectLink.textContent = repositories[i].name;
        project.appendChild(projectLink);

        var description = document.createElement('p');
        description.textContent = repositories[i].description;
        project.appendChild(description);

        var creationDate = document.createElement('p');
        creationDate.textContent = 'Created on' + new Date(repositories[i].created_at).toLocaleDateString();
        project.appendChild(creationDate);
        
        projectList.appendChild(project);
    }
})

.catch(error => console.error('Error:', error));
