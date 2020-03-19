

d3.select("#UNLOCKED").on("click", unlocked)
d3.select("#A_Desc").on("click", close)


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