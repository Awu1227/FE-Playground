// 链表的合并
// 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const mergeTwoLists = function(l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode()
  // cur 这里就是咱们那根“针”
  let cur = head
  // “针”开始在 l1 和 l2 间穿梭了
  while(l1 && l2) {
      // 如果 l1 的结点值较小
      if(l1.val<=l2.val) {
          // 先串起 l1 的结点
          cur.next = l1
          // l1 指针向前一步
          l1 = l1.next
      } else {
          // l2 较小时，串起 l2 结点
          cur.next = l2
          // l2 向前一步
          l2 = l2.next
      }
      // “针”在串起一个结点后，也会往前一步
      cur = cur.next 
  }
  // 处理链表不等长的情况
  cur.next = l1!==null?l1:l2
  // 返回起始结点
  return head.next
};

// 链表节点的删除
// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const deleteDuplicates = function(head) {
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head;
  // 遍历链表
  while(cur != null && cur.next != null) {
      // 若当前结点和它后面一个结点值相等（重复）
      if(cur.val === cur.next.val) {
          // 删除靠后的那个结点（去重）
          cur.next = cur.next.next;
      } else {
          // 若不重复，继续遍历
          cur = cur.next;
      }
  }
  return head;
};
// 链表的遍历：while循环

// 删除问题的延伸——dummy结点登场
// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
const deleteDuplicates1 = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if(!head || !head.next) {
      return head
  }
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    // 对cur后面的两个结点进行比较
    if (cur.next.val===cur.next.next.val) {
      // 若值重复，则记下这个值
      let val = cur.next.val
      while (cur.next&&cur.next.val===val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}