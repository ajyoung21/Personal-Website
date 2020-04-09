

d3.select("#UNLOCKED").on("click", unlocked)
d3.select("#A_Desc").on("click", close)
d3.select("#FUTURE_NOSTALGIA").on("click", dua_lipa)

var info = d3.select("#A_Desc")


function close() {
    var info = d3.select("#A_Desc")

    info.html('')
    console.log('Close')
}


function unlocked(){

    close()
    var info = d3.select("#A_Desc")

console.log('UNLOCKED - Denzel Curry')

info.html(`<p>Denzel Curry X Kenny Beats</p>
<p>UNLOCKED</p>


<p>I have season tickets to anything Denzel Curry and he definitely delivered here.
    While Denzel usually raps in a militant,
   triplet flow (flow = the rhythm that you rap your words in), Kenny Beats' swaying, side-to-side, boom-bap 
   production has Denzel adapting with an off-kilter flow that's historically dominated the New
   York scene.</p>

   <p>Kenny does a great job of supplementing any rests that Denzel takes. Whether it's
     Madvillainy-esque skits bookending the project or little vocal modifications here and
     there, Kenny sounds like a live-DJ who knows when to add sound effects and when to
     drop the beat and get the hell out of Denzel's way. </p>

     <p> Although "UNLOCKED" doesn't feature the grand scope and focus that made Denzel's
        2018 album, "TA1300", so good, (How could it? UNLOCKED was made in three days) this
        is the perfect mini-project to tide fans over to whatever's next.</p>

        <p>Favorite Tracks:</p>

   <ol>
       <li>'Cosmic'.m4a</li>
       <li>Pyro (leak 2019)</li>
       <li>DIET_</li>
   </ol>

   </p><button id="Close">CLOSE</button>`
)

}


d3.select("#AFTER_HOURS").on("click", after_hours)
d3.select("#About").on("click", about)
d3.select("#About_Desc").on("click", close2)

var info = d3.select("#A_Desc")


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


function after_hours(){

    close()
    var info = d3.select("#A_Desc")

console.log('The Weeknd - After Hours')

info.html(`<p>The Weeknd</p>
<p>After Hours</p>

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

function dua_lipa(){

    close()
    var info = d3.select("#A_Desc")

console.log('Dua Lipa - Future Nostalgia')

info.html(`<p>Dua Lipa</p>
<p>Future Nostalgia</p>

<p>I'd like to think that over the years that I've become a "Poptimist" - a hipster that believes
that pop music can be good. I'd also like to
think that Pop music has gotten a lot more creative and inventive in the past few years.
In a genre where labels are machine-learning formulas are generating algorithms to create hits
for the least common denominator, you worry that nobody would be willing to risk deviating from
the norm.</p>

<p>Dua Lipa's 'Future Nostalgia' deviates from the norm, but in a way that closely studies
what makes pop music great as opposed to blindly following its formulas. It's a pop album
through and through, with overly dramatic strings and 90% of the songs being about love, but
it just feels 10x more refreshing than any other pop album on the mark.</p>

<p>It doesn't hurt that the production BUMPS. Whether it's the turbocharged plucky strings on
'Physical' or the frozen-in-time Darth Vaderesque strings on 'Love Again,' everything feels
deliberate.</p>

<p>Unfortunately, a lot of songs ('Pretty Please' and 'Good In Bed' especially) would benefit
tremendously if the hook was 20% better. So many songs are so close to being great which is my 
only real
frustration with the album.</p>

<p>Overall, 'Future Nostalgia' isn't the greatest album of all time, but it feels like a total
breath of fresh air. I am a fan.</p>

<p>PS: Idk what it says about me that my favorite songs are 'Physical' and 'Good In Bed.'
Don't read anything into this, Mom.</p>


        <p>Favorite Tracks:</p>

   <ol>
       <li>Physical</li>
       <li>Break My Heart</li>
       <li>Good In Bed</li>
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
