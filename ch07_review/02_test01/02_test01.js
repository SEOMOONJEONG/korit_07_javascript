const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');

const addBtn = document.getElementById('add-btn');
const userList = document.getElementById('user-list');

let addUsers = JSON.parse(localStorage.getItem('add-users')) || [];

// console.log(logins);

// userList 불러오는 과정
function renderuserList() {
  userList.innerHTML ='';  // 기존 login list 초기화 → 추가 누적 x

  // login 배열 반복 돌려서 목록 생성
  addUsers.forEach((user, index) => {
    const li = document.createElement('li');
    li.className = 'add-user';

    // if(user.completed) {
    //   li.classList.add('completed');
    // }

    const userIdSpan = document.createElement('span');
    userIdSpan.className = 'userId-text';
    userIdSpan.textContent = user.text1;

    const userPwSpan = document.createElement('span');
    userPwSpan.className = 'userPw-text';
    userPwSpan.textContent = user.text2;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times';   // x 기호

    // 요소들 li 변수에 추가
    li.append(userIdSpan);
    li.append(userPwSpan);
    li.append(deleteBtn);

    userList.appendChild(li);

    deleteBtn.addEventListener('click', () => {
      addUsers.splice(index, 1);
      saveaddUsers();
      renderuserList();
    });
  })
}

function saveaddUsers() {
  localStorage.setItem('add-users', JSON.stringify(addUsers));
}

function addUserUser() {
  const userId = idInput.value.trim();
  const userPw = pwInput.value.trim();

  console.log(userId);
  if(userId === '') {
    alert('id를 입력해 주세요 ! 😒');
    return;
  }
  if(userPw === '') {
    alert('pw를 입력해 주세요 ! 😢');
    return;
  }
  
  const newaddUsers = {
    text1: userId,
    text2: userPw,
  };

  addUsers.push(newaddUsers);

  idInput.value = '';
  pwInput.value = '';

  renderuserList();
  saveaddUsers();
}

addBtn.addEventListener('click', addUserUser);

idInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    addUserUser();
  }
});

pwInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    addUserUser();
  }
});

window.onload = renderuserList;
