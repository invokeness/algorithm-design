
function tree(root) {
  if(!root) {
    return true;
  }
  //遍历根节点的左右节点
  let left = treeCop(root.left);
  let right = treeCop(root.right);
  let diff = left - right;
  if(diff > 1 || diff <-1){
    return false;
  }
  //开始遍历左子树的左右子树 右子树的左右子树  其中左右子树的节点就相当于根节点 求它们的深度
  return tree(root.left) && tree(root.right);
}
function treeCop(root) {
  if(!root) {
    return 0;
  }
  //计算左右节点的深度
  let left = treeCop(root.left);
  let right = treeCop(root.right);
  //最大深度包括它的根节点
  return (left>right)?left+1:right+1;
}