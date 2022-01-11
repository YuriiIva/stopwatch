const getUserName = (state) => state.auth.user.name;

const getIsLoggedIn = (state) => state.auth.isLoggedIn;
console.log(`getIsLoggedIn`, getIsLoggedIn);

const authSelectors = {
  getUserName,
  getIsLoggedIn,
};

export default authSelectors;
