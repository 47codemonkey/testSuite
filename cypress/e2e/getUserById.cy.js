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
    const lastUserId = 210; 
    let result = [];
    for (let i = 1; i <= lastUserId; i++) {
      api.getUserById(i).then(response => {
        if (response.body.title.length > 20) result.push(response.body.title)
        console.log(response.body.title);
      }); 
    }
    console.log(result)
  })
})