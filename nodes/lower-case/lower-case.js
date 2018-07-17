module.exports = RED => {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on('input', msg => {
      node.send({
        ...msg,
        payload:
          typeof msg.payload === 'string'
            ? msg.payload.toLowerCase()
            : msg.payload,
      });
    });
  }
  RED.nodes.registerType('lower-case', LowerCaseNode);
};
