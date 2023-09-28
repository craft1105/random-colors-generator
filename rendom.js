let randnum = () =>{
    let randomnum= Math.floor(Math.random()*16777215);
    let randomcode = "#" + randomnum.toString(16);
   document.body.style.backgroundColor = randomcode;
   document.getElementById('text').innerHTML= "Color Number :" + randomcode;
    

}
document.getElementById("btn").addEventListener(
    "click"
    ,randnum);


randnum();

