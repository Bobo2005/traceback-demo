function getUserRole(user) {
  return user.role.toUpperCase();
}

function processRequest(request) {
  const user = request.user || {};
  const role = getUserRole(user);
  console.log(`Access granted for ${role}`);
}

module.exports = { processRequest };
