let ser = document.getElementsByClassName('service')[0]
let men = document.getElementsByClassName('menu')[0]
let fee = document.getElementsByClassName('feed')[0]
let pos = document.getElementsByClassName('post')
let newpos = document.getElementsByClassName('newpost')[0]
let key = 1;
let key2 = 1;
function show(){
    if(key2==1){
        men.classList.remove('hide');
        key2=2;
    }
    else{
        men.classList.add('hide')
        key2=1;
    }
}
function night(){
    if(key==1){
        ser.classList.add('nightmode-service');
        men.classList.add('nightmode-infeed');
        fee.classList.add('nightmode-feed');
        newpos.classList.add('nightmode-infeed');
        newpos.classList.add('night-shadow');
        key = 2;
    }
    else{
        ser.classList.remove('nightmode-service');
        men.classList.remove('nightmode-infeed');
        fee.classList.remove('nightmode-feed');
        newpos.classList.remove('nightmode-infeed');
        newpos.classList.remove('night-shadow');
        key = 1;
    }
    
}
function logout(){
    window.location = "login.html";
}
function chatapp(){
    window.location = "chat/chatmain.html"
}
function openprofile(){
    window.location = "Profile Page/profile.html"
}
