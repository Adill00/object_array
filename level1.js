//PART 1

const studentProfile = {
    name: 'Adil',
    age: 19,
    course: 'React Native',
    hobbies: ['Xengel', 'Karting', 'Traveling']
  };
  
  console.log('evvelki studentProfile:', studentProfile);
  
  //delete istifadesi
  delete studentProfile.course;
  
  console.log('deyisilmis studentProfile:', studentProfile);
  
//PART 2
  
const { name: studentName, age, ...rest } = studentProfile;
  

console.log('Destructured name:', studentName);
console.log('Destructured age:', age);
console.log('qalan basqalari:', rest);
  
//PART 3

const grades = [18, 15, 20, 12, 17];

console.log('birinci deyer:', grades[0]);

console.log('ikinci deyer:', grades[1]);

//PART 4

const additionalInfo = {
    address: 'Yasamal, Baki',
    phoneNumber: '55 552 55 33'
};


  // 'studentProfile' ve 'additionalInfo' birlesdirmek (spread islederek)
const completeProfile = { ...studentProfile, ...additionalInfo };

console.log('tam Profil:', completeProfile);