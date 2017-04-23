var bio = {
  "name" : "Kevin Reynolds",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "480-262-8126",
    "email" : "Kevin.T.Reynolds30@gmail.com",
    "github" : "OnlinePseudonym",
    "location" : "Phoenix"
  },
  "welcomeMessage" : "Welcome to my life",
  "skills" : [
    "JS", "HTML", "CSS", "Python"
  ],
  "biopic" : "images/kevin.jpg",
  "display":function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $(".flex-box").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $(".flex-box").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $(".flex-box").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(".flex-box").append(formattedLocation);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++){
      formattedSkill = HTMLskills.replace("%data%",bio.skills[indexCount]);
      $("#skills").append(formattedSkill);
    }
  }
};

var work = {
  "jobs":[
    {
      "employer":"Florencia",
      "title":"Kitchen Manager",
      "dates":"November 1999 - present",
      "location":"Phoenix, AZ",
      "description": "Worked with a team to meet constantly changing goals and deadlines, provided customer service solutions as problems arouse, and effictively communicated the desires of staff and customers."
    },
    {
      "employer":"Tempe Abrassives",
      "title":"Customer Service",
      "dates":"March 2008-August 2009",
      "location":"Tempe, AZ",
      "description": "Customer service, deliveries, accounting, inside sales."
    }
  ],
  "display":function(){
    for(var indexCount = 0;indexCount < work.jobs.length;indexCount++){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
      var formattedEmployerTitle = formattedEmployer + "-" + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var education = {
  "schools": [
    {
      "name":"Desert Vista High School",
      "location":"Phoenix, AZ",
      "degree":"High School Diploma",
      "majors":["Gen ED"],
      "dates":"Sept, 1999 - May, 2004",
      "url":"http://www.tempeunion.org/desertvista"
    }
  ],
  "onlineCourses": [
    {
      "title":"Intro to Computer Science",
      "school":"Udacity",
      "dates":"Feb, 2017",
      "url":"https://www.udacity.com/course/intro-to-computer-science--cs101"
    },
    {
      "title":"Intro to Programming Nanodegree",
      "school":"Udacity",
      "dates":"Feb, 2017",
      "url":"https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
      "title":"Frontend Web Developer Nanodegree",
      "school":"Udacity",
      "dates":"Feb, 2017 - Present",
      "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display":function(){
    for(var indexCount = 0; indexCount < education.schools.length; indexCount++){
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[indexCount].name);
      var formattedSchoolURL = formattedSchoolName.replace("#", education.schools[indexCount].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
      $(".education-entry:last").append(formattedSchoolURL + formattedSchoolDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      for(var majorIndexCount = 0; majorIndexCount < education.schools[indexCount].majors.length; majorIndexCount++){
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);
        $(".education-entry:last").append(formattedSchoolMajors);
      }
    }
    if(education.onlineCourses){
      $("#education").append(HTMLonlineClasses);
    }
    for(var onlineIndexCount = 0; onlineIndexCount < education.onlineCourses.length; onlineIndexCount++){
      $("#education").append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineIndexCount].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineIndexCount].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineIndexCount].dates);
      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineIndexCount].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
};

var projects = {
  "projects":[
    {
      "title":"Favorite Movies Website",
      "dates":"March 2017",
      "description":"A simple website listing a few of my favorite movies, displaying a trailer if you click on the box art and offering a link to reviews.",
      "images":[
        "images/fresh_tomatoes_1.jpg","images/fresh_tomatoes_2.jpg"
      ]
    },
    {
      "title":"Portfolio Website",
      "dates":"April 2017",
      "description":"A streamlined portfolio showcasing some recent projects.",
      "images":[
        "images/...jpg","images/...jpg"
      ]
    }
  ],
  "display":function() {
    for (var indexCount = 0; indexCount < projects.projects.length; indexCount++){
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title);
      $(".project-entry:last").append(formattedProjectTitle);

      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
      $(".project-entry:last").append(formattedProjectDates);

      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
      $(".project-entry:last").append(formattedProjectDescription);

      for (var imageIndexCount = 0; imageIndexCount < projects.projects[indexCount].images.length; imageIndexCount++){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount].images[imageIndexCount]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}

bio.display();
work.display();
education.display();
projects.display();
