d3.select("#SUPERSTAR").on("click", superstar)
d3.select("#JAYELECTRONICA").on("click", jayelec)
d3.select("#B_Desc").on("click", close)


var info = d3.select("#B_Desc")


function close() {
    var info = d3.select("#B_Desc")

    info.html('')
    console.log('Close')
}


function superstar(){

    close()
    var info = d3.select("#B_Desc")

console.log('Superstar - Caroline Rose')

info.html(`<p>Caroline Rose</p>
<p>Superstar</p>


<p>This is going to sound really pretentious, but I recently joined a vinyl of the month club
which is a subscription service where you get a special, exclusive vinyl picked and sent to you
(it's a long story). I found out I was getting this album as my March pick and I was
really about to revolt and demand my money back. </p>

<p>Anyways, one night I was doing laundry and rather than listen to the 100 Gecs album for the
950th time, I gave this a spin and I was pleasantly surprised. </p>

<p>"Superstar" is a dream pop record with bouncy synth production. Think a poor man's version
of Kali Uchis' "Isolation" (kind of a slight but "Isolation" was strong A-Tier material).</p>

<p>Is "Superstar" going to win Album of the Year? Of course not. But if you're looking for a
vibey pop album during the quarantine and you're out of new music, give this a shot.</p>


        <p>Favorite Tracks:</p>

   <ol>
       <li>Freak Like Me</li>
       <li>Got To Go My Own Way</li>
       <li>I Took A Ride</li>
   </ol>

   </p><button id="Close">CLOSE</button>`
)

}




function jayelec(){

    close()
    var info = d3.select("#B_Desc")

console.log('A Written Testimony - Jay Electronica')

info.html(`<p>Jay Electronica (and Jay-Z)</p>
<p>A Written Testimony</p>


<p>After ten years of silence and anticipation, Jay Electronica finally releases his debut album,
a collaboration with Jay-Z based on their shared 'Nation of Islam' religious beliefs.
A-Tier rapping with a few E-Tier flaws. I probably won't listen to it enough to form much of
an opinion of the lyrical content, but here's my first impression: this album has A-Tier rapping
with some baffling E-Tier flaws.</p>

<p>I'll admit, as a Jay-Z skeptic, I've never understood the hype. The only Jay-Z project that
I had ever listened front-to-back was 'Magna Carta Holy Grail', which umm, wasn't great. But he
sounds really good on here! And Jay Electronica keeps up! And the (very faint) Travis Scott feature is good!
Yay! A good rap album!</p>

<p>Except there are a couple songs that literally just have a minute of blank space at the end.
Jay-Z stops rapping on "Universal Soldier" at 2:35, and the instrumental loops on and on and on
and on and on until the song ends at 4:18. ONE HUNDRED AND THREE SECONDS. I can literally go to
the bathroom, check on my Bitcoin, send a text and wash my hands for twenty seconds and come back
and the song would still be going. And that's not even the song called "The Neverending Story."

<p>My other problem is that they have this random "kids cheering" sound effect that is played multiple
times over the course of the album that make the album sound like it was produced in Microsoft Paint.
I don't get it. These two problems would've taken 10 seconds to fix and I'm baffled that that they
weren't in the 10 years Jay Electronica had to fix them.</p>

<p>Overall, I want to promote good hip-hop on my tier list, and I think "A Written Testimony" is
just that. However, you just have to turn a blind eye to some annoying missteps.</p>


        <p>Favorite Tracks:</p>

   <ol>
       <li>A.P.I.D.T.A.</li>
       <li>The Blinding (feat. Travis Scott)</li>
       <li>Flux Capacitator</li>
   </ol>

   </p><button id="Close">CLOSE</button>`
)

}