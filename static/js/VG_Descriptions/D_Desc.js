d3.select("#UZI2").on("click", LUV2)
d3.select("#FIONA_APPLE").on("click", FETCH)
d3.select("#D_Desc").on("click", close)


var info = d3.select("#D_Desc")


function close() {
    var info = d3.select("#D_Desc")

    info.html('')
    console.log('Close')
}

function FETCH(){

    close()
    var info = d3.select("#D_Desc")

console.log('Fetch The Bolt Cutters')

info.html(`<p>Fiona Apple</p>
<p>Fetch The Bolt Cutters</p>


<p>I'll admit, one reason, a somewhat significant reason, that I dislike this album is because everyone (most notably Pitchfork) 
is giving it a perfect score. This album wasn't written for me and I obviously can't speak for everyone 
(as many have clearly had a very positive experience), but this is my music blog, so here are my thoughts.</p>

<p>I struggle to find how this album is musically compelling. Pitchfork heralded it as "unbound, a wild symphony of
the everyday, an unyielding masterpiece." This hints at the album's unconventional DIY production. Fiona bangs on the
piano for melodies, bangs on the walls of her house for percussion, and solicits barks from her five dogs (each of whom
get writing credits on the album) for texture. As a dude who unironically enjoys very weird music from the likes
of 100 Gecs and Iglooghost...I'm fine with it. Let the chef cook.</p>

<p>Yet out of the oven we get a bunch of repetitive, honky tonk slogans; the biggest example being on "Relay". There are
some decent musical passages mixed in, but none that evolve into a particularly great song. The opening track
"I Want You To Love Me" seemed like it was about to stick the landing before the final 20 seconds of the song
sonically devolved into what I can only describe as dolphin sex.</p>

<p>That in itself shouldn't be a total deal breaker. Even past 10/10s like Kendrick Lamar's "To Pimp A Butterfly" and 
Kanye West's
"My Beautiful Dark Twisted Fantasy" have their fair share of quirky and crude moments (see: 'For Free' and 'Blame
Game Skit'). However, "Fetch The Bolt Cutters" doesn't have a particularly genius concept or narrative to trick the
listener into thinking that these quirks serve a higher purpose.</p>

<p>And to stop dancing around the elephant in the room, much of the themes of "Fetch The Bolt Cutters" are feminist,
with Fiona describing as a goal of the album to "not [let] men pit us against eachother." I don't
have any comment the legitimacy of those themes or on feminism as a whole. Fiona's songs and pain feel genuine. 
To reiterate; my criticisms are about the honky tonk and dolphin sex sounds.
Yet while it doesn't bother me that the album has feminist content, it does bother me that enjoyment of the album seems
contingent on the listener going all-in on the narrative.</p>

<p>Fiona has some witty one-liners, my favorite being on the song 'Shameika' when she swankily states 
"I wasn't afraid of the bullies, and that just made the bullies worse." That's a bar! There's also a gut punch on "For Her" 
which is kind of something. Yet, I don't find the choruses on 'Shameika,' 'Under The Table,' or 'Relay' as profound as
other people seem to be finding them. Maybe there's some deep satire going over my head.</p>

<p>I would liken this to when Childish Gambino's 'This is America' won Record of the Year at the Grammys. Sure, it
was attached to the music video of the year and carried a significant political message. However, on its own, the song
is an average trap song with an average gospel choir in the background and most of the raps don't even rhyme. If your
stance on the issue (in this case, gun control) switches from "strongly agree" to "mildly agree", does 'This Is America'
even make your top 20 songs that year?</p>

<p>Many people find this album to be very empowering, and that's great. "Fetch The Bolt Cutters" is obviously not for me. 
I am also certainly guilty of loving and highly rating
niche albums that aren't palatable to the average listener. However,
I don't see a musical case for this album to be a 7/10, much less a 10/10. (Note: This album reminds me Montana Roberts'
2019 album "Coin Coin Chapter Four: Memphis" which takes a similar level of sonic risks but brings back a much greater musical 
return imo.)</p>

<p>The album itself doesn't trigger me. It's a piece of art that I have a subjectively negative view of.
What triggers me is when the music media's supposedly objective gatekeepers 
(*cough* Pitchfork - "The Most 
Trusted Voice In Music") inflate grades because an album or song reinforces
their preferred message. At least they're becoming consistently predictable.</p>

</p>
<p>Favorite Tracks: 
<ol>
<li>Cosmonauts</li>
<li>Ladies</li>
</ol></p>

   </p><button id="Close">CLOSE</button>`
)

}


function LUV2(){

    close()
    var info = d3.select("#D_Desc")

console.log('Lil Uzi 2')

info.html(`<p>Lil Uzi Vert</p>
<p>LUV vs. The World 2</p>


<p>This album doesn't do anything for me. At least Eternal Atake had 
interesting atmospheric qualities. This feels like a bunch of random one-offs.
There are times like "Moon Relate" where I think the song is going to be a banger and
then the song just turns into random riffing.</p>

<p>Favorite Tracks: 
<ol>
<li>Moon Relate??</li>
</ol></p>

   </p><button id="Close">CLOSE</button>`
)

}