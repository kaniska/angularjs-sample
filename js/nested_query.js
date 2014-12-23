nested_query.js

// GET /users
User.one('123').then(function(user) {
  return user.get('accounts').then(function(accounts) {
    // We have accounts
  });
});