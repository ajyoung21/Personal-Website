d3.select("#SUPERSTAR").on("click", superstar)
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
of Kali Uchi's "Isolation" (kind of a slight but "Isolation" was strong A-Tier material).</p>

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