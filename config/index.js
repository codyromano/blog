const getConfig = () => {
  return {
    path: '/blog/',
    port: 8000
  };
};

module.exports = {
  getAll: function() {
    return getConfig();
  }
};