import { preOrder, inOrder, postOrder, TreeNode } from "./index";

const root = new TreeNode("A");
root.left = new TreeNode("B");
root.right = new TreeNode("C");
root.right.right = new TreeNode("F");
root.left.left = new TreeNode("D");
root.left.right = new TreeNode("E");

describe("二叉树遍历", () => {
  it("前序遍历", () => {
    const arr = preOrder(root);
    expect(arr).toEqual(["A", "B", "D", "E", "C", "F"]);
  });
  it("中序遍历", () => {
    const arr = inOrder(root);
    expect(arr).toEqual(["D", "B", "E", "A", "C", "F"]);
  });
  it("后序遍历", () => {
    const arr = postOrder(root);
    expect(arr).toEqual(["D", "E", "B", "F", "C", "A"]);
  });
});
