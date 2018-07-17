module.exports = RED => {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on('input', msg => {
      let countSimple = node.context().get('count') || 0;
      console.log({ countSimple });
      countSimple++;
      node.context().set('count', countSimple);

      let countFLow = node.context().flow.get('count') || 0;
      console.log({ countFLow });
      countFLow += 3;
      node.context().flow.set('count', countFLow);
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
