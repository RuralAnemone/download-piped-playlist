let list = document.getElementsByClassName("video-grid")[0].getElementsByTagName("a");

if (location.href.includes("playlist")) {
    let a = [];
    const e = prompt("which video (number) do you want to start with? (default is 1)","1")
    for (let i = (e-1)*4; i < list.length; i++) {
        if (Math.floor(i / 4) == i / 4) a.push(list[i]);
    }

    a.forEach(j => {
        window.open("https://projectlounge.pw/ytdl/download?url=" + j, "_blank");
    })

} else if (location.href.includes("channel)) {
    if (window.confirm("download entire channel?")) {
        Array.from(list).forEach(j => {
            if (j.href.includes("/watch?v=") && !j.href.includes("listen")) window.open("https://projectlounge.pw/ytdl/download?url=" + j);
        })
    }
}
