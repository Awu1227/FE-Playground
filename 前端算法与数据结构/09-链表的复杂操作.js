// 快慢指针，删除链表的倒数第N个结点
// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
const removeNthFromEnd = function (head, n) {
  // 初始化dummy结点
  const dummy = new ListNode();
  // dummy指向头结点
  dummy.next = head;
  // 初始化快慢指针，都指向dummy结点
  let slow = dummy;
  let fast = dummy;
  // 快指针走N步
  while (n !== 0) {
    fast = fast.next;
    n--
  }
  // 快指针走到最后一个节点停下来
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // 删除第N个结点
  slow.next = slow.next.next
  return dummy.next;
}
// 多指针法——链表反转

// 完全反转一个链表
// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
const reverseList = function (head) {
  // 初始化前驱结点为null
  let pre = null;
  // 初始化目标结点为头结点
  let cur = head;
  // 只要头结点不为null，遍历就得继续
  while (cur !== null) {
    // 记录一下next结点
    let next = cur.next;
    // 反转指针
    cur.next = pre;
    // pre往前走一步
    pre = cur;
    // cur往前走一步
    cur = next;
  }
   // 反转结束后，pre就会变成新链表的头结点
  return pre
}
// 局部反转一个链表
// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 入参是头结点、m、n
const reverseBetween = function(head, m, n) {
  // 定义pre、cur，用leftHead来承接整个区间的前驱结点
  let pre,cur,leftHead
  // 别忘了用 dummy 嗷
  const dummy = new ListNode()  
  // dummy后继结点是头结点
  dummy.next = head
  // p是一个游标，用于遍历，最初指向 dummy
  let p = dummy  
  // p往前走 m-1 步，走到整个区间的前驱结点处
  for(let i=0;i<m-1;i++){
      p = p.next
  }
  // 缓存这个前驱结点到 leftHead 里
  leftHead = p
  // start 是反转区间的第一个结点
  let start = leftHead.next  
  // pre 指向start
  pre = start
  // cur 指向 start 的下一个结点
  cur = pre.next
  // 开始重复反转动作
  for(let i=m;i<n;i++){
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
  //  leftHead 的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre
  // 将区间内反转后的最后一个结点 next 指向 cur
  start.next=cur
  // dummy.next 永远指向链表头结点
  return dummy.next
};
