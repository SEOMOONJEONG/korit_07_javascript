let data = {
  "employees" : [
    {"firstName": "John", "lastName": "Doe",},
      {"firstName": "Anna", "lastName": "Smith",},
      {"firstName": "Peter", "lastName": "Parker",},
  ],
};

console.log(data);
/*
  {
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Parker' }
    ]
  }
*/
// 객체를 문자열로 변환
let stringValue = JSON.stringify(data);
console.log(stringValue);
// {"employees":[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Parker"}]}

// 문자열 형태의 JSON 데이터를 JavaScript Object로 변환
let obj = JSON.parse(stringValue);
console.log(obj);
/*
  {
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Parker' }
    ]
  }
*/