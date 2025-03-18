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
function addComment() {
    let name = document.getElementById("userName").value;
    let comment = document.getElementById("userComment").value;

    if (!name || !comment) {
        alert("Nama dan komentar tidak boleh kosong!");
        return;
    }

    let commentSection = document.getElementById("comments");
    let newComment = document.createElement("div");
    newComment.classList.add("comment-box");
    newComment.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

    commentSection.appendChild(newComment);

    // Kosongkan input setelah menambahkan komentar
    document.getElementById("userName").value = "";
    document.getElementById("userComment").value = "";
}






// Fungsi untuk menampilkan komentar dari localStorage
function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let commentSection = document.getElementById("comments");
    commentSection.innerHTML = ""; // Kosongkan komentar sebelum memuat ulang

    comments.forEach((comment, index) => {
        let commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");
        commentBox.innerHTML = `
            <strong>${comment.name}:</strong> 
            <p>${comment.message}</p>
           
        `;
        commentSection.appendChild(commentBox);
    });
}

// Fungsi untuk menambahkan komentar baru
function addComment() {
    let name = document.getElementById("userName").value;
    let comment = document.getElementById("userComment").value;

    if (!name || !comment) {
        alert("Nama dan komentar tidak boleh kosong!");
        return;
    }

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ name, message: comment });
    localStorage.setItem("comments", JSON.stringify(comments));

    document.getElementById("userName").value = "";
    document.getElementById("userComment").value = "";

    loadComments();
}

// Fungsi untuk menghapus komentar


// Muat komentar saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadComments);