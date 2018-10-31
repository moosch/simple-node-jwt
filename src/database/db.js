const makeId = (len = 10) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// Set up an initial array that will contain valid user
let store = {
  users: [
    { id: makeId(), username: 'john', password: 'smith' },
    { id: makeId(), username: 'jane', password: 'cheng' },
  ],
};

module.exports = {
  user: {
    find({ username, password }) {
      const { users } = store;
      const user = store.users.find(u => u.username === username && u.password === password);

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    },
    create({ username, password }) {
      let { users } = store;
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        throw new Error('Username already exists');
      }

      const newUser = {
        id: makeId(),
        username, 
        password,
      };

      store.users = users.push(newUser);

      return newUser;
    },
    delete({ username, password }) {
      let { users } = store;
      users = filter(u => u.username !== username && u.password === password);

      store.users = users;

      return true;
    },
  },
};
