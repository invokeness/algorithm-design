function maxNum(str1,str2) {
  //这样在进行两个任意大的整数相加的时候，既不会溢出，也不会损失精度。
  //首先获取两个字符串的长度
  let len1 = str1.length;
  let len2 = str2.length;
  //取出最长度为了相加时遍历彻底
  let len = len1 > len2 ? len1 : len2;
  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) {
      str2 = '0' + str2;

    }
  } else {
    for (let i = 0; i < len2 - len1; i++) {
      str1 = '0' + str1;
    }
  }
  //转换成数组
  let arr1 = str1.split('').reverse();
  let arr2 = str2.split('').reverse();
  //定义一个数组保存每一项相加后的值

  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(parseInt(str1[i]) + parseInt(str2[i]));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      arr[i] = arr[i] - 10;
      arr[i + 1] = parseInt(arr[i + 1]) + 1;
    }
  }
  console.log(arr.reverse().join(''))
  return arr.reverse().join('');
}