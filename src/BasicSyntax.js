export function romanToInteger(str) {
    let res = 0;
    /*
  Напишите код, преобразующий число из римской записи в арабскую.
  На вход вы получите строку, ответом должно быть число.
   */

    let strArr = str.split('');
    for (let i = 0; i < strArr.length; ++i) {
        switch (strArr[i]) {
            case 'I':
                strArr[i] = 1;
                break;
            case 'V':
                strArr[i] = 5;
                break;
            case 'X':
                strArr[i] = 10;
                break;
            case 'L':
                strArr[i] = 50;
                break;
            case 'C':
                strArr[i] = 100;
                break;
            case 'D':
                strArr[i] = 500;
                break;
            case 'M':
                strArr[i] = 1000;
                break;
        }
    }
    for (let j = 0; j < strArr.length; ++j) {
        if (strArr[j + 1] > strArr[j]) {
            res += strArr[j + 1] - strArr[j];
            j += 1;
        } else {
            res += strArr[j];
        }
    }
    return res;
}
