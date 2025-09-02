const nameInput = document.getElementById('name-input');
const pwInput = document.getElementById('pw-input');
const addBtn = document.getElementById('add-btn');

let addUsers = JSON.parse(localStorage.getItem('add-users')) || [];

function saveaddUsers() {
  localStorage.setItem('add-users', JSON.stringify(addUsers));
}

  function addUserUser() {
    const userName = nameInput.value.trim();
    const userPw = pwInput.value.trim();

  const newaddUsers = { username: userName, password: userPw };
  addUsers.push(newaddUsers);

  nameInput.value = '';
  pwInput.value = '';

  saveaddUsers();
  alert('회원가입 성공! 로그인 페이지로 이동합니다.');
  return location.replace('./signIn.html'); 
}

addBtn.addEventListener('click', addUserUser);