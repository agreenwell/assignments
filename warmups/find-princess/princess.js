var player = {
    name: "Jimmy John",
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function(namePicked) {
        this.name = namePicked;
    },
    gotHit: function() {
        
        switch(this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
                break;
            default:
                break;
        }   
    },
    gotPowerup: function() {
        
        switch(this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                break;
            default:
                break;
        }   
    },
    gameActive: true,
    addCoin: function() {
        this.totalCoins++;
    },
    print: function() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nStar: ${this.star}`)
    }
}

player.setName("Mario");
player.print();
player.addCoin();
player.addCoin();
player.addCoin();
player.gotPowerup();
player.gotPowerup();
