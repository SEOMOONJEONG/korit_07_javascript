const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const addBtn = document.getElementById('add-btn');

// localStorage에 저장할 회원 배열
let addUsers = JSON.parse(localStorage.getItem('add-users')) || [];

function saveaddUsers() {
  localStorage.setItem('add-users', JSON.stringify(addUsers));
}

function addUserUser() {
  const userId = idInput.value.trim();
  const userPw = pwInput.value.trim();

  if (userId === '') {
    alert('id를 입력해 주세요 ! 😒');
    return;
  }
  if (userPw === '') {
    alert('pw를 입력해 주세요 ! 😢');
    return;
  }

  const newaddUsers = { id: userId, pw: userPw };
  addUsers.push(newaddUsers);

  idInput.value = '';
  pwInput.value = '';

  saveaddUsers();
  alert('회원가입 완료 😎');
}

addBtn.addEventListener('click', addUserUser);
idInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addUserUser();
});
pwInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addUserUser();
});