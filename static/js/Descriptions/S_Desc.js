d3.select("#FUTURE_NOSTALGIA").on("click", dua_lipa)
d3.select("#THE_STROKES").on("click", the_strokes)
d3.select("#S_Desc").on("click", close)
// d3.select("#About").on("click", about)
// d3.select("#About_Desc").on("click", close2)

// var info = d3.select("#S_Desc")


function close() {
    var info = d3.select("#S_Desc")

    info.html('')
    console.log('Close')
}

function dua_lipa(){

    close()
    var info = d3.select("#S_Desc")

console.log('Dua Lipa - Future Nostalgia')

info.html(`<p>Dua Lipa</p>
<p>Future Nostalgia</p>

<p>I'd like to think that over the years that I've become a "Poptimist" - a hipster that believes
that pop music can be good. I'd also like to
think that Pop music has gotten a lot more creative and inventive in the past few years.
In a genre where labels are machine-learning formulas algorithms to create hits
for the least common denominator, you worry that pop music is more focused on the end result
(selling records and topping the charts) as opposed to the quality of the end product.</p>

<p>Dua Lipa's 'Future Nostalgia' is formulaic, but in a way that closely studies
what makes pop music great as opposed to blindly following the algorithm. Take the single 'Physical'
for instance. It sounds like the beat from Britney Spears' 'Toxic' mixed with an anthemic chorus
that sounds like Lady Gaga, all while paying homage to Olivia Newton-John's 80's original hit. 
It's nothing really new, but 'Future Nostalgia' just feels 10x more refreshing than any other 
pop album on the market.</p>

<p>It doesn't hurt that the production BUMPS. Whether it's the turbocharged bass on
'Physical' or the frozen-in-time Darth Vaderesque strings on 'Love Again,' every production design
choice feels deliberate.</p>

<p>Unfortunately, a lot of songs ('Pretty Please' and 'Good In Bed' especially) would benefit
tremendously if the hook was 20% better. So many songs are oh so close to being great which is my 
only real frustration with the album.</p>

<p>Overall, 'Future Nostalgia' isn't the greatest album of all time, but I am a fan.</p>

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

function the_strokes(){

    close()
    var info = d3.select("#S_Desc")

console.log('The Strokes - The New Abnormal')

info.html(`<p>The Strokes</p>
<p>The New Abnormal</p>


<p>I am very late to the Strokes/Julian Casablancas party. I started paying attention when Julian Casablancas
(the former, now current lead singer of The Strokes) and his edgier rock band called The Voidz released their
2018 album 'Virtue'. I was struck by Julian's charismatic vocal delivery and the band's penchant for creating
epic vocal and instrumental moments on the album. I was sold.</p>

   <p>Fast forward to now, with Julian back with the chill vibes of The Strokes, we have a little more adventurous
   version of that classic Strokes sound. In short, imagine The Strokes, but with Julian often using his voice in a
   soaring, echo-y manner á la The Killers at the end of "All These Things That I've Done".</p>

<p>Often, people might make fun of Radiohead fans for eating up every moan and mumble that lead singer
    Thom Yorke utters on the mic. While it's a hyperbolic statement, that's where I'm at with Julian Casablancas.
    You can have a nice Strokes backdrop with Julian riffing his heart away and I'm sold. That recipe works for me.</p>

    <p>I personally struggle with rating any type of chill rock music. I can't find glaring flaws in the way that I find
    them easier to spot in a hip-hop or pop album. It all sounds pretty good to me. That said, I'm loving this Strokes
    record and hopefully you might too.</p>

        <p>Favorite Tracks:</p>

   <ol>
       <li>Selfless</li>
       <li>The Adults Are Talking</li>
       <li>Ode To The Mets</li>
   </ol>

   </p><button id="Close">CLOSE</button>`
)

}