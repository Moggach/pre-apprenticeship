test('Can add numbers', () => {
  equal(calculate(1, '+', 100), 101);
  equal(calculate(10, '+', 2.5), 25);
});

test('Can subtract numbers', () => {
  equal(calculate(32, '-', 2), 30);
  equal(calculate(500, '-', 373.3), 126.7);
});

test('Can multiply numbers', () => {
  equal(calculate(5, '*', 3), 15);
  equal(calculate(17, '*', 3.2), 54.4);
});

test('Can divide numbers', () => {
  equal(calculate(12, '/', 6), 2);
  equal(calculate(18, '/', 6.3), 2.85);
});

test('Calculate with strings', () => {
  equal(calculate(parseFloat('5'), '+', parseFloat('3')), 8);
  equal(calculate(parseFloat('12'), '+', parseFloat('5')), 17);
});

test('calculator adds numbers and updates the page correctly', () => {
  // get all three inputs
  const n1 = document.querySelector("input[name='a']");
  const sign = document.querySelector('select');
  const n2 = document.querySelector("input[name='b']");

  // enter test data into inputs
  n1.value = '7';
  sign.value = '*';
  n2.value = '3';

  // submit the form

  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
  // verify that the page contains the expected result
  const result = document.querySelector('#result');
  equal(result.textContent, '21');

  // reset the page so it doesn't affect anything else
  result.textContent = '';
});
