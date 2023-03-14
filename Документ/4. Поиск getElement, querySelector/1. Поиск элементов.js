// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

// 1. document.getElementById("age-table");
// 2. document.getElementsByTagName("label");
// 3. document.querySelectorAll("td")[1];
// 4. document.getElementsByName("search")[0];
// 5. document.querySelector("form[name='search']").querySelector('input');
// 6. Array.from(document.querySelector("form[name='search']").querySelectorAll('input')).at(-1)
