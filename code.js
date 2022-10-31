let list = document.getElementsByClassName("video-grid")[0].getElementsByTagName("a");

let a = [];
for (let i = 0; i < list.length; i++) {
    if (Math.floor(i / 4) == i / 4) a.push(list[i]);
}

a.forEach(j => {
    window.open("https://projectlounge.pw/ytdl/download?url=" + j, "_blank");
})
