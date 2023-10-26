let resume = {
Name:"Sudharshan m",
Address:"3/32,Pudhu Kudisai 6th Street, Ganesh Nagar, Pudukkottai",
phoneNo:+91-8870165831,
// ----------------------------------------------------------------- 
OBJECTIVE:"Seeking for a work environment to enhance my skills, experience and space for updating my knowledge and utilise them for organization and personal growth to the best of my ability.",
// -----------------------------------------------------------------
EDUCATION:[
{
 HIGHERSTUDY:{Institution:"J.J College of Arts andScience (Autonomous),Pudukkottai",COURSE:"B.Sc INFORMATION TECHNOLOGY",UNIVERSITY:"Bharathidasan University",PERCENTAGE:"77.35%"},
 HIGHERSECONDARYEDUCATION:{Institution:"S.E.T VIDYA DEVI",COURSE:"COMPUTER SCIENCE",BOARD:"HSC",PERCENTAGE:"54%"},
 SECONDARYEDUCATION:{Institution:"JAYARANI MATRICULATION ",COURSE:"STATE BOARD",BOARD:"SSLC",PERCENTAGE:"77.35%"}
}
],
SKILLSET:[{
    ProgrammingLanguageKnown:"Core Java",
    QueryLanguageKnown:"Microsoft SQL Server"
}],
CERTIFICATION:"JCI INDIA National Level Talent Search Examination Certification",
AREAOFINTEREST:"Software Development",
CO_CURRICULARACTIVITIES:"Helped team as a Goal Keeper to got Runner Up in Football match in college intramural tournaments /n Participated in Marathon Race in the year of 2015",
HOBBIESINTEREST:"Intermediate in Foot Ball,  Intermediate in Hand Ball",
LANGUAGESKNOWN:"Tamil,English"
}

// for in
for(let keys in resume)
{
    console.log(keys,resume[keys]);
}
// for each
Object.keys(resume).forEach(key => {
    console.log(key, resume[key]);
  });

  // for of 
  for (let value of Object.values(resume)) {
    console.log(value);
}