const PureNode = require('./utils/PureNode');

const upperCase = payload =>
  typeof payload === 'string' ? payload.toUpperCase() : payload;

module.exports = PureNode('upper-case', upperCase);
