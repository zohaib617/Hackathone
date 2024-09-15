var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var profilePicInput = document.getElementById('profile-pic');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //fetch input values 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var career = document.getElementById('career-obj').value;
    var cartificate = document.getElementById('certifcate').value;
    var education = document.getElementById('education').value;
    var experince = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //profile pic code 
    var profilePicHTML = '';
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgDataURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicHTML = "<img src=\"".concat(imgDataURL, "\" alt =\"Profile Picture\" class=\"profile-img\">");
            var resumeHTML = "\n        <div class=\"resume-container\">\n            <div class=\"left-section\">\n                ".concat(profilePicHTML, "\n                <section id=\"objective\">\n                    <h3 class=\"heading2\">Career Objective</h3>\n                    <p>").concat(career, "</p>\n                </section>\n                <section id=\"certification\">\n                    <h3 class=\"heading\">Certification</h3>\n                    <p>").concat(cartificate, "</p>\n                </section>\n            </div>\n            \n            <div class=\"right-section\">\n                <h1></h1>\n\n                <section id=\"personal-info\">\n                    <h3>Personal Information</h3>\n                    <p><b>Name: </b>").concat(name, "</p>\n                    <p><b>Email: </b>").concat(email, "</p>\n                    <p><b>Mobile: </b>").concat(phone, "</p>\n                </section>\n                <section id=\"education\">\n                    <h3>Education</h3>\n                    <p>").concat(education, "</p>\n                </section>\n                <section id=\"work-experience\">\n                    <h3>Work Experience</h3>\n                    <p>").concat(experince, "</p>\n                </section>\n                <section id=\"skills\">\n                    <h3>Skills</h3>\n                    <p>").concat(skills, "</p>\n                </section>\n            </div>\n        </div>\n        ");
            resumeDisplayElement.innerHTML = resumeHTML;
        };
        reader.readAsDataURL(file);
    }
    else {
        var resumeHTML = "\n        <h2 ><b>".concat(name, "</b></h2>  \n    <h3> Personal Information</h3>\n    <p> <b> Name: </b>").concat(name, "</p>\n    <p> <b> Email: </b>").concat(email, "</p>\n    <p> <b> Mobile No: </b>").concat(phone, "</p>\n    \n    <h3>Career objective</h3>\n    <p> ").concat(career, "</p>\n    \n    <h3>Certification</h3>\n    <p> ").concat(cartificate, "</p>\n\n    \n    <h3>Education </h3>\n    <p> ").concat(education, "</p>\n\n    <h3>Work Experience </h3>\n    <p> ").concat(experince, "</p>\n        \n    <h3>Skills </h3>\n    <p> ").concat(skills, "</p>\n        ");
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    ;
});
