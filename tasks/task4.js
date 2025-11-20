// Функція deleteUser видаляє користувача за вказаним ID через DELETE-запит
function deleteUser(id) {

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return fetch(url, {
        method: "DELETE",
    })
        .then(response => {
            const status = response.status;

            if (!response.ok) {
                throw new Error(`Error: ${response.status}, ${response.statusText}`);
            }

            return { status };
        })
        .catch(error => {
            return new Error(`Error: ${error.message}`);
        });
}

// ✔️ Тепер console.log дочекається виконання запиту
deleteUser(1).then(result => console.log(result));

// Експортуємо функцію
module.exports = deleteUser;
