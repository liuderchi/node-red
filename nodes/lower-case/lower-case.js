const openSocket = require('socket.io-client');

const USER_COUNT = 'user count';
const WS_API = 'http://localhost:3000';

module.exports = RED => {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    let socket;
    node.on('input', msg => {
      socket = openSocket(WS_API);

      socket.on('connect', function() {
        socket.emit('authentication', {
          username: msg.payload, // e.g. 'Derek'
          password: 'secret',
          // TODO more input fields of node-red node
        });
        socket.on('authenticated', function(res) {
          console.warn(`authenticated with result: ${res}`);
          node.send({
            ...msg,
            payload: 'Auth successful',
          });
          // add ws use logics
          socket.on(USER_COUNT, ({ numUsers }) => {
            node.send({
              payload: `[USER_COUNT] ${numUsers}`,
            });
          });
        });
      });
    });
  }
  RED.nodes.registerType('lower-case', LowerCaseNode);
};
