function convertToMp3() {
    let videoUrl = document.getElementById("videoUrl").value;
    if (!videoUrl) {
        alert("Masukkan URL YouTube!");
        return;
    }

    let apiUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(videoUrl)}`;
    let thumb = `https://apikeyporz.vercel.app/search/youtube?q=${encodeURIComponent(videoUrl)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                document.getElementById("result").innerHTML = `
                    <h3>${data.data.title}</h3>
                    <a href="${data.data.dl}" target="_blank" class="download-btn">Download MP3</a>
                `;
            } else {
                document.getElementById("result").innerHTML = `<p style="color: red;">Gagal mengonversi!</p>`;
            }
        })
        .catch(error => console.error("Error:", error));
}