import {userRegistration} from "../API/APIHelpers"
describe('Test login as user', () => {
    it('test', () => {
        userRegistration()
    })
})

// describe('Отправка запроса на сервер', () => {
//     it('Отправить POST запрос', () => {
//       cy.request({
//         method: 'POST',
//         url: 'https://bookcart.azurewebsites.net/api/User',
//         body: {
//           "userId": 0,
//           "firstName": "string",
//           "lastName": "string",
//           "username": "string",
//           "password": "string",
//           "gender": "string",
//           "userTypeId": 0
//         }
//       }).then((response) => {
//         // Добавьте здесь любую проверку ответа от сервера
//         expect(response.status).to.eq(200); // Проверка успешного статуса ответа (может отличаться в зависимости от вашего API)
//         cy.log('Ответ сервера:', response.body); // Лог ответа сервера
//       });
//     });
//   });