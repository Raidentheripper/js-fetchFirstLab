"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."
// Функція createUser створює нового користувача через POST-запит до API
function createUser(user) {
  const url = "https://jsonplaceholder.typicode.com/users";

  const body = {
      name: "John",
      email: "john@example.com"
  }

  return fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(body)
  })
      .then(response => {
          if (!response.ok) {
              throw new Error(`Error: ${response.status}, ${response.statusText}`)
          }
          return response.json();
      })
      .catch(error => {
          return new Error(`Error: ${error.message}`);
      })
}
createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(result => console.log(result));

// Експортуємо функцію
module.exports = createUser;
