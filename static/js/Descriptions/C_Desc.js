d3.select("#ETERNAL_ATAKE").on("click", EA)
d3.select("#AAL").on("click", AAL)
d3.select("#C_Desc").on("click", close)


var info = d3.select("#C_Desc")


function close() {
    var info = d3.select("#C_Desc")

    info.html('')
    console.log('Close')
}


function EA(){

    close()
    var info = d3.select("#C_Desc")

console.log('Lil Uzi 1')

info.html(`<p>Lil Uzi Vert</p>
<p>Eternal Atake</p>

<p>Look, you had me sold at "Alien Abduction Concept Album". However, Uzi 
  doesn't add any sort of depth to the concept. While the songs are a little more
   refined than *cough cough* LUV vs. The World 2, that's not really saying anything.
   An awesome beat on 'Prices' can only go so far when Uzi is squealing "i JuSt WeNt 
   Up In My PrIcE" all over it. There are some decent, albeit fleeting moments and 
   the skits are fun. But I'm not seeing the hype.</p>

  <p>Favorite Tracks:
    <ol>
      <li>
        Futsal Shuffle 2020
      </li>
      <li>
          P2
        </li>
        <li>
            Prices
          </li>
    </ol>
  </p>
</p>


   </p><button id="Close">CLOSE</button>`
)

}





function AAL(){

    close()
    var info = d3.select("#C_Desc")

console.log('Against All Logic')

info.html(`<p>Against All Logic</p>
<p>2017-2019</p>

<p>"Against All Logic" is an alias for Nicolas Jaar, an EDM producer. Two years ago he produced
my favorite electronic record of the year (albeit faint praise given my limited EDM knowledge),
 "2012-2017." His instrumentals tend to have a slow build-up dance vibe, where it might take
 2-3 minutes to really understand what he's going for - think LCD Soundsystem, but with a couple
 of random vocal samples thrown in. Although his 5-7 minute songs are hit or miss, when it hits,
 like "2012-2017"'s 'Rave on U' and 'You Are Going to Love Me and Scream', man it really hits.</p>

 <p>My best experience with this album boils down to one moment. I was playing it in my car while
 driving home from work. My AUX cord was and continues to be broken for some reason, so I had
 my phone turned all the way up and bouncing off of the acoustics of my cupholder (you know, 
    the perfect audio conditions to capture the subtle nuances of an electronic album). Anyways,
    I thinking much of the album because I was focusing on, you know, the road, when on the
    third song I was pulled in by a distorted, intoxicating sample of The Sugarhill Gang's 
    "Rapper's Delight." Over and over you hear the chopped and screwed sample of "and you don't
    stop" "and you don't stop" "AnD yOu DoN'T sToPpp," murmuring as if it's in the back of an
    Uber after a long night of drinking. Once I got to a stoplight, I looked down at my phone
    and saw that the song is called "With An Addict," which makes sense given the overall vibe
    of the song. Kind of a fun realization after the fact. 


 <p>Compared to its predecessor, "2017-2019" is more experimental and choppy. I don't like it
 as much as "2012-2017" but it had some good moments so it's C-Tier.</p>

  <p>Favorite Tracks:
    <ol>
      <li>
        With An Addict
      </li>
      <li>
          Faith
        </li>
        <li>
            Penny
          </li>
    </ol>
  </p>
</p>


   </p><button id="Close">CLOSE</button>`
)

}