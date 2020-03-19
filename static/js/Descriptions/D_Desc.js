d3.select("#UZI2").on("click", LUV2)
d3.select("#D_Desc").on("click", close)


var info = d3.select("#D_Desc")


function close() {
    var info = d3.select("#D_Desc")

    info.html('')
    console.log('Close')
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