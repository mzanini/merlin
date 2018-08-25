module.exports = {
  require: jest.fn(),
  match: jest.fn(),
  app: jest.fn(),
  remote: jest.fn(),
  dialog: jest.fn()
};

module.exports.app = { getPath: jest.fn() }