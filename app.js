var counter=999 ;

const emp1= {
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

const emp2={
    FullName:"Lana Ali",
    EmployeeID:0000 ,
    Department:"Finance",
    Level:"Senior",
    imageURL:"/pic/woman.jpg" ,
    Salary:0000  ,
  

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

} //lana


emp2.uniNum(counter) ;
emp2.getRandomSalary();

console.log("Employee Name ---->",emp2.FullName) ;
console.log("Employee ID Number---->",emp2.EmployeeID) ;
console.log("Employee Salary---->",emp2.Salary) ;


const emp3= {
    FullName:"Tamara Ayoub",
    EmployeeID:0000,   
    Department:"Marketing",
    Level:"Senior",
    imageURL: "/pic/woman.jpg",
    Salary:0000  , 
    uniNum: function(counter){ 
        this.EmployeeID=counter+1 ;
        ++counter;} ,
    
      getRandomSalary:function () { 
        let Salary=Math.floor(Math.random() *(2000-1500)+1500);
        let netSalary=Salary-(Salary*.075);
        this.Salary=netSalary;
        //console.log("Employee Salary"+Salary);
       // console.log("Net Tax is "+netSalary);
      }

} //tamara  

emp3.uniNum(counter) ;
emp3.getRandomSalary();
console.log("Employee Name ---->",emp3.FullName) ;
console.log("Employee ID Number---->",emp3.EmployeeID) ;
console.log("Employee Salary---->",emp3.Salary) ;



const emp4= {
    FullName :"Safi Waleed", 
    EmployeeID:0000,
    Department:"Administration",
    Level:"Mid-Senior",
    imageURL:"/pic/man.jpg" ,
    Salary:0 , 

    uniNum: function(counter){ 
        this.EmployeeID=counter+1 ;
        ++counter;} ,
    
      getRandomSalary:function () { 
        let Salary=Math.floor(Math.random() *(1500-1000)+1000);
        let netSalary=Salary-(Salary*.075);
        this.Salary=netSalary;
        //console.log("Employee Salary"+Salary);
        //console.log("Net Tax is "+netSalary);
      }
} //safi
emp4.uniNum(counter) ;
emp4.getRandomSalary();
console.log("Employee Name ---->",emp4.FullName) ;
console.log("Employee ID Number---->",emp4.EmployeeID) ;
console.log("Employee Salary---->",emp4.Salary) ;




const emp5={
    
    FullName:"Rana Salah",
    EmployeeID:0000,  
    Department:"Development",
    Level:"Junior",
    imageURL:"/pic/woman.jpg",
    Salary:"0000",

    uniNum: function(counter){ 
        this.EmployeeID=counter+1 ;
        ++counter;} ,
    
      getRandomSalary:function () { 
        let Salary=Math.floor(Math.random() *(1000-500)+500);
        let netSalary=Salary-(Salary*.075);
        this.Salary=netSalary;
       // console.log("Employee Salary"+Salary);
       // console.log("Net Tax is "+netSalary);
      }
 }//Rana 	
 
emp5.uniNum(counter) ;
emp5.getRandomSalary();
console.log("Employee Name ---->",emp5.FullName) ;
console.log("Employee ID Number---->",emp5.EmployeeID) ;
console.log("Employee Salary---->",emp5.Salary) ;


    const emp6= {
        FullName:"Hadi Ahmad",
         EmployeeID:0000,
        Department:"Finance",
        Level:"Mid-Senior",
        imageURL:"/pic/man.jpg" ,
        Salary:0000 ,

        uniNum: function(counter){ 
            this.EmployeeID=counter+1 ;
            ++counter;} ,
        
          getRandomSalary:function () { 
            let Salary=Math.floor(Math.random() *(1500-1000)+1000);
            let netSalary=Salary-(Salary*.075);
            this.Salary=netSalary;
           // console.log("Employee Salary"+Salary);
           // console.log("Net Tax is "+netSalary);
          }
     }//Hadi  

     emp6.uniNum(counter) ;
     emp6.getRandomSalary();
     console.log("Employee Name ---->",emp6.FullName) ;
     console.log("Employee ID Number---->",emp6.EmployeeID) ;
     console.log("Employee Salary---->",emp6.Salary) ;
     

     const emp7= {
        FullName:"Omar Zaid",
         EmployeeID:0000,
        Department:"Development",
        Level:"Senior",
        imageURL:"/pic/man.jpg" ,
        Salary:0000 ,
        uniNum:function(counter){ 
        this.EmployeeID=counter+1 ;
         ++counter;} ,
        
          getRandomSalary:function(){ 
            let Salary=Math.floor(Math.random() *(2000-1500)+1500);
            let netSalary=Salary-(Salary*.075);
            this.Salary=netSalary;
            //console.log("Employee Salary"+Salary);
            //console.log("Net Tax is "+netSalary);
          }
        } 
         //Omar
         
        emp7.uniNum(counter) ;
        emp7.getRandomSalary();   
        console.log("Employee Name ---->",emp7.FullName) ;
        console.log("Employee ID Number---->",emp7.EmployeeID) ;
        console.log("Employee Salary---->",emp7.Salary) ;
     