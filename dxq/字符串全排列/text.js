function test(string) {
  var result = [];
  if (string.length === 1) {
    return [string];
  } else {
    //我觉得这个string的值是根据每次进入循环后返回来的preResult来定
    var preResult = test(string.slice(1));
    for (var j = 0; j < preResult.length; j++) {
      for (var k = 0; k < preResult[j].length + 1; k++) {
        //给空格中插入元素
        var temp = preResult[j].slice(0, k) + string[0] + preResult[j].slice(k);
        result.push(temp);
      }
    }
    return result;
  }
}