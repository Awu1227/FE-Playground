// 栈和队列的实现一般都要依赖于数组

// 栈： push和pop方法
// 队列：push和shift方法

// 链表：以嵌套的对象的形式来实现的
const listNode1 = {
  // 数据域
  val: 1,
  // 指针域，指向下一个结点
  next: {
      val:2,
      next: {}
  }
}
// 链表节点的创建，创建链表节点需要一个构造函数
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node1 = new ListNode(1)
node1.next = new ListNode(2)
// 这样就创建一个数据域值为1，next节点数据域为2的链表节点

// 链表元素的添加
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)     
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3

// 链表元素的删除
node1.next = node3.next
// 链表的添加和删除关注前驱和后继节点

// 链表和数组的辨析
// 数组增加/删除操作的的时间复杂度是O(n)，链表增加/删除操作的时间复杂度是O(1)
// JS中的数组未必是真正的数组，因为JS数组中可以定义不同类型的数据，非连续内存，底部采用哈希映射分配内存空间
// 链表的优点是添加和删除元素不需要挪动多余的元素