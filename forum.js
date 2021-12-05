firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        // go back to the landing page
        location.replace("index.html")
    }else{
        //document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}
