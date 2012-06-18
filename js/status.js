tm.util.DataManager.set("user-data", {
    score: 0
});

/**
 * ステータスのラベル
 */
var StatusLabel = tm.createClass({
    superClass: tm.app.Label,

    init: function(x, y, size){
        this.superInit(128, 128);
        this.x = x;
        this.y = y;
        this.size = size;
        this.text = 0;
        this.align = "end";
        this.baseline = "top";
        this.width = app.width;
    },

    update: function(){
    }
});