d3.select("#RAIN").on("click", rain)
d3.select("#E_Desc").on("click", close)


var info = d3.select("#E_Desc")


function close() {
    var info = d3.select("#E_Desc")

    info.html('')
    console.log('Close')
}


function rain(){

    close()
    var info = d3.select("#E_Desc")

console.log('Risk of Rain')

info.html(`<p>Risk of Rain</p>
<p>Mac</p>

<p>Play Time: 8 Hours</p>

<p>This is somewhat of an unfair placement because this game is meant to played with friends and I played it alone 
because I assume my friends were playing 'Risk of Rain 2' without me (I would've gotten it, but it's PC exclusive and
I can play PC games but it's complicated).</p>

<p>All I remember is that movement is slow, the difficulty is somewhat random given what loot you get, and that I wasn't
fiending to keep playing even after I beat the game twice. It's not Dead Cells, but it was only $4 so I guess it was
a decent return on investment.</p>

   </p><button id="Close">CLOSE</button>`
)

}