'use strict'
{
  let boolean = false;
  const capital = '東京';
  
  do {
    const result = prompt('日本の首都は？');
    if (capital === result) {
      alert('正解です！');
      boolean = true;
    } else {
      alert('不正解です！');
    }
  } while (boolean === false);


}