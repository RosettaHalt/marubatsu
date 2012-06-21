(function(ns){
        
    var UI_DATA = {
        LABELS: {
            children: [
                {
                    type:"Label",name:"scoreLabel",
                    x:240,y:360,width:480,fillStyle:"white",
                    text:"dammy",fontSize:48,align:"center"
                }
            ]
        }
    }
    
    ns.EndScene = tm.createClass({
        superClass: tm.app.Scene,
    
        init: function(){
            this.superInit();
            
            // ラベル
            this.fromJSON(UI_DATA.LABELS);
            this.scoreLabel.text = "score : "+userData.score;
            
            // ツイートボタン
            var msg = tm.social.Twitter.createURL({
                type: "tweet",
                text: "Score : {0}\n ◯×早計算！ ".format(userData.score),
                hashtags: "marubatsukeisan,tmlibjs",
                url: "http://bit.ly/MLxNTp",
            });
            var tweetButton = tm.app.iPhoneButton(120, 60, "black");
            tweetButton.setPosition(app.width/2, 480);
            tweetButton.label.text = "Tweet";
            this.addChild(tweetButton);
            tweetButton.onpointingstart = function(){
                window.open(msg, "_self");
            };
        },
    
        update: function(){
            if( app.pointing.getPointingEnd() == true ){
                
                this.addChild( tm.fade.FadeOut(
                    app.width, app.height, "#000", 1000, function(){
                        app.replaceScene(TitleScene());
                    })
                );
            }
        },

        // ポーズ画面 : 別タブへ切り替わった時 / Tabキーを押した時
        onblur: function(){
            app.pushScene(PauseScene());
        }
    });
})(window);