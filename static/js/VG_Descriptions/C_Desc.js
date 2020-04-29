d3.select("#FORTNITE").on("click", FN)
d3.select("#RDR2").on("click", RDR2)
d3.select("#BABA").on("click", BABA)
d3.select("#DD").on("click", DD)
d3.select("#C_Desc").on("click", close)


var info = d3.select("#C_Desc")


function close() {
    var info = d3.select("#C_Desc")

    info.html('')
    console.log('Close')
}


function FN(){

    close()
    var info = d3.select("#C_Desc")

console.log('Fortnite')

info.html(`<p>Fortnite</p>
<p>Mac</p>

<p>I've only played about 5 games of Fortnite and I'm already done with it. I had a good time and I won a game against
all odd. I can see 
what made it such a cultural
phenomenon, but I also understand why it's not for me.</p>

<p>First off, Fortnite is clearly made for kids. Everything from the cartoon art direction to the emote dance moves
to the recent Travis Scott concert that happened within the game is geared towards a 10-14 year old audience. I'm not
going to downgrade it for this, but I feel awkward as a 25-year old playing this game.</p>

<p>Yet don't let the tweeny atmosphere distract you from how Fortnite is nuanced, difficult, and unlike anything we've
ever played before. The sheer novelty of being 1 of 100 in a fight-to-the-death Battle Royale raises the stakes higher
than any online gaming experience that I've ever had. The tension you feel in a one-on-one gunfight is hard to match.</p>

<p>However, there are a few major flaws that turn me off from the game. First, there doesn't seem to be any sort of tutorial
to help new players deal with Fortnite's precipitous skill curve. I had no clue how to build anything of substance
when starting out, and only in my later games did I get any utility from spamming a bunch of walls in order to heal.
Second, the map is way too big. Most of the map is rather deserted and even when I wanted to run into a gun fight,
I couldn't find one. So much of my experience was spent running from small deserted town to small deserted town that
I made it into the Top 10 twice almost by accident. Third, each gun fight (at least in my experience playing against
  what I assume to be other beginners) comes of as an extremely awkward affair of jumping around and missing point
  blank shotgun blasts. In the game that I won, there were 3-4 times where I was had, but managed to get away
  due to a comical number of short range misses. Sure, when you do escape with the kill (like the time I sniped
    this guy from only 10 feet away) it can be pretty satisfying, however, these fights usually feel extremely awkward.</p>

    <p>I appreciate Fortnite, and I'm sure these hiccups will disappear if I ever decide to GIT GUD, but it all feels
    like a rabbit hole that I don't want to go down.</p>


   </p><button id="Close">CLOSE</button>`
)

}



function BABA(){

  close()
  var info = d3.select("#C_Desc")

console.log('Baba Is You')

info.html(`<p>Baba Is You</p>
<p>Mac</p>

<p>Baba Is You is a unique, quirky game that lets you play God, but is also hard as hell. It's hard to explain,
but every word in the game is a constructor that you can manipulate to make an impossible level possible. For instance,
you may start with "Baba-Is-You" in which you get to control the white, blobby Baba character, but you may later
manipulate it into "Wall-Is-You", allowing you to move all of the wall blocks in the level. Set up a concurrent 
"Wall-Is-Win" and by the transitive property (Wall=You, Wall=Win -> You=Win), you can complete the level.</p>

<p>Digging deeper in the game, things get infinitely more complicated and every assumption you had going in is broken
one-by-one. Finishing a level is rewarding and makes you feel smart. There is one plot twist around 60% into the game 
that is absolutely mind-blowing and rewarding if you
can get to it.</p>

<p>However, getting to end can be a real pain. As of this writing, I have not finished the true ending of the game
and probably never will. That's because, after a certain point, every level is so difficult that you pretty much need
a guide to get anywhere. If you're someone looking to relax their brain and blow off some steam, this isn't the game
for you.</p>

<p>Despite its masochistic difficulty spike, Baba Is You is enjoyable and one of the smartest games that 
I've ever played. It
a good job of indirectly teaching a basic computer coding mindset. Well worth the price of admission.


 </p><button id="Close">CLOSE</button>`
)

}




function RDR2(){

    close()
    var info = d3.select("#C_Desc")

console.log('RDR2')

info.html(`<p>Red Dead Redemption 2</p>
<p>PS4</p>

<p>This is an excellent story that doesn't exactly translate into being an excellent game. On one hand, it's a slow
burn that really pays off with thrilling set pieces. On the other hand, the pure tedium of the buildup and RockStar
studio's insistence on holding your hand every step is so costly, you wonder if it's even worth it.
</p>

<p>My lowest point came when I had a mission asking me to casually drive a wagon full of people through the countryside.
I'm sure there was some important conversation going on with the characters, but I was so bored that I fell asleep at
the wheel. Lo and behold, I woke up just seconds before my wagon ran into a boulder and exploded on impact, forcing
me to restart the mission. After getting that wake up call, I tried again and AGAIN I was lulled asleep by Arthur
Morgan's dry small talk and AGAIN I crashed the wagon and had to restart. Rather than going to bed, I gave it one last
go and by the grace of God I woke up to find that I had safely navigated to the town in my sleep.</p>

<p>RDR2 has some of the best writing and some of the strongest attention to detail we've ever seen in a video game.
However, its insistence that you appreciate the developers' hard work is akin to forcing a museum guest to read every
single placard in the exhibit. Its 60-hour story feels like watching 'Gone With The Wind' 15 times in a row. It's an
impeccable piece of art, but sacrifices some fun and freedom to get there.</p>



   </p><button id="Close">CLOSE</button>`
)

}




function DD(){

  close()
  var info = d3.select("#C_Desc")

console.log('Darkest Dungeon')

info.html(`<p>Darkest Dungeon</p>
<p>Mac</p>

<p>Darkest Dungeon is a very intriguing, turn-based dungeon crawler with oodles of complexity. You assemble a team
of four different characters, each with a different role, to take on the forces of darkness. Every turn is a high-wire
act of calculation and optimization. Make one sub-optimal move, and your favorite character may die forever.</p>

<p>With that, planning your expedition is just about as important as what you do during it. Questions as 
complex as "Which character combinations will have the best synergies against this enemy type" or as simple as "How
many torches and bandages do I need to bring?" can be the difference between life and death. The fact that
characters can each play multiple rows based upon which of the four party positions they stand in adds another level
of complexity. It's to the point where you almost need a pen and paper to diagram all of the interacting systems.</p>

<p>My main issue with Darkest Dungeon is the grind it takes to get your characters strong enough to fight the highest
level dungeons. The overall loop gets a little tiresome when you're fighting through the same low-level dungeon for
the umpteenth time. The game's permanent death mechanic can be deflating as well. I spend hours crafting the perfect
team to take on the game's final level, only to get them waxed by an almost unfairly difficult enemy squad. The grind
to get back there just wasn't worth it and I put the game down. For a game that's so smart, I wish the developers had 
found ways to keep its core gameplay loop fresh.</p>


 </p><button id="Close">CLOSE</button>`
)

}