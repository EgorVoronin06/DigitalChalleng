document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    fetch("/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Регистрация успешна!");
                window.location.href = "/login";
            } else {
                alert("Произошла ошибка при регистрации.");
            }
        })
        .catch(error => {
            alert("Ошибка сети");
        });
});

document.getElementById('icon').addEventListener('click', function() {
    alert('Иконка была нажата!');
});
