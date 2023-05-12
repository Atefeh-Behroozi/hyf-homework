var users = [];
var user = {
  email: 'example@example.com',
  password: 'password123'
};
users.push(user);

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var foundUser = users.find(function(user) {
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
      var userList = document.getElementById('userList');
      userList.innerHTML = '';
      users.forEach(function(user) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Email: ' + user.email;
        userList.appendChild(listItem);
      });
    }
    
