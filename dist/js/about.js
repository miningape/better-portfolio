const subSkills         = document.querySelector('.sub');
const skillBar          = document.querySelector('.lvl');
const theSkills         = subSkills.querySelectorAll('.hidden');

const backendButton     = document.querySelector('.backend');
const frontendButton    = document.querySelector('.frontend');
const generalButton     = document.querySelector('.nw');
const allButton         = document.querySelector('.all');

const sql               = document.querySelector('.sql');
const mongo             = document.querySelector('.mongo');
const express           = document.querySelector('.express');
const node              = document.querySelector('.node');

const html              = document.querySelector('.html');
const sass              = document.querySelector('.sass');

const cpp               = document.querySelector('.cpp');
const java              = document.querySelector('.java');
const pyth              = document.querySelector('.python');
const javas             = document.querySelector('.javasc');

const heading           = document.querySelector('.subh');
const writeup           = document.querySelector('.subt');

let show_backend    = false;
let show_frontend   = false;
let show_general    = false;
let show_skill      = false;
let show_all        = true;

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    console.log(rawFile);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            console.log(rawFile.responseText);
            //return callback(rawFile.responseText);
            //rawFile.send(null);
        }
    }
    
}

theSkills.forEach((skill) => {
    if (skill.classList.contains('hidden')) {
        skill.classList.remove('hidden');

        skill.classList.add('show');

        addClick(skill);
    }
});

function addClick(item) {
    item.addEventListener('click', () => {
        subSkills.querySelectorAll('.box').forEach((box) => {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            }
        });

        item.querySelector('.box').classList.add('selected');

        let info = skillSheet[item.title];
        let skills = skillBar.querySelector('.bars').querySelectorAll('.bar');

        let n = parseInt(info.proficiency);
        heading.innerHTML = "<h4>" + info.header + "</h4>";
        writeup.innerHTML = info.text;

        skills.forEach((skill) => {
             if (skill.classList.contains('lit')) {
                skill.classList.remove('lit');
            }
        });

        for (let i = 0; i < n; i++) {
            skills[i].classList.add('lit');
        }
    });
}

allButton.addEventListener('click', () => {
    if (!show_all) {
        theSkills.forEach((skill) => {
            if (skill.classList.contains('hidden')) {
                skill.classList.remove('hidden');

                skill.classList.add('show');

                addClick(skill);
            }
        });

        document.querySelectorAll('.box').forEach((box) => {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            }
        });

        let boxStyling = allButton.querySelector('.box');
        boxStyling.classList.add('selected');

        show_all = true;
        show_backend = false;
        show_frontend = false;
        show_general = false;
    }
});

generalButton.addEventListener('click', () => {
    if (show_frontend) {
        html.classList.remove('show');
        sass.classList.remove('show');

        html.classList.add('hidden');
        sass.classList.add('hidden');

        show_frontend = false;
    }

    if (show_backend) {
        sql.classList.remove('show');
        mongo.classList.remove('show');
        express.classList.remove('show');
        node.classList.remove('show');

        sql.classList.add('hidden');
        mongo.classList.add('hidden');
        express.classList.add('hidden');
        node.classList.add('hidden');

        show_backend = false;
    }

    if (show_all) {
        theSkills.forEach((skill) => {
            if (skill.classList.contains('show')) {
                skill.classList.remove('show');

                skill.classList.add('hidden');
            }
        });

        show_all = false;
    }

    if (!show_general) {
        cpp.classList.remove('hidden');
        java.classList.remove('hidden');
        pyth.classList.remove('hidden');
        javas.classList.remove('hidden');

        cpp.classList.add('show');
        java.classList.add('show');
        pyth.classList.add('show');
        javas.classList.add('show');

        addClick(cpp);
        addClick(java);
        addClick(pyth);
        addClick(javas);

        document.querySelectorAll('.box').forEach((box) => {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            }
        });

        let boxStyling = generalButton.querySelector('.box');
        boxStyling.classList.add('selected');

        show_general = true;
    }
});

backendButton.addEventListener('click', () => {
    if (show_all) {
        theSkills.forEach((skill) => {
            if (skill.classList.contains('show')) {
                skill.classList.remove('show');

                skill.classList.add('hidden');
            }
        });

        show_all = false;
    }

    if (show_frontend) {
        html.classList.remove('show');
        sass.classList.remove('show');

        html.classList.add('hidden');
        sass.classList.add('hidden');

        show_frontend = false;
    }

    if (show_general) {
        cpp.classList.remove('show');
        java.classList.remove('show');
        pyth.classList.remove('show');
        javas.classList.remove('show');

        cpp.classList.add('hidden');
        java.classList.add('hidden');
        pyth.classList.add('hidden');
        javas.classList.add('hidden');

        show_general = false;
    }

    if (!show_backend) {
        sql.classList.remove('hidden');
        mongo.classList.remove('hidden');
        express.classList.remove('hidden');
        node.classList.remove('hidden');

        sql.classList.add('show');
        mongo.classList.add('show');
        express.classList.add('show');
        node.classList.add('show');

        addClick(sql);
        addClick(mongo);
        addClick(express);
        addClick(node);

        // Show SKill was here'

        document.querySelectorAll('.box').forEach((box) => {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            }
        });

        let boxStyling = backendButton.querySelector('.box');
        boxStyling.classList.add('selected');

        show_backend = true;
    }
});

frontendButton.addEventListener('click', () => {
    if (show_all) {
        theSkills.forEach((skill) => {
            if (skill.classList.contains('show')) {
                skill.classList.remove('show');

                skill.classList.add('hidden');
            }
        });

        show_all = false;
    }

    if (show_backend) {
        sql.classList.remove('show');
        mongo.classList.remove('show');
        express.classList.remove('show');
        node.classList.remove('show');

        sql.classList.add('hidden');
        mongo.classList.add('hidden');
        express.classList.add('hidden');
        node.classList.add('hidden');

        show_backend = false;
    }

    if (show_general) {
        cpp.classList.remove('show');
        java.classList.remove('show');
        pyth.classList.remove('show');
        javas.classList.remove('show');

        cpp.classList.add('hidden');
        java.classList.add('hidden');
        pyth.classList.add('hidden');
        javas.classList.add('hidden');

        show_general = false;
    }

    if (!show_frontend) {
        html.classList.remove('hidden');
        sass.classList.remove('hidden');

        html.classList.add('show');
        sass.classList.add('show');

        addClick(html);
        addClick(sass);

        document.querySelectorAll('.box').forEach((box) => {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            }
        });
        
        let boxStyling = frontendButton.querySelector('.box');
        boxStyling.classList.add('selected');

        show_frontend = true;
    }
});

/*
if (show_skill) {
    skillBar.classList.add('hidden');
    skillBar.classList.remove('show');
    show_skill = false;
}

*/