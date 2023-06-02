let users = [];
let user = {
  email: 'example@example.com',
  password: 'password123'
};
users.push(user);

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const foundUser = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (foundUser) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'none';
        displayUserList();
      } else {
        document.getElementById('errorMessage').textContent = 'Invalid email or password';
        document.getElementById('errorMessage').style.display = 'block';
      }
    });

    function displayUserList() {
      let userList = document.getElementById('userList');
      userList.innerHTML = '';
      users.forEach(function(user) {
        let listItem = document.createElement('li');
        listItem.textContent = 'Email: ' + user.email;
        userList.appendChild(listItem);
      });
    }
    
