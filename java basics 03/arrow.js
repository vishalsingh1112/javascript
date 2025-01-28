const user = {
    username :"vishal",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()
user.username="vish"
user.welcomeMessage()

console.log(this);
