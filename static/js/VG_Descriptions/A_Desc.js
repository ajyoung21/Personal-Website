

d3.select("#HORIZON_ZERO_DAWN").on("click", hzd)
d3.select("#A_Desc").on("click", close)
d3.select("#SHADOW").on("click", shadow)
d3.select("#DEAD_CELLS").on("click", dc)
d3.select("#HOLLOW_KNIGHT").on("click", hk)
d3.select("#GHOST").on("click", ghost)
d3.select("#About").on("click", about)
d3.select("#About_Desc").on("click", close2)

var info = d3.select("#A_Desc")

var info = d3.select("#A_Desc")


function close() {
    var info = d3.select("#A_Desc")

    info.html('')
    console.log('Close')
}


function hzd(){

    close()
    var info = d3.select("#A_Desc")

console.log('Horizon Zero Dawn')

info.html(`<p>Horizon Zero Dawn</p>
<p>PS4</p>


<p>The 2010s produced so many 3rd-person, stealth-action, "Assassin's Creed"-like games. You have games like the
Batman series, the Shadow of Mordor series, Spiderman, not to mention Ubisoft's Assassin Creed games that they
seem to be pumping out every year. Of all of the games in that genre, I think Horizon Zero Dawn is the cream of
crop.</p>

<p>Horizon Zero Dawn's premise is pretty ridiculous. Essentially, robotic dinosaurs have taken over the earth 
and you need to take them all down by yourself with only a spear and a bow at your disposal. Even more ridiculous 
are its action sequences. You may be lurking through grasslands trying to fend off invisible robotic sabertooth tigers
at one point, only to come to a valley with lava-spewing robotic pterodactyls patrolling the skies. Enemy designs
are fun and require different weapons and different types of arrows to take them down.</p>

<p>My ultimate Horizon Zero Dawn moment was being trapped in a large room with a "Thunder Jaw," Horizon's massive
apex predator. The absolute rush of unloading every weapon I had as the homie shot LASERS FROM ITS EYES and rockets
off its back stands as possibly my most thrilling gaming encounter of the past decade.</p>

<p>Oh, and the story is pretty good despite its premise. Pretty much everything about this game is really good. If
you want to play a game in the "Assassin's Creed" genre, this is the one.</p>

   </p><button id="Close">CLOSE</button>`
)

}





function close() {
    var info = d3.select("#A_Desc")

    info.html('')
    console.log('Close')
}

function close2() {
    var info = d3.select("#About_Desc")

    info.html('')
    console.log('Close')
}


function hk(){

    close()
    var info = d3.select("#A_Desc")

console.log('Hollow Knight')

info.html(`<p>Hollow Knight</p>
<p>Mac</p>
<p>Playing Time: 53 hours</p>

<p>This is one of the best and most polished indie games that I have ever played. Hollow Knight is an action-packed
2D platformer inspired by the Dark Souls series that benefits greatly from its art direction and its immersive,
gloomy world. All of the different winding passageways in the subterranean Hollownest are brimming with secrets for
the player to discover. Enemy and boss encounters are tense and memorable and force you to learn the enemy's attack
patterns if you are to survive.</p>

<p>That isn't to say that your journey does not face many trials and tribulations. Checkpoints are relatively few
and far between, and dying enables a unique mechanic that forces you to fight back to the spot you were slain and 
capture a ghost or else you will lose all of your money. It's an interesting mechanic that adds real stakes to Hollow
Knight's gameplay loop, yet gets old and feels a little too punitive the longer that you've been playing the game.</p>

<p>If you like difficult games or Metroidvanias, Hollow Knight is a must-play. I only have it behind Dead Cells 
because in practice,
I've played Dead Cells exponentially more.</p>

   </p><button id="Close">CLOSE</button>`
)

}

function shadow(){

    close()
    var info = d3.select("#A_Desc")

console.log('Shadow of Mordor')

info.html(`<p>Shadow of Mordor</p>
<p>PS4</p>

<p>It's weird because I know some people who hate this game. Shadow of Mordor is like a glorious, fattening trip
to a Brazilian steakhouse; you're not getting a ton of variety and the meat may not be high quality, but boy does it
satisfy in the moment.</p>

<p>Sure, the story isn't that great, and the boss battles are underwhelming, but that's like criticizing the salad bar
at Fogo de Chao; that's not what you came to eat. Talion, your character, is the ultimate wraith-ranger badass. Tired
of that archer shooting at you in the distance? Ok, Imma shoot a mystical arrow at him, teleport to where the arrow
lands right behind him and then take care of him with my sword. Don't feel like fighting all of the orcs? Aight, Imma
palm this orc boy in the face and possess him so that he fights the orcs for me. There's nothing quite like possessing
a gigantic troll and riding it camp to camp and having the troll stomp on orc generals all over the place.</p>

<p>Shadow of Mordor takes the formula of a "fun bad" beat-em-up action movie and turns it into a great game. I can't
think of a game that did a better job of giving the people what they want.</p>
   
   <button id="Close">CLOSE</button>`
)

}

