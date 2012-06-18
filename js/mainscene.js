(function(ns) {
    ns.MainScene = tm.createClass({
        superClass: tm.app.Scene,

        init: function(){
            this.superInit();
            userData.score = 0;

            this.number = [];
            this.operator = 0;
            this.answer = 0;

            // ラベル
            this.fromJSON({
                children: [
                    {
                        type: "Label",
                        name: "fomulaLabel",
                        x   : 240,
                        y   : 80,
                        width: 480,
                        height: 40,
                        text: userData.touchTotalCount,
                        align: "center",
                        fontSize: 48
                    },
                    {
                        type: "Label",
                        name: "answerLabel",
                        x   : 240,
                        y   : 120,
                        width: 480,
                        height: 40,
                        text: userData.time,
                        align: "center",
                        fontSize: 48
                    }
                ]
            });

            this.initFomula();
            this.setLabel();
            
            var self = this;
            var correctButton = tm.app.iPhoneButton(160, 120, "black");
            correctButton.setPosition(120,640);
            correctButton.label.text = "Title";
            this.addChild(correctButton);
            correctButton.onpointingstart = function() {
                self.checkResult(0);
            };
            var missButton = tm.app.iPhoneButton(160, 120, "black");
            missButton.setPosition(360,640);
            missButton.label.text = "Title";
            this.addChild(missButton);
            missButton.onpointingstart = function() {
                self.checkResult(1);
            };
        },

        update: function(){
        },

        initNumber: function(){
            this.number[0] = Math.rand(0,99);
            this.number[1] = Math.rand(0,99);
        },

        initFomula: function(){
            this.initNumber();
            this.operator = Math.rand(0,4);
            this.answer = this.getUncertainResult(this.number[0], this.number[1], this.operator);
        },

        setLabel: function(){
            this.fomulaLabel.text = this.getFomulaString(this.number[0], this.number[1], this.operator);
            this.answerLabel.text = this.answer;
            console.log(this.number[0] + " " + this.operator + " " + this.number[1], this.getResult(this.number[0], this.number[1], this.operator), this.answer);
        },
        
        checkResult: function(answer){            
            var result = 0;
            if(this.answer == this.getResult(this.number[0], this.number[1], this.operator)){ result = 0; }
            else{ result = 1; }
            
            if(answer == result){
                console.log("Success", "\n");
                userData.score += 100;
            }
            else{
                console.log("MissTake", "\n");
                userData.score -= 100;
            }
            this.initFomula();
            this.setLabel();
        },

        getResult: function(num1, num2, operator){
            switch(operator){
                case 0:
                    return num1 + num2;
                    break;
                case 1:
                    return num1 - num2;
                    break;
                case 2:
                    return num1 * num2;
                    break;
                case 3:
                    return num1 % num2;
                    break;
                case 4:
                    return Math.floor(num1 / num2);
                    break;
                default:
                    return 0;
            }
        },
        
        getUncertainResult: function(num1, num2, operator){
            var rnd = Math.rand(0,1);
            var result = this.getResult(num1, num2, operator);
            if( rnd == 0) return result;
    
            rnd = Math.rand(0,1);
    
            switch(rnd){
                case 0:
                    result += this.getAdjustmentEvenAndOdd(result);
                    break;
                case 1:
                    if(Math.rand(0,1) == 0) result+=10;
                    else result-=10;
                    break;
            }
            
            return result;
        },

        getAdjustmentEvenAndOdd: function(num){
            var tmp = Math.rand(0,3);
            if(num % 2 == 0){
                ++tmp;
                tmp*=2;
                if(Math.rand(0,1) == 0) tmp *= -1;
            }
            else{
                tmp *= 2 + 1;
                if(Math.rand(0,1) == 0) tmp *= -1;
            }
            return tmp;
        },
        
        getFomulaString: function(num1, num2, operator){
            var ope = this.getOperatorString(operator);
            console.log(ope);
            switch(operator){
                case 0:
                case 1:
                case 2:
                case 4:
                    return num1 + " " + ope + " " + num2 + " = ?";
                    break;
                case 3:
                    return num1 + " ÷ " + num2 + " = " + Math.floor(num1 / num2) + " … ?";
                    break;
                default:
                    return 0;
            }
        },
        
        getOperatorString: function(operator){
            switch(operator){
                case 0:
                    return "+";
                    break;
                case 1:
                    return "-";
                    break;
                case 2:
                    return "×";
                    break;
                case 3:
                    return "…";
                    break;
                case 4:
                    return "÷";
                    break;
                default:
                    return 0;
            }
        },

        // ポーズ画面 : 別タブへ切り替わった時 / Tabキーを押した時
        onblur: function() {
            app.pushScene(PauseScene(this.bgm));
        }
    });
})(window);