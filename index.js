const { processRequest } = require('./userService');

const request = { user: { name: 'Alice' } };
processRequest(request);
