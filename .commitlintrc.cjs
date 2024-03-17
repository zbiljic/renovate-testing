const Configuration = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => {
      return /^(first commit|project init)/.test(commit);
    },
  ],
};

module.exports = Configuration;
