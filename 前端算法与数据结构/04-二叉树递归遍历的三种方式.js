// 定义二叉树的结构
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val:'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val:'F'
    }
  }
}
// 递归函数的编写要点：递归式和递归边界

// 先序遍历
function preOrder(root) {
  // 递归边界，root为空
  if (!root) {
    return
  }
  // 输出当前遍历的节点值
  console.log(`当前遍历的值是:${root.val}`);
  // 递归遍历左子树
  preOrder(root.left);
  // 递归遍历右子树
  preOrder(root.right)
}
console.log('--------先序遍历----------');
preOrder(root)

// 中序遍历
function inOrder(root) {
  // 递归边界，root为空
  if (!root) {
    return
  }
  // 递归遍历左子树
    inOrder(root.left);
  // 输出当前遍历的节点值
  console.log(`当前遍历的值是:${root.val}`);
  // 递归遍历右子树
  inOrder(root.right)
}
console.log('--------中序遍历----------');
inOrder(root)

// 后序遍历
function postOrder(root) {
  // 递归边界，root为空
  if (!root) {
    return
  }
  // 递归遍历左子树
  postOrder(root.left);
  // 递归遍历右子树
  postOrder(root.right)
  // 输出当前遍历的节点值
  console.log(`当前遍历的值是:${root.val}`);

}
console.log('--------后序遍历----------');
postOrder(root)