
(function(ns) {
    ns.TitleScene = tm.createClass({
        superClass: tm.app.Scene,
    
        init: function(){
            this.superInit();
            
            var label = tm.app.Label(32,32);
            label.x = app.width/3;
            label.y = app.height/2;
            label.text = "Formula Front";
            label.text.align = "end";
            label.width = app.width
            this.addChild(label);
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
    
        // ポーズ画面 : 別タブへ切り替わった時 / Ttbキーを押した時
        onblur: function() {
            app.pushScene(PauseScene(this.op));
        }
    });
    
})(window);