firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        // can change it to the page you want to log out to.
        location.replace("login.html")
    }else{
        //document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}
