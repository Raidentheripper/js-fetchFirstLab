"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."
// Функція updateUser оновлює дані існуючого користувача через PATCH-запит
function updateUser(id, updatedData) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    const body = {
        userId: id,
        name: updatedData.name
    }

    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}, ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            return new Error(`Error: ${error.message}`);
        });
}

updateUser(1, { name: 'New Name' })
  .then(result => console.log(result));

// Експортуємо функцію
module.exports = updateUser;
