// Fungsi untuk download MP3
function convertToMp3() {
    let videoUrl = document.getElementById("videoUrl").value;
    if (!videoUrl) {
        alert("Masukkan URL YouTube!");
        return;
    }

    let apiUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(videoUrl)}`;

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

// Fungsi untuk download MP4
function convertToMp4() {
    let videoUrl = document.getElementById("videoUrl").value;
    if (!videoUrl) {
        alert("Masukkan URL YouTube!");
        return;
    }

    let apiUrl = `https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(videoUrl)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                document.getElementById("result").innerHTML = `
                    <h3>${data.data.title}</h3>
                    <a href="${data.data.dl}" target="_blank" class="download-btn">Download MP4</a>
                `;
            } else {
                document.getElementById("result").innerHTML = `<p style="color: red;">Gagal mengonversi!</p>`;
            }
        })
        .catch(error => console.error("Error:", error));
}

// Fungsi untuk menambahkan komentar
