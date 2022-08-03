var counter=999 ;

/*const emp1= {
    FullName:"Ghazi Samer",
    EmployeeID: counter ,
    Department:"Administration",
    Level:"Senior",
    imageURL:"/pic/man.jpg" ,
    Salary:0  ,     
    uniNum: function(counter){ 
      this.EmployeeID=counter+1 ;
      ++counter;} ,

  getRandomSalary:function () { 
    let Salary=Math.floor(Math.random() *(2000-1500)+1500);
    let netSalary=Salary-(Salary*.075);
    this.Salary=netSalary;
   // console.log("Employee Salary"+Salary);
   // console.log("Net Tax is "+netSalary);
  }
  
} //Ghazi

emp1.uniNum(counter) ;
emp1.getRandomSalary();
console.log("Employee Name ---->",emp1.FullName) ;
console.log("Employee ID Number---->",emp1.EmployeeID) ;
console.log("Employee Salary---->",emp1.Salary) ;
*/

        const allUsers=[]; //array
        counter=999;
        function User(nameValue,idValue,departmentValue,levelValue,imagValue,salaryValue) 
    
        {
         this.FullName=nameValue ;
         this.EmployeeID=idValue ;
         this.Department=departmentValue ;
         this.Level=levelValue;
         this.imageURL =imagValue;
         this.Salary=salaryValue; 
        
         uniNum=function(counter){ 
         this.EmployeeID=counter+1 ;
          ++counter;} ;
         
          getRandomSalary=function(){ 
          let Salary=Math.floor(Math.random() *(2000-1500)+1500);
          let netSalary=Salary-(Salary*.075);
          this.Salary=netSalary;
          console.log("Employee Salary"+Salary);
        } 
          allUsers.push(this); /////////////////////////////////////////////////////////////////each obj we creat will be pushed to the array 

        }//constuctor 

        document.write("<h1>Welcome To Our Management System</h1><br> <p>Hi hope you see it usefull</p>")


       User.prototype.print=function(){
       console.log(`${this.FullName} :${this.Department} :${ this.getRandomSalary}`)  ;
       document.write(`${this.FullName} :${this.Department} :${ this.getRandomSalary}`) ;}  /////////////////////// using prototype 
      


      let Ghazi=new User("Ghazi Samer","0000","Administration","Senior","./pic/man.jpg","0") ;//1

      let Lana =new User("Lana Ali","0000","Finance","Senior","./pic/woman.jpg","0") ;//2

      let Tamara=new User("Tamara Ayoub","0000","Marketing","Senior","./pic/woman.jpg","0") ;//3

      let Safi=new User("Safi Waleed","0000","Administration","Mid-Senior","./pic/man.jpg","0") ;//4

      let Rana=new User("Rana Salah","0000","Development","Junior","./pic/woman.jpg","0") ;//5

      let Hadi=new User("Hadi Ahmad","0000","Finance","Mid-Senior","./pic/man.jpg","0") ;//6
    
      let Omar= new User("Omar Zaid","0000","Development","Senior","./pic/man.jpg","0") ;//7

    console.log(allUsers); 
     Ghazi.print() ;
     Lana.print() ;
     Tamara.print() ;
     Safi.print() ;
     Rana.print() ;
     Hadi.print();
     Omar.print();



