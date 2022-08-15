// можно було зробити через page object але я поспішав

class Api {
  getUserById(userId) {
    return cy.request({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/todos/${userId}`,
    });
  }
}

describe('Test Suite', () => {
  const api = new Api();

  it('Test Case', () => {
    const lastUserId = 200; // я зробив до 200 тому що 201-ого юзера немає (видавало помилку)
    for (let i = 1; i <= lastUserId; i++) {
      api.getUserById(i).then(response => {
        if (response.body.title.length > 20) console.log(response.body.title);
      });
    }
  })
})