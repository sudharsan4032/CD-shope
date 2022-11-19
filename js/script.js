var count = 0;
        var btn = document.getElementById("btn");
        var disp = document.getElementById("display");
  
        btn.onclick = function () {
            count++;
            disp.innerHTML = count;
        }

function logclicked(){
    alert('Logged in Success!')
    document.getElementById("cancelbtn").click();
}
function registerclicked(){
    document.getElementById("logbtn").innerHTML="Register Now";
    document.getElementById("regbtn").innerHTML="Login"
}