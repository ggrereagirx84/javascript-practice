'use strict' 
{
  const fizzStr = 'Fizz';
  const buzzStr = 'Buzz';
  const button = document.querySelector('button');
  const target = document.getElementById('target');

  function output(fizzNum, buzzNum) {
    if (fizzNum === '' || buzzNum === '') {
      addList(notInteger());
    } else if (Number.isInteger(Number(fizzNum)) && Number.isInteger(Number(buzzNum))) {
      for (let i = 1; i < 100; i++) {
        if (i % fizzNum === 0 && i % buzzNum === 0) {
          addList(fizzStr + buzzStr + ' ' + i);
        } else if (i % fizzNum === 0) {
          addList(fizzStr + ' ' + i);
        } else if (i % buzzNum === 0) {
          addList(buzzStr + ' ' + i);
        }
      }
    } else {
      addList(notInteger());
    } 
  }

  function notInteger() {
    return '整数値を入力してください'
  }

  function addList(string) {
    const li = document.createElement('li');
    li.textContent = string;
    target.appendChild(li);
  }

  button.addEventListener('click', () => {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
    const fizzNum = document.getElementById('fizz').value;
    const buzzNum = document.getElementById('buzz').value;
    output(fizzNum, buzzNum);
  });
}