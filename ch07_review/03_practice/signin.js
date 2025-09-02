    const loginIdInput = document.getElementById('login-id');
    const loginPwInput = document.getElementById('login-pw');
    const loginBtn = document.getElementById('login-btn');

    let addUsers = JSON.parse(localStorage.getItem('add-users')) || [];

    function loginUser() {
      const loginId = loginIdInput.value.trim();
      const loginPw = loginPwInput.value.trim();

      if(loginId === '' || loginPw === '') {
        alert('아이디와 비밀번호를 입력해 주세요!');
        return;
      }

      let loginSuccess = false; // 로그인 성공 여부 플래그

      addUsers.forEach(user => {
        if(user.id === loginId && user.pw === loginPw) {
          loginSuccess = true;
        }
      });
      
      if(loginSuccess) {
        alert('로그인 성공 ! 😁');
      } else { 
        alert('로그인 실패 ! 😢');
      }
    }

    loginBtn.addEventListener('click', loginUser);
    loginIdInput.addEventListener('keydown', (event) => { 
      if(event.key === 'Enter') loginUser(); });
    loginPwInput.addEventListener('keydown', (event) => { 
      if(event.key === 'Enter') loginUser(); });