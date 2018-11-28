//Instructions for the practice quiz are at the link below
//https://docs.google.com/document/d/1H58ENvh4uKmQeU3VnpkYw3ogIGTJ9WlshsieS47SmHE/edit?usp=sharing

const students = [
  //Have at least three "Students" here
  {
    name : "Enrique",
   score : 28,
  },
  {
    name : "dennis",
    score : 60,
  },
  {
    name : "jonathan",
    score : 26,
  }

];

class FinalExam{
  constructor(students){
    /*store the store the students here as a property of the class */
    this.students = students;
    //create a property called extra and set it as the returned value of the giveExtraCredit method here
    this.extraCredit = this.giveExtraCredit();
    //create a property called passers and set it as the returned value of the getPassers method here
    this.passers = this.getPassers();
    //create a property called average and set it as the returned value of the getAverage method here
    this.average = this.getAverage(this.extraCredit.length).toFixed(2);
    console.log(this.average);
  }
  //giveExtraCredit Method
  giveExtraCredit(){
    //use Array.prototype.map on the students property here
    return this.students.map(student =>{
      return student.score + 15;
    });
  }
  //getPassers Method
  getPassers(){
    //use the Array.prototype.filter on the students property here
    return this.students.filter (pass => pass.grade > 59); 
     
  }
  //getAverage Method
  getAverage(length){
    //use the Array.prototype.method on the students property here
    return (
      this.extraCredit.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / length
    );
  }
}

//Create an instance of the FinalExam class here and call it final. Make sure to pass in the students array
const final = new FinalExam(students);

