const form = document.getElementById('registration-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    form.reset();
  });

function display_students()
{
    const output_container=document.getElementById('output');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const number = document.getElementById('number').value;

    const gender= getgender();
    const skills= getSelectedSkills();

    const box=document.createElement('div');
    box.classList.add('output-container');

    box.innerHTML = `
    
    <div><b>${name}</b></div>
    <div>${gender}</div>
    <div>${email}</div>
    <div>${number}</div>
    <div>${website}</div>
    <div>${skills.join(',')}</div>
    `;

    output_container.appendChild(box);

}

//Returning the value of the skill when it is checked
function getSelectedSkills() {
    const skills = document.getElementsByName('skills');
    const selectedSkills = [];

    skills.forEach(skill => {
      if (skill.checked) {
        selectedSkills.push(skill.value);
      }
    });

    return selectedSkills;
}

//Returning the gender value
function getgender(){
    if(document.getElementById('male').checked){
        var gen=document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked){
        var gen=document.getElementById('female').value;
    }
    return gen;
}