function loginAuthentication() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // reset pesan error
    document.getElementById("errorUsername").textContent = "";
    document.getElementById("errorPassword").textContent = "";

    // kredensial contoh
    const validUser = "tamamo";
    const validPass = "tama123";

    if (username.toLowerCase() === validUser && password === validPass) {
        // berhasil login
        document.getElementById("hasil").textContent = "Login Berhasil";
        document.getElementById("hasilUsername").textContent = "Username : " + username;
        
        // redirect ke halaman berhasil (sesuaikan path)
        setTimeout(() => {
            window.location.href = "login_berhasil.html";
        }, 1000);
        return false;
    } else {
        // login gagal
        alert("Username atau password salah!");
        document.getElementById("errorUsername").textContent = " SALAH";
        document.getElementById("errorPassword").textContent = " SALAH";
        document.getElementById("errorUsername").style.color = "red";
        document.getElementById("errorPassword").style.color = "red";
        return false;
    }
}