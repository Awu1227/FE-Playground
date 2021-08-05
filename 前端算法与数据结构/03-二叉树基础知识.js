// 二叉树编码实现，在JS中，二叉树使用对象来定义
// 在定义二叉树构造函数时，我们需要把左侧子节点和右侧子节点都预置为空
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 新建一个二叉树节点
const node = new TreeNode(1);
// 以这个节点为根节点，我们可以通过给left/right赋值拓展其子树信息，延展出一颗二叉树。
node.left = new TreeNode(2);
node.right = new TreeNode(3);
