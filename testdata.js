const testData = {
  validUser: {
    name: 'Test QA Engineer',
    password: 'SecretPassword123',
  },
  invalidUser: {
    email: 'wrong@email.com',
    password: 'wrongpassword',
  },
  payment: {
    nameOnCard: 'John Doe QA',
    cardNumber: '4111111111111111',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2030',
  },
  searchTerm: 'dress',
  apiUser: {
    name: 'API Test User',
    password: 'Test@1234',
    title: 'Mr',
    birthDate: '1',
    birthMonth: 'January',
    birthYear: '1990',
    firstname: 'API',
    lastname: 'User',
    company: 'QA Corp',
    address1: '123 Test Street',
    address2: 'Suite 1',
    country: 'United States',
    zipcode: '10001',
    state: 'New York',
    city: 'New York',
    mobile: '1234567890',
  },
};

module.exports = { testData };