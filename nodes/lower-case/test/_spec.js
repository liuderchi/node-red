var should = require("should");
var helper = require("node-red-node-test-helper");
var upperNode = require("../upper-case.js");

helper.init(require.resolve("node-red"));

describe("upper-case Node", function() {
  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload();
    helper.stopServer(done);
  });

  it("should be loaded", function(done) {
    var flow = [{ id: "n1", type: "upper-case", name: "upper-case" }];
    helper.load(upperNode, flow, function() {
      var n1 = helper.getNode("n1");
      n1.should.have.property("name", "upper-case");
      done();
    });
  });

  it("should make payload upper case", function(done) {
    var flow = [
      { id: "n1", type: "upper-case", name: "upper-case", wires: [["n2"]] },
      { id: "n2", type: "helper" },
    ];
    helper.load(upperNode, flow, function() {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      n2.on("input", function(msg) {
        msg.should.have.property("payload", "UPPERCASE");
        done();
      });
      n1.receive({ payload: "UpperCase" });
    });
  });
});
