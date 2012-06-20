tm.util.DataManager.set("user-data", {
    score: 0
});

/**
 * タイマー
 */
var Timer = tm.createClass({
    superClass: tm.app.CanvasElement,

    init: function(limit){
        this.superInit();
        this.x = 0;
        this.y = 320;
        this.width = app.width;
        this.color = "hsla(200, 75%, 50%, 0.90)";
        this.timerSpeed = this.width / limit;
        this.shadowColor = "white";
        this.shadowBlur = 20;
    },

    update: function(){
        this.width -= this.timerSpeed;
    },

    draw: function(canvas) {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, 30);
    },
    
    checkTimeOut: function(){
        if(this.width <= 0){ return true; }
        return false;
    }
});