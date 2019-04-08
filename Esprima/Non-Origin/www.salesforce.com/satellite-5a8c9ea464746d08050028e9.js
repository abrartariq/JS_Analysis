_satellite.pushAsyncScript(function(event, target, $variables){
      try {
        s.loadModule("Media");
        s.Media.autoTrack = false;
        s.Media.trackMilestones = "25,50,75,100";
        s.Media.playerName = "YouTube no-flash player";
        s.Media.segmentByMilestones = false;
        s.Media.trackUsingContextData = true;
        s.Media.contextDataMapping = {
            "a.media.name": "eVar7,prop7",
            "a.media.timePlayed": "event71",
            "a.media.view": "event7",
            "a.media.milestones": {
                25: "event67",
                50: "event68",
                75: "event69",
                100: "event70"
            }
        }
    } catch (a) {}
});
