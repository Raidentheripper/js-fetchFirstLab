"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."
function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      return data.map(user => ({
        id: user.id,
        name: user.name
      }));
    })
    .catch(error => {
      return new Error(`Error: ${error.message}`);
    });
}

fetchUsers().then(result => console.log(result));

// Експортуємо функцію
module.exports = fetchUsers;
