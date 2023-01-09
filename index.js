var input=document.getElementById('input');
var temp;
function change(){
    var ele=document.querySelector('input').value;
    console.log(ele)
    ele1=ele.split('')
    
    var b=ele1.every((e)=>{
        
        if(e=='1' || e=='0' || e=='+'){
            return true;
        }
    })
    if(b==false){
        alert('need to enter only 1 or 0')
        temp=""
        input.value=temp;
    }
    else{
        temp=ele1.join('')
    }
    
    input.value=temp;
    console.log(temp)
}
function clearAll(){
    input.value="";
    console.log('clear')
}
function del(){
    
   temp=temp.slice(0, -1);
    input.value=temp;
}
function changezero(){
    temp=input.value+='0';
}
function changeone(){
    temp=input.value+='1';
}
function binaryToDecimal(){
    var bina = parseInt(temp, 2);
    temp="";
    input.value=bina;
    
}
function binaryToHexa(){
    var hexa = parseInt(temp, 2).toString(16).toUpperCase();
    temp="";
    input.value=hexa;
}
function binaryToOctal(){
    var octa = parseInt(temp, 2).toString(8).toUpperCase();
    temp="";
    console.log(octa)
    input.value=octa;
}
function operation(e){
    if(e=='add'){
        temp=input.value+'+'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("+"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var sum = x + y;
        
        input.value=(sum.toString(2));
                  }
    }
    else if(e=='sub'){
        temp=input.value+'-'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("-"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var sub = x - y;
        
        input.value=(sub.toString(2));
                
    }
        
    }
    else if(e=='mul'){
        temp=input.value+'*'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("*"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var mul = x * y;
        
        input.value=(mul.toString(2));
                
    }
        
    }
    else if(e=='div'){
        temp=input.value+'/'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("/"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var div = x / y;
        
        input.value=(div.toString(2));
                
    }
        
    }
    else if(e=='and'){
        temp=input.value+'&'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("&"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var or1 = x & y;
        
        input.value=(or1.toString(2));
    }}
    else if(e=='or'){
        temp=input.value+'|'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("|"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var div = x | y;
        
        input.value=(div.toString(2));
                
    }   
    }


}
function randomBinary(){
    function randomDigit() {
        return Math.floor(Math.random() * Math.floor(2));
      }
        let binary = "";
        for(let i = 0; i < 6; ++i) {
          binary += randomDigit();
        }
        console.log(binary);
        input.value=binary;
        temp=binary;
      }
function leftbinary(){

    let n=input.value.length;
                string=input.value.slice(n-1)+input.value.slice(0,n-1);
              input.value=string;
}
function rightbinary(){
    let n=input.value.length;
    string=input.value.slice(1,n)+input.value.slice(0,1);
  input.value=string;
}


//weather
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];
let site = 'https://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=d0ac0b02eb3f727ee5ab0a7c005e6a54';
const iTag = document.querySelector('.ico');

fetch(site)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector('#temperature').innerHTML = (data.main.temp-273.5).toFixed(0);
        document.querySelector('#city').innerHTML =data.name;
        document.querySelector('#day').innerHTML =day;
        document.querySelector('#date').innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        document.querySelector('.windspeed').innerHTML =data.wind.speed;
        document.querySelector('.humidity').innerHTML = data.main.humidity;
        document.querySelector('.pressure').innerHTML = data.main.pressure;
        document.querySelector('.sunrise-time').innerHTML = data.sys.sunrise;
        document.querySelector('.sunset-time').innerHTML = data.sys.sunset;
        document.querySelector('#weather-status').innerHTML = data.weather[0].main;
        if(data.weather[0].main == 'Sunny'){
            console.log(data.weather[0].main);
            iTag.innerHTML = '<i class="fa fa-sun"></i>';
        }
        else if(data.weather[0].main == 'Clouds'){
            iTag.innerHTML = '<i class="fa fa-cloud"></i>';
        }
    else if(data.weather[0].main == 'Clear'){
            iTag.innerHTML = '<i class="fa fa-sun"></i>';
        }
    });