function ghost(){

    close()
    var info = d3.select("#A_Desc")

console.log('Ghost of Tsushima')

info.html(`<p>Ghost of Tsushima</p>
<p>PS4</p>

<p>Ghost of Tsushima is an excellent samurai adventure that brings refreshing new ideas to the third-person stealth/action rpg
genre. Of all the games in this genre, Ghost of Tsushima does crowd combat (when you're fighting a bunch of enemies by yourself) 
the best.</p>

<p>Going in, I had grown fatigue from this genre, and I thought that this game was going to do a lot of things that Sekiro: Shadows
Die Twice did better. While Ghost of Tsushima isn't as good, it does forge its own lane with the complexity of its sword combat and
the number of fun tools at your disposal.</p>

<p>Where Ghost of Tsushima falters is in its boss battles/duels. Playing on "Lethal" difficulty, my character got an added damage boost
in exchange for enemies having the ability to down you in one or two strikes. It feels like THE way to play the game, but it also makes
these boss duels rather quick affairs. Either I'm getting wacked in the first 5 seconds or I'm finishing the boss of in 40. While these
fights are tense, and I do have to learn how to counter SOME of their moves, any victory I had seemed to be due to being lucky for
a minute rather than mastering the bosses' moveset.</p>

<p>Still, Ghost's central conflict of choosing whether or not to fight honorably against an overwhelming force of dishonorable Mongols
is compelling. Ghost's vibe and story is refreshing in a genre that is becoming increasingly crowded.</p>
   
   <button id="Close">CLOSE</button>`
)

}

function dc(){

    close()
    var info = d3.select("#A_Desc")

console.log('Dead Cells')

info.html(`<p>Dead Cells</p>
<p>Mac</p>
<p>Play Time: 250+ hours</p>

<p>I've spent 250+ hours playing this game over the years, which is ironic because you can beat Dead Cells in
40 minutes to an hour.</p>

<p>Dead Cells is a tense, high-wire act journeying through randomized dungeons. Every level 
has a quota of enemies, rooms, and loot that give an aura familiarity, with randomized layouts that keep each play
through fresh and dangerous. Your character is glass cannon; carrying enough firepower to fell any enemy in seconds,
but squishy to the point where one major mistake can end your run.</p>

<p>Replayability is the name of the game, in a good and bad way. Usually, you'll die due to one lazy mistake and it'll
suck you in to "just" one more run. Every run, you'll accumulate cells, the eternal currency that you can spend to
upgrade your loot and unlock new weapons. Should you succed and defeat the final boss, you unlock New Game Plus 
(all the way up to New Game Plus x5) with different, deadlier enemies and more handicaps to your character. 
You're only scratching the surface of what the game has to offer.</p>

<p>Even after making it to the top of the mountain (beating the final boss on NG+5), I'm still haven't totally put
it down. Every now and then, boredom will sway me into trekking into yet another quick run, even though it will
probably end in pain. I guess the fleeting promise of a perfect run is too hard to pass up.</p>

   </p><button id="Close">CLOSE</button>`
)

}


function about(){

    close2()
    var info = d3.select("#About_Desc")

console.log('About')

info.html(`<h4>Like in my music list, I have lukewarm takes on video games. These are the video games that I 
have played in the past couple of years. Usually, those games are on PS4, or Steam (Mac or PC). I have chosen
not to include Super Smash Bros (Sm4sh and/or Ultimate) even though I played a ton at college and friends houses
because it just feels like it's a different sport in comparison to these single-player titles. I also didn't include
Kingdom Hearts 1.5, 2.5, and 2.8, as they are mostly compilation remasters of old games.</p>

<p>Have any hot/lukewarm music or video game takes? Message me on Instagram (@alex.young.90) or email me at
ajyoung21@gmail.com</p>

   <center></p><button id="Close">CLOSE</button></center>`
)

}



