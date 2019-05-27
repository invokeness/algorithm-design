 //判断二叉树是不是对称二叉树
function isSymmetrical(root) {
  //首先先通过一个函数传入根节点
  if(root === null) {
    return false;
  }
  let isSymmetricalText = function(left, right) {
    //如果没有左右子树意味着只有根节点则属于对称
    if(left === null && right === null) {
      return true;
    }
    //如果左右子树其中有一个为null肯定不对称
    if(left === null || right === null) {
      return false;
    }
    //如果判断的两个对称位置节点的值不一样也不对称
    if(left.value !== right.value){
      return false;
    }
    //寻找对称位置的值是否正确
    return isSymmetricalText(left.left, right.right) && isSymmetricalText(left.right, right.left)
  }
 return isSymmetricalText(root.left, root.right);
 }

