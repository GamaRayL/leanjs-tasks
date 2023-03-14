// 1. getComputedStyle.width при значении box-sizing возвращает значения без padding, а clientWidth включая их.
// 2. getComputedStyle.width может вернуть auto своих свойств для строчного элемента.
// 3. getComputedStyle.width возвращает значения в строках + px, а  elem.clientWidth в числах
