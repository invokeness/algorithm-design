var num = 0;
var a=0;
var minDiffInBST = function(root) {
  let result = [];
  if(root === null){
    return 0;
  }
  num++;
  if(root.left === null) {

    result.push(num)
  }else if(root.right === null) {

    result.push(num)
  }
  minDiffInBST(root.left);
  minDiffInBST(root.right);
  num--;
  for(let i=0;i<result.length;i++) {
    if(result[i] >= a){
      a = result[i];
    }
  }
  return a;
};