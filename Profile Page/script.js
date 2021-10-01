var about = document.getElementsByClassName("about")[0];
var post = document.getElementsByClassName("posts")[0];
var friend = document.getElementsByClassName("friends")[0];
var saved = document.getElementsByClassName("saved")[0];
var current = about;
function onscr(i){
    current.classList.add("dis");
    if(i==1){
        about.classList.remove("dis");
        current = about;
    }
    else if(i==2){
        post.classList.remove("dis");
        current = post;
    }
    else if(i==3){
        friend.classList.remove("dis");
        current = friend;
    }
    else{
        saved.classList.remove("dis");
        current = saved;
    }
}

function change(){
    var myname = document.getElementById('myname').value;
    var usern = document.getElementById('usern').value;
    var bios = document.getElementById('bios').value;
    var cont = document.getElementById('cont').value;
    var lik = document.getElementById('lik').value;
    document.getElementById('newbio').innerHTML = bios;
    document.getElementById('newcont').innerHTML = cont;
    document.getElementById('newun').innerHTML = usern;
    document.getElementById('newlikes').innerHTML = lik;
    document.getElementById('newname').innerHTML = myname;

}
