function findSameNode(root, a, b) {
if(!root) {
  return null;
}
//当两个节点在同一侧 首先返回得元素为他们的公共节点
if(root === a || root === b) {
  return root;
}
let left = findSameNode(root.left, a, b);
let right = findSameNode(root.right, a, b);
//当着两个节点在根节点得左右两边时 公共节点为跟节点
if(left && right) {
  return root;
}
//left和right其中一个为空得话 说明在一侧 它得值也正好时返回得公共节点
return left?left:right;
}