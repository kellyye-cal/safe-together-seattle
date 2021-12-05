firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        // go back to the landing page
        location.replace("index.html")
    }else{
        
    }
})


function logout(){
    firebase.auth().signOut()
}
