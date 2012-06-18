
tm.main(function(){
    app = tm.app.CanvasApp("#world");
    app.background = "black";
    //app.enableStats();
    app.fitWindow();

    userData = tm.util.DataManager.get("user-data");

    app.replaceScene(TitleScene());

    app.run();
});

