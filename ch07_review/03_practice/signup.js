const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const addBtn = document.getElementById('add-btn');
const userList = document.getElementById('user-list');

let addUsers = JSON.parse(localStorage.getItem('add-users')) || [];

function renderuserList() {
  userList.innerHTML ='';
  addUsers.forEach((user, index) => {
    const li = document.createElement('li');
    li.className = 'add-user';

    const userIdSpan = document.createElement('span');
    userIdSpan.className = 'userId-text';
    userIdSpan.textContent = user.text1;

    const userPwSpan = document.createElement('span');
    userPwSpan.className = 'userPw-text';
    userPwSpan.textContent = '*'.repeat(user.text2.length);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';

    li.append(userIdSpan);
    li.append(userPwSpan);
    li.append(deleteBtn);
    userList.appendChild(li);

    deleteBtn.addEventListener('click', () => {
      addUsers.splice(index, 1);
      saveaddUsers();
      renderuserList();
    });
  });
}

function saveaddUsers() {
  localStorage.setItem('add-users', JSON.stringify(addUsers));
}

function addUserUser() {
  const userId = idInput.value.trim();
  const userPw = pwInput.value.trim();

  if(userId === '') { alert('id를 입력해 주세요 ! 😒'); return; }
  if(userPw === '') { alert('pw를 입력해 주세요 ! 😢'); return; }
  
  const newaddUsers = { text1: userId, text2: userPw };
  addUsers.push(newaddUsers);

  idInput.value = '';
  pwInput.value = '';

  renderuserList();
  saveaddUsers();
}

addBtn.addEventListener('click', addUserUser);
idInput.addEventListener('keydown', e => { if(e.key === 'Enter') addUserUser(); });
pwInput.addEventListener('keydown', e => { if(e.key === 'Enter') addUserUser(); });

window.onload = renderuserList;