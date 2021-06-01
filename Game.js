class Game{
    constructor(){}
    display(){}

    // the getState function
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data) => {
            gameState = data.val();
        });
    }
    
    // the updateState function
    update(state){
        database.ref("/").update({
            gameState : state
        });
    }

    // start funciton
    start(){
        // creating the new form
        if(gameState === 0){
            form = new Form();
            // displaying the form
            form.display;
        }
    }
}