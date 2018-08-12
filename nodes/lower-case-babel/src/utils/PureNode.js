const PureNode = (name, fcn) => RED => {
  RED.nodes.registerType(name, function(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on('input', msg => {
      node.send({
        ...msg,
        payload: fcn(msg.payload),
      });
    });
  });
};

export default PureNode;
