const lowerCase = ({ payload }) =>
  typeof payload === 'string' ? payload.toLowerCase() : payload;

module.exports = RED => {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on('input', msg => {
      node.send({
        ...msg,
        payload: lowerCase(msg),
      });
    });
  }
  RED.nodes.registerType('lower-case', LowerCaseNode);
};
