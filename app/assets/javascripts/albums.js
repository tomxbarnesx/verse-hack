// function albumSearch(){
//     searchVal = document.getElementById("album-search").value;
// }

// $.ajax({
//     contentType: "application/json; charset=utf-8",
//     url: "http://www.songlyrics.com/travis-scott-feat-lil-uzi-vert-kanye-west/watch-feat-kanye-west-lil-uzi-vert-lyrics/",
//     success: function(data) {
//         document.querySelector("songLyricsDiv").innerHTML = data;
//         console.log(data)
//     }
// });

const lyricist = new Lyricist('QBLJO_4WOqwWeM7ccMFGsnH3EUeMbWdZv01G53H4RPpjz8voJUPdka-Ohk-DJWZN');

lyricist.song(714198, { textFormat: 'html' }).then(song => console.log(song.description.html));