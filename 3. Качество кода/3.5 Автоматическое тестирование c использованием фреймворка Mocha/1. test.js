describe('pow', function () {
  describe('Возводит 5 в степень n', function () {
    function makeTest(n) {
      let expected = 1;

      for (let i = 0; i < n; i++) {
        expected *= 5;
        console.log(expected);
      }

      // либо такое выражение вместо громоздкого цикла let expected = 5 ** n;

      it(`5 в степени ${n} будет ${expected}`, function () {
        assert.equal(pow(5, n), expected);
      });
    }

    for (let n = 1; n <= 5; n++) {
      makeTest(n);
    }

    // it('5 в степени 1 будет 5', function () {
    //   assert.equal(pow(5, 1), 5);
    // });

    // it('5 в степение 2 будет 25', function () {
    //   assert.equal(pow(5, 2), 25);
    // });

    // it('5 в степение 3 будет 125', function () {
    //   assert.equal(pow(5, 3), 125);
    // });
  });
});
