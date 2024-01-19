//PART 1

const employeeDetails = {
    fullName: 'Adil Aliyev',
    position: 'Software Engineer',
    yearsOfExperience: 3,
    skills: ['JavaScript', 'Python', 'Java'],
    contact: {
      email: 'a.aliyev@company.com',
      phone: '55 566 55 66'
    }
};
  

delete employeeDetails.contact.email;
  

employeeDetails.department = 'Insan resurslari';
  
console.log(employeeDetails);

  
//PART 2

const { fullName: employeeName, position, contact, ...rest } = employeeDetails;

console.log('name:', employeeName);

console.log('position:', position);

console.log('contact:', contact);

console.log('qalan basqalari:', rest);


//PART 3

const projectScores = [
    { projectId: 32, score: 40 },
    { projectId: 21, score: 47 },
    { projectId: 13, score: 53 },
];

//birinci project destructure olunduqdan sonra,elementleri console.log ile yazilir
const firstProject = projectScores[0];
console.log('Project ID:', firstProject.projectId);
console.log('Score:', firstProject.score);


//PART 4

const personalInfo = {
    homeAddress: 'Yasamal, Baki',
    emergencyContact: '(51) 434 22 26',
    maritalStatus: 'Single'
  };
  
  //'employeeDetails' ve 'personalInfo' birlesdirilib 'completeEmployeeProfile' alinir  (spread islederek)
const completeEmployeeProfile = { ...employeeDetails, ...personalInfo };
  

console.log(completeEmployeeProfile);
