const PureNode = require('./utils/PureNode');

const lowerCase = payload =>
  typeof payload === 'string' ? payload.toLowerCase() : payload;

module.exports = PureNode('lower-case', lowerCase);
