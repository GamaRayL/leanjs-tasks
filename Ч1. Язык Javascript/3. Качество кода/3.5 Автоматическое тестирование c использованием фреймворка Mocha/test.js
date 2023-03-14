describe('pow', function () {
  describe('Возводит 5 в степень n', function () {
    function makeTest(n) {
      let expected = 1;

      for (let i = 0; i < n; i++) {
        expected *= 5;
      }

      // либо такое выражение вместо громоздкого цикла - let expected = 5 ** n;

      it(`5 в степени ${n} будет ${expected}`, function () {
        assert.equal(pow(5, n), expected);
      });
    }

    for (let n = 1; n <= 5; n++) {
      makeTest(n);
    }
  });
});

// describe('pow', function () {
//   describe('возводит x в степень 3', function () {
//     function makeTest(x) {
//       let expected = x * x * x;

//       it(`${x} в степени 3 будет ${expected}`, function () {
//         assert.equal(pow(x, 3), expected);
//       });
//     }

//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
//   });

//   it('для отрицательных n возвращает NaN', function () {
//     assert.isNaN(pow(2, -1));
//   });

//   it('для дробных n возвращает NaN', function () {
//     assert.isNaN(pow(2, 1.5));
//   });
// });
