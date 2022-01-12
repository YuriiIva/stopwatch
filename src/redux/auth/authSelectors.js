const getUserName = (state) => state.auth.user.name;

const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const isLoadingUser = (state) => state.auth.isLoadingUser;

const authSelectors = {
  getUserName,
  getIsLoggedIn,
  isLoadingUser,
};

export default authSelectors;
