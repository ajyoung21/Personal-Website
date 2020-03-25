d3.select("#AFTER_HOURS").on("click", after_hours)
d3.select("#S_Desc").on("click", close)
d3.select("#About").on("click", about)
d3.select("#About_Desc").on("click", close2)

var info = d3.select("#S_Desc")


function close() {
    var info = d3.select("#S_Desc")

    info.html('')
    console.log('Close')
}

function close2() {
    var info = d3.select("#About_Desc")

    info.html('')
    console.log('Close')
}


function after_hours(){

    close()
    var info = d3.select("#S_Desc")

console.log('The Weeknd - After Hours')

info.html(`<p>The Weeknd</p>
<p>After Hours</p>


<p>**TENTATIVE PLACEMENT - I MAY BUMP DOWN TO A-TIER**</p>

<p>Abel Tesfaye (aka The Weeknd) hasn't ever been my jam. Sure, I'll like select singles like "The Hills" or
"Starboy," but the only time I listened to a Weeknd album front-to-back, (his 2016 album "Starboy")
I wasn't blown away.</p>

<p>While I'm not completely floored with this album, there are some very compelling moments
(Scared to Live and the title track to name a few) that propels this album above anything else 
I've heard this year. The Weeknd has leveled up his sound and songwriting.</p>

<p>The album's biggest misstep is 'Snowchild,' where Abel Tesfaye reverts back to his old sound
and thinking that he can rap. "Stack a couple M's like I'm Shady"? 
"All my diamonds hitting like they Swae Lee"?? "Futuristic sex, give her Philip K Dick"???
Are these really your best BARS?? 
</p>

    <p>Still, 'After Hours' conveys genuine emotion and comes through with some of the best
    musical moments so far this year.</p>


        <p>Favorite Tracks:</p>

   <ol>
       <li>After Hours</li>
       <li>Scared to Live</li>
       <li>Faith</li>
   </ol>

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
