//二叉树遍历 前序中序后序
//前序遍历 先遍历根节点 再遍历根节点的左子树 接下来遍历根节点的右子树 (先将右子树push到栈)
function OrderUnRecur(node) {
  //null undefined '' false NaN都会转换成false
  if(!node) {
    throw new Error('empty tree');
  }
  let stack = [];
  stack.push(node);
  while (stack.length !== 0) {
    node = stack.pop();
    console.log(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
//中序遍历 先要打印左节点 再打印根节点 接着打印右节点
function OrderUnRecur(node) {
  //先将根节点放到栈中 再将左节点放入栈中 当左节点为空时 取出依次打印 再指向右节点 将右节点放入栈中 若右节点为空再打印
  if(!node) {
    throw new Error('empty tree');
  }
  let stack = [];
  while(stack.length !== 0 || node) {
    if(node) {
      stack.push(node);
      node = node.left;
    }else{
      node = stack.pop();
      console.log(node.val);
      node = node.right;
    }
  }
}
//后序遍历
function OrderUnRecur(node) {
  //temp为了保存当前节点 result为了保存最后得结果
  if(!node) {
    throw new Error('empty tree');
  }
  let result = [];
  let stack = [];
  let temp = node;
  stack.push(node);
  while(stack.length){
    //如果当前节点的left存在并且没有被标记 将该节点设为当前节点 并标记为touched=left;
    if(temp.left && !temp.touched) {
      temp.touched ='left';
      temp = temp.left;
      stack.push(temp);
      continue;
    }
    //如果当前节点存在right并且left被标记 则该节点被标记为right并且赋值为当前节点
    if(temp.right && temp.touched !== 'right') {
      temp.touched = 'right';
      temp = temp.right;
      stack.push(temp);
      continue;
    }
    //到末尾节点时取出最后的节点并且打印
    let node = stack.pop();
    //清除它的标记
    node.touched && delete node.touched;
    result.push(node.value);
    //取栈顶的元素为当前节点
    temp = stack.length? stack[stack.length-1]:null;
  }
}
