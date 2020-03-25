d3.select("#changes").on("click", changes)
d3.select("#E_Desc").on("click", close)


var info = d3.select("#E_Desc")


function close() {
    var info = d3.select("#E_Desc")

    info.html('')
    console.log('Close')
}


function changes(){

    close()
    var info = d3.select("#E_Desc")

console.log('Changes-Justin_Bieber')

info.html(`<p>Justin Bieber</p>
<p>Changes</p>

<p>*Full disclosure: I've only listened through the track with the Lil Dicky feature. You could
say that I haven't listened to it enough. You could say that I've listened to too much.*</p>

<p>You remember when Chance came out with 'The Big Day' and it was bad and then there was
that <a href="https://www.youtube.com/watch?v=TQcGnEhciNY">I love my wife</a> meme? Well, 
Justin Bieber REALLY loves his wife. Almost to the extent that this album isn't for anyone else.
</p>

<p>This isn't F-Tier. That spot in hell is reserved for the truly baffling masterpieces of
Kid Cudi's 'Speedin' Bullet 2 Heaven' and Logic's 'Confessions of a Dangerous Mind'. This album
is decently produced and decently sung. It's just very drab.
</p>

<p>It also has the two worst songs that I've heard this year. Going in, I was bracing for my least
favorite song of the year, 'Yummy.' But I wasn't expecting the lifeless, sappy 'Intentions' 
to take the mantle. Is this really what his wife wants? "Hey Hailey! I wrote you a half-baked
song about monogamy. I got Quavo on it! *cough cough* Ahem... 'Shout-out to your mom and dad
for makin' you.' (Actual lyrics)" 
</p>

<p>If the album wasn't cheesy enough, we haven't even hit the Lil Dicky feature.
It wasn't terrible. I appreciated the Patrick Beverly shout-out. So there's that.</p>

<p>While 'Changes' is bad, it's not memorably bad enough to make it to F-Tier. My condolences,
Mr. Bieber.</p>


<p>Favorite Tracks: 
<ol>
<li>Anything but 'Intentions'</li>
<li>Anything but 'Yummy'</li>
<li>The Clever feature was kinda nice.</li>
</ol></p>

   </p><button id="Close">CLOSE</button>`
)

}