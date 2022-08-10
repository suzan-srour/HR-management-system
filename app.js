       
       console.log(document) ;
       const body=document.getElementsByTagName('body') ;
       const h=document.getElementsByTagName('h1') ;
       //const cards=document.querySelector(".cards");

        let allUsers=[]; //array
        let Id=999;
        let net=0;
        function User(nameValue,idValue,departmentValue,levelValue,imagValue,salaryValue) 
    
        {
         this.FullName=nameValue ;
         this.EmployeeID=idValue ;
         this.Department=departmentValue ;
         this.Level=levelValue;
         this.imageURL=imagValue;
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




    ///////////////////////////////////////////////////render fun 
  
       User.prototype.print=function(){
      

        const imgE1 = document.createElement('img');
        imgE1.src= this.imageURL;
        imgE1.alt= this.FullName;
      
      
        const pE1 = document.createElement('p');
        pE1.textContent= `Name  :${this.FullName} - ID:${this.EmployeeID}   `;
        const pE2 = document.createElement('p');
        pE2.textContent= `Department :${this.Department} - Level: ${this.Level} `;
        const pE3 = document.createElement('p');
        pE3.textContent= `Salary :${this.Salary} `;
        
        let divE=document.createElement("div");
        divE.classList.add("card");
        divE.classList.add("flex");
        divE.appendChild(imgE1);
        divE.appendChild(pE1);
        divE.appendChild(pE2);
        divE.appendChild(pE3);
      
      body[0].appendChild(divE);
       }


      let Ghazi=new User("Ghazi Samer","Administration","Senior","pic/Ghazi.jpg",0) ;//1
      let Lana =new User("Lana Ali","Finance","Senior","assets/Lana.jpg",0) ;//2
      let Tamara=new User("Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg",0) ;//3
      let Safi=new User("Safi Waleed","Administration","Mid-Senior","assets/Safi.jpg",0) ;//4
      let Rana=new User("Rana Salah","Development","Junior","assets/Rana.jpg",0) ;//5
      let Hadi=new User("Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg",0) ;//6
      let Omar= new User("Omar Zaid","Development","Senior","assets/Omar.jpg",0) ;//7

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


Ghazi.print();
Lana.print();
Tamara.print();
Safi.print() ;
Rana.print() ;
Hadi.print();
Omar.print();
