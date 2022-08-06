
        let allUsers=[]; //array
        let Id=999;
        let net=0;
        function User(nameValue,idValue,departmentValue,levelValue,imagValue,salaryValue) 
    
        {
         this.FullName=nameValue ;
         this.EmployeeID=idValue ;
         this.Department=departmentValue ;
         this.Level=levelValue;
         this.imageURL =imagValue;
         this.Salary=salaryValue; 

        this.AddId=function(Id){
          this.EmployeeID=Id;
        };

        this.Salary=function(salary){
          this.Salary=salary;
        };

          allUsers.push(this); /////////////////////////////////////////////////////////////////each obj we creat will be pushed to the array 
           } 
        //constuctor 


        AddId =function()
        {Id=Id+1;
        return Id;}

       salary= function (x){
         if (x=="Senior") 
         { 
          let salary=Math.floor(Math.random() *(2000-1500)+1500);
          let net=salary-(salary*.075);
           return net ; 
         }
         else if (x == "Mid-Senior")
         {
          let salary=Math.floor(Math.random() *(1500-1000)+1000);
          let net=salary-(salary*.075);
           return net ;
          }
         
         else ( x=="Junior")
         {
          let salary=Math.floor(Math.random() *(1000-500)+500);
          let net=salary-(salary*.075);
          return net ;
         }
         
         };




        document.write("<h1>Welcome To Our Management System</h1><br> <p>Hi hope you see it usefull</p>")

       User.prototype.print=function(){
        document.write(`<br>`);
       document.write(
        `Employee Name :  ${this.FullName}`,
         `Department :   ${this.Department} `,
         `Employee Salary   :${ this.Salary}`) ;

         document.write(`<br>`);
      } ;
       
       //document.write(`<img src=${this.imageURL}>`) ;


        /////////////////////// using prototype 
      


      let Ghazi=new User("Ghazi Samer","Administration","Senior","./pic/man.jpg") ;//1
      let Lana =new User("Lana Ali","Finance","Senior","./pic/woman.jpg") ;//2
      let Tamara=new User("Tamara Ayoub","Marketing","Senior","./pic/woman.jpg") ;//3
      let Safi=new User("Safi Waleed","Administration","Mid-Senior","./pic/man.jpg") ;//4
      let Rana=new User("Rana Salah","Development","Junior","./pic/woman.jpg") ;//5
      let Hadi=new User("Hadi Ahmad","Finance","Mid-Senior","./pic/man.jpg") ;//6
      let Omar= new User("Omar Zaid","Development","Senior","./pic/man.jpg") ;//7

    console.log(allUsers); 

     Ghazi.AddId(AddId());
     Lana.AddId(AddId());
     Tamara.AddId(AddId());
     Safi.AddId(AddId()) ;
     Rana.AddId(AddId()) ;
     Hadi.AddId(AddId());
     Omar.AddId(AddId());


     Ghazi.Salary(salary(Ghazi.Level));
     Lana.Salary(salary(Lana.Level));
     Tamara.Salary(salary(Tamara.Level));
     Safi.Salary(salary(Safi.Level));
     Rana.Salary(salary(Rana.Level));
     Hadi.Salary(salary(Hadi.Level)) ;
     Omar.Salary(salary(Omar.Level)) ;


    //document.write( `<p>${this.FullName}: ${this.Department} </p>`) ;
    //document.write(`<img src=${this.imageURL}>`) ;


Ghazi.print();
Lana.print();
Tamara.print();
Safi.print() ;
Rana.print() ;
Hadi.print();
Omar.print();



