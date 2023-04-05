new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Не выполнится. Промис не может обработать ошибку.
// Ошибка обрабатывется после