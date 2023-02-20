export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
export const preOrder = (root) => {
  const res = [];
  preOrderHandler(root);
  function preOrderHandler(root) {
    if (!root) return;
    res.push(root.val);
    preOrderHandler(root.left);
    preOrderHandler(root.right);
  }
  return res;
};

export const inOrder = (root) => {
  const res = [];
  inOrderHandler(root);
  function inOrderHandler(root) {
    if (!root) return;
    inOrderHandler(root.left);
    res.push(root.val);
    inOrderHandler(root.right);
  }
  return res;
};

export const postOrder = (root) => {
  const res = [];
  postOrderHandler(root);
  function postOrderHandler(root) {
    if (!root) return;
    postOrderHandler(root.left);
    postOrderHandler(root.right);
    res.push(root.val);
  }
  return res;
};
