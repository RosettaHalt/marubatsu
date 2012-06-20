(function(ns) {

    var UI_DATA = {
        LABELS: {
            children: [
                {
                    type:"Label",name:"scoreLabel",
                    x:220,y:360,width:480,fillStyle:"white",
                    text:"Formula Front",fontSize:32,align:"top"
                }
            ]
        }
    }
    
    ns.TitleScene = tm.createClass({
        superClass: tm.app.Scene,
    
        init: function(){
            this.superInit();

            // ラベル
            this.fromJSON(UI_DATA.LABELS);
        },
    
        update: function(){
            if( app.pointing.getPointingEnd() == true ){
                this.addChild( tm.fade.FadeOut(
                    app.width, app.height, "#000", 1000, function() {
                        app.replaceScene(MainScene());
                    })
                );
            }
        },
    
        // ポーズ画面 : 別タブへ切り替わった時 / Tabキーを押した時
        onblur: function() {
            app.pushScene(PauseScene(this.op));
        }
    });
    
})(window);