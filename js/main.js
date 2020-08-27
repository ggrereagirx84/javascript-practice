'use strict'
{
  const Fnum = 3;
  const Bnum = 5;
  const Fstr = 'Fizz';
  const Bstr = 'Buzz';
  
  const FBnum = Fnum * Bnum;
  const FBstr = Fstr + Bstr;

  for (let i = 1; i < 100; i++) {
    if (i % FBnum === 0) {
      console.log(`${FBstr} ${i}`);
    } else if (i % Fnum === 0) {
      console.log(`${Fstr} ${i}`);
    } else if (i % Bnum === 0) {
      console.log(`${Bstr} ${i}`);
    }
  }
}