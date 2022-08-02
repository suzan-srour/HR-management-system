const emp1= {
    FullName:"Ghazi Samer",
    EmployeeID: 0000 ,
    Department:"Administration",
    Level:"Senior",
    imageURL:"" ,
    Salary:000  ,
    uniNum: function(){}

} //Ghazi


const emp2= {
    FullName:"Lana Ali",
    EmployeeID:0000 ,
    Department:"Finance",
    Level:"Senior",
    imageURL:"" ,
    Salary:0000  ,
    uniNum: function(){}
} //lana

const emp3= {
    FullName:"Tamara Ayoub",
    EmployeeID:0000,   
    Department:"Marketing",
    Level:"Senior",
    imageURL:"" ,
    Salary:0000  , 
    uniNum: function(){}
} //tamara  


const emp4= {
    FullName :"Safi Waleed", 
    EmployeeID:0000,
    Department:"Administration",
    Level:"Mid-Senior",
    imageURL:"" ,
    Salary:0000  , 
    uniNum: function(){} ,
} //safi

const emp5=  {
    
    FullName:"Rana Salah",
    EmployeeID:0000,  
    Department:"Development",
    Level:"Junior",
    imageURL:"" ,
    Salary:"0000",
    uniNum: function(){}

 }//Rana 	

    const emp6= {
        FullName:"Hadi Ahmad",
         EmployeeID:0000,
        Department:"Finance",
        Level:"Mid-Senior",
        imageURL:"" ,
        Salary:0000 ,
         uniNum: function(){}
     }//Hadi

     const emp7= {
        FullName:"Omar Zaid",
         EmployeeID:0000,
        Department:"Development",
        Level:"Senior",
        imageURL:"" ,
        Salary:0000 ,
         uniNum: function(){}
        } 
         //Omar






//		Senior
     /////Function UniqNumbers 

     function uniNum() 
        {
            for (let i=0;i<=6;i++)
            this.EmployeeID="100"+i ; 
        } 
///////////Salary
    function CalculatSalary(Level) 
        {
    switch (Level)
    {
    case"Junior" :min=500 ,max=1000 ;
    case"Mid-Senior":min=1000, max=1500;
    case"Senior":min=1500,max=2000; 
    }
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    Salary=(rand*7.5)-rand;
    return this.Salary ;
}

console.log(this.FullName) 
console.log(this.Salary)