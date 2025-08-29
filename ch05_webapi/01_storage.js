// localStorage에 문자열 데이터와 배열 데이터를 저장하는 예시

if(typeof Storage !== 'undefined') {  // Storage가 검색됐으니 별 문제 없을겁니다.
  localStorage.setItem('title', 'review : 파이팅');
  /*
    .setItem() 라는 메서드가 있고, 거기에 2 개의 argument를 집어넣습니다.
    두 번째 매개변수인 value값의 경우, 원래 string 자료형이라면 있는 그대로.
  */

  // 집어넣을 데이터 예시 - JS 배열인데, 내부 element가 객체 → string으로의 변환 과정 필요
  const users = [
    {
      id: 1,
      name: '김일',
    },{
      id: 2,
      name: '김이',
    },
  ];
  localStorage.setItem('users', JSON.stringify(users))
  //localStorage.setItem('localStorage에 들어가는 key 이름', JSON.stringify(바꾸고자 하는 데이터))
}


// localStorage 내에 있는 데이터를 조회하는 예시
if (Storage !== undefined) {
  console.log(localStorage.getItem('title'));
  console.log(localStorage.getItem('users'));
  // 이 경우 27 / 28 번 라인의 결과값 자료형들은 전부 string에 해당함
  // 그래서 그냥 28 번 라인을 stirng으로 쓸 거라면 별 문제가 없겠지만 굳이 객체 정보로 저장한걸 string으로 쓸 리가 없으니까 다시 원상복구하는 method가 필요합니다.
  console.log(JSON.parse(localStorage.getItem('users')));

  const usersFromLocal = JSON.parse(localStorage.getItem('users'));
  console.log(usersFromLocal[0].name);
  // usersFromLocal[0] : 배열 / .name : key / 김일 : value
}

// 삭제 예시
localStorage.removeItem('title');


