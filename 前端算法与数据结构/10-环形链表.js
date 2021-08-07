// 真题描述：给定一个链表，判断链表中是否有环。
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 入参是头结点
const hasCycle = function (head) {
  // 只要结点存在就继续遍历
  while (head) {
    if (head.flag) {
      return true
    } else {
      head.flag = true;
      head = head.next
    }
  }
  return false
}

// 环形链表衍生问题——定位环的起点
// 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  while (head) {
    if (head.flag) {
     return head
    } else {
      head.flag = true
      head = head.next
   }
  }
 return null 
}