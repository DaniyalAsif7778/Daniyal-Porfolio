let skillCard = document.querySelector(".Skills-Card")
let Skills = [
    {

        name: "HTML",
        img: "./Resources/images/html.png",
        progress: 90
    },
    {

        name: "CSS",
        img: "./Resources/images/css.png",
        progress: 70
    }, {

        name: " JS",
        img: "./Resources/images/Tailwind.png",
        progress: 80
    },
    {
        name: "JSAP",
        img: "./Resources/images/gsap.jpg",
        progress: 10,
    }
    ,
    {

        name: "Tailwind",
        img: "./Resources/images/js.png",
        progress: 30
    }, {

        name: "React",
        img: "./Resources/images/React.png",
        progress: 40
    }
]
let cullter = "";
function showSkills() {





    Skills.forEach((skill) => {
        cullter += `<div class="skill">
                        
                        <img src="${skill.img}" alt="" srcset="">
                        <h1>${skill.name}</h1>
                              <div class="progress-bar">
                            <div class="progress"  style="width:${skill.progress}%">

                                <div class="number">
                                    <h1 class="skill-level">${skill.progress}</h1>
                                </div>

                            </div>
                        </div>
                    </div> `

    })
    skillCard.innerHTML = cullter;
    console.log(skillCard);
    console.log(Skills);

}

export { showSkills }