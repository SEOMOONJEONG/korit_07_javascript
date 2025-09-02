const loginNameInput = document.getElementById('login-name');
const loginPwInput = document.getElementById('login-pw');
const loginBtn = document.getElementById('login-btn');

let addUsers = JSON.parse(localStorage.getItem('add-users')) || [];

function loginUser() {
  const loginName = loginNameInput.value.trim();
  const loginPw = loginPwInput.value.trim();

  let loginSuccess = false;

  addUsers.forEach(user => {
    if(user.username === loginName && user.password === loginPw) {
      loginSuccess = true;
    }
  });

  if(loginSuccess) {
    alert('로그인 성공');
  }else {
    alert('로그인 실패');
  }
}

loginBtn.addEventListener('click', loginUser);
