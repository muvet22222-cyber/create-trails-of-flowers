player.onChat("run", function () {
    gameplay.setWeather(CLEAR)
    agent.setAssist(PLACE_ON_MOVE, true)
})
player.onTravelled(WALK, function () {
    player.say("we goooo")
})
