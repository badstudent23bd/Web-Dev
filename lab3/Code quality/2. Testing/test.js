describe("pow", function() {
  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });

    it("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });

    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });

  describe("hand examples", function() {
    it("2**0 == 1", function () {
      assert.equal(pow(2, 0), 1);
    });
    it("4**0.5 == 2", function () {
      assert.equal(pow(4, 0.5), 2);
    });
    it("2**-1 == 0.5", function () {
      assert.equal(pow(2, -1), 0.5);
    });
    it("2**-2 == 0.25", function () {
      assert.equal(pow(2, -2), 0.25);
    });
  });

});
