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


<p>I just know that this is F-Tier but I haven't gotten around to listening to it. "Yummy"
is the worst and most annoying song that I've heard this year and I would like to socially
distance as far away from it as possible.</p>

<p>Favorite Tracks: 
<ol>
<li>Anything but Yummy</li>
</ol></p>

   </p><button id="Close">CLOSE</button>`
)

}