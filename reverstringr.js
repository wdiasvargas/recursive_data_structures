function str_reverse2(str) {
  var result = '',
    length = str.length;
  while (length--) {
    result += str[length];
  }
  return result;
}
const reversestringr = str => (result = '', length = str.length) => (length--) ? (result += str[length]) && (reversestringr(str)) : result
