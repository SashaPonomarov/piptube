const electron = require('electron')

let play = document.querySelector(".play")
let embed = document.querySelector(".youtube-embed")
let close = document.querySelector(".close")
let panel = document.querySelector(".control-panel")

close.addEventListener("click", function(){
  const {BrowserWindow} = electron.remote;
  BrowserWindow.getFocusedWindow().close();
})

play.addEventListener("click", function(){
  let copied = electron.clipboard.readText()
  let link = validateYouTubeUrl(copied)
  if (link) {
    embed.src = link
    panel.classList.add("hide")
  }
})


function validateYouTubeUrl(url)
{
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&modestbranding=1&iv_load_policy=3'
        }
    }
    return false
}