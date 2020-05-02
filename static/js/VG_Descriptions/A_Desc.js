

d3.select("#HORIZON_ZERO_DAWN").on("click", hzd)
d3.select("#A_Desc").on("click", close)
d3.select("#SHADOW").on("click", shadow)
d3.select("#DEAD_CELLS").on("click", dc)
d3.select("#HOLLOW_KNIGHT").on("click", hk)
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

function dc(){

    close()
    var info = d3.select("#A_Desc")

console.log('Dead Cells')

info.html(`<p>Dead Cells</p>
<p>Mac</p>
<p>Play Time: 250+ hours</p>


<p>Dead Cells review coming soon.</p>

   </p><button id="Close">CLOSE</button>`
)

}


function about(){

    close2()
    var info = d3.select("#About_Desc")

console.log('About')

info.html(`<h4>Last year I made a mid-year <a href="https://postgradpalabras.wordpress.com/2019/07/19/the-mid-year-aoty-tier-list-part-2/">Album of the Year Tier List.</a> 
It was a long, arduous process in which I had to dig deep into my brain to search for how
I felt about an album that I had listened to several months prior. I wanted to do an end-of-year
update to the list, but it was just too big of an undertaking (In short: 1. 1000 Gecs, 2. Juice WRLD 
3. Billie Eilish, the Lana album was aight.) </br></br>
I want to make this a living, breathing document that I add to whenever I have an opinion on an
album. Think something like the Constituation, but people actually respect it and only my grandma
reads it.
</br></br>
I do not claim to be the <a href="https://www.youtube.com/user/theneedledrop">Internet's Busiest 
Music Nerd.</a> Some of these albums I'm just going to listen to once. I may crap on your
favorite album. I will be inconsistent. I may rate Billie Eilish too high (except I didn't and can
mathematically prove
that her album was better than Ariana Grande's album last year). It's nothing personal. Let me know if
you have any thoughts. I plan to keep adding to this page and possibly making more interactive
features depending on how much react.js I learn. Check it out!
</h4>

   <center></p><button id="Close">CLOSE</button></center>`
)

}



