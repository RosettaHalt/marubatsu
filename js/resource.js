// リソースの読み込み
tm.preload(function() {
    tm.sound.SoundManager.add("decide", "sound/se/decide.wav");
    tm.sound.SoundManager.add("touch", "sound/se/touch.wav");
    tm.sound.SoundManager.add("clear", "sound/se/clear.wav");
});

var REVERSE_WAVE_IMAGE = (function(){
    var c = tm.graphics.Canvas();
    c.width = c.height = 256;
    c.setTransformCenter();
    c.setColorStyle("white", "rgb({0}, {1}, {2})".format(Math.rand(100, 255),Math.rand(100, 255),Math.rand(100, 255)));
    c.strokeCircle(0, 0, 48);

    return c;
})();