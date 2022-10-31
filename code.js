let list = document.getElementsByClassName("video-grid")[0].getElementsByTagName("a");

let a = [];
const e = prompt("which video (number) do you want to start with? (default is 1)","1")
for (let i = (e-1)*4; i < list.length; i++) {
    if (Math.floor(i / 4) == i / 4) a.push(list[i]);
}

a.forEach(j => {
    window.open("https://projectlounge.pw/ytdl/download?url=" + j, "_blank");
})
