       
       console.log(document) ;
       const body=document.getElementsByTagName('body') ;
       const h=document.getElementsByTagName('h1') ;
       const div=document.getElementsByClassName("card");

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




    ///////////////////////////////////////////////////
  
       User.prototype.print=function(){
        const pEl=document.createElement('p')
        pEl.textContent =`Employee Name :${this.FullName}`;
        pEl.style.color="white";
       body[0].appendChild(pEl) ;

       const imgEl1=document.createElement("img") ;
       imgEl1.src=this.imageURL ;
       imgEl1.alt=this.FullName ;
       body[0].appendChild(imgEl1) ;
       
       }
       //div.appendChild(imgEl1);
       //div.appendChild(pEl);

      let Ghazi=new User("Ghazi Samer","Administration","Senior", "assets/Ghazi.jpg",0) ;//1
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


/*

const divEl=document.getElementsByClassName("container");


const imgEl2=document.createElement("img") ;
imgEl2.src="pic/assets/Ghazi.jpg" ;
imgEl2.alt= "Ghazi picture" ;
divEl[0].appendChild(imgEl2) ;


const imgEl3=document.createElement("img") ;
imgEl3.src="./assets/Tamara.jpg" ;
imgEl3.alt="Tamara picture" ;
divEl[2].appendChild(imgEl3) ; 


const imgEl4=document.createElement("img") ;
imgEl4.src="./assets/Safi.jpg" ;
imgEl4.alt="Safi picture" ;
divEl[3].appendChild(imgEl4) ;



const imgEl5=document.createElement("img") ;
imgEl5.src="./assets/Safi.jpg" ;
imgEl5.alt="Safi picture" ;
divEl[4].appendChild(imgEl5) ;*/