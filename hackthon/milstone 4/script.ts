const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;


form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    //fetch input values 

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const career = (document.getElementById('career-obj') as HTMLInputElement).value
    const cartificate = (document.getElementById('certifcate') as HTMLInputElement).value

    const education = (document.getElementById('education') as HTMLInputElement).value
    const experince = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


    //profile pic code 
    let profilePicHTML = '';
    const file = profilePicInput.files?.[0];


    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgDataURL = e.target?.result as string;
            profilePicHTML = `<img src="${imgDataURL}" alt ="Profile Picture" class="profile-img">`;

            const resumeHTML = `
        <div class="resume-container">
            <div class="left-section">
                ${profilePicHTML}
                <section id="objective">
                    <h3 class="heading2">Career Objective</h3>
                    <p> <span contenteditable="true">${career}</span></p>
                </section>
                <section id="certification">
                    <h3 class="heading">Certification</h3>
                    <p><span contenteditable="true">${cartificate}</span></p>
                </section>
            </div>
            
            <div class="right-section">
                <h1></h1>

                <section id="personal-info">
                    <h3>Personal Information</h3>
                    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
                    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
                    <p><b>Mobile: </b><span contenteditable="true">${phone}</span></p>
                </section>
                <section id="education">
                    <h3>Education</h3>
                    <p><span contenteditable="true">${education}</span></p>
                </section>
                <section id="work-experience">
                    <h3>Work Experience</h3>
                    <p><span contenteditable="true">${experince}</span></p>
                </section>
                <section id="skills">
                    <h3>Skills</h3>
                    <p><span contenteditable="true">${skills}</span></p>
                </section>
            </div>
        </div>
        `;

            resumeDisplayElement.innerHTML = resumeHTML;

        };
        reader.readAsDataURL(file);
    } else {

        const resumeHTML = `
        <h2 ><b><span contenteditable="true">${name}</b></span></h2>  
    <h3> Personal Information</h3>
    <p> <b> Name: </b><span contenteditable="true">${name}</span></p>
    <p> <b> Email: </b><span contenteditable="true">${email}</span></p>
    <p> <b> Mobile No: </b><span contenteditable="true">${phone}</span></p>
    
    <h3>Career objective</h3>
    <p> <span contenteditable="true">${career}</span></p>
    
    <h3>Certification</h3>
    <p> <span contenteditable="true">${cartificate}</span></p>

    
    <h3>Education </h3>
    <p> <span contenteditable="true">${education}</span></p>

    <h3>Work Experience </h3>
    <p> <span contenteditable="true">${experince}</span></p>
        
    <h3>Skills </h3>
    <p> <span contenteditable="true">${skills}</span></p>
        `;
        resumeDisplayElement.innerHTML = resumeHTML
    };
});
