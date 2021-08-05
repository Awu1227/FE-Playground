// Map巧解两数之和
// 真题描述：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 空间换时间，Map来帮忙
const twoSum = function (nums,target) {
  const len = nums.length;
  const map = new Map;
  for (let i = 0; i < len;i++){
    if (map.has(target - nums[i])) {
      return [map.get(target-nums[i]),i]
    }
    map.set(nums[i],i)
  }
}
let nums = [1, 4, 6, 7, 8];
let target = 10;
console.log(twoSum(nums, target));

// 强大的双指针法——合并两个有序数组
// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
/* 
 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
*/

const merge = function (nums1, m, nums2, n) {
  // 初始化两个指针的指向，初始化 nums1 尾部索引k
  let i = m - 1, j = n - 1, k = m + n - 1;
  // 当两个指针都没有遍历完，指针同步移动
  while (i >= 0 & j >= 0) {
    // 取较大的值，往前填补
      if(nums1[i]>=nums2[j]){
          nums1[k]=nums1[i]
          i--
          k--
      }else{
          nums1[k]=nums2[j]
          j--
          k--
      }
  }
  // nums2留下的情况，特殊处理一下
  while(j>=0){
      nums1[k]=nums2[j]
      j--
      k--
  }
};

// 三数求和问题
/* 
真题描述：给你一个包含 n 个整数的数组 nums，
判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
*/
 const threeSum = function(nums) {
  // 用于存放结果数组
  let res = [] 
  // 给 nums 排序
  nums = nums.sort((a,b)=>{
      return a-b
  })
  // 缓存数组长度
  const len = nums.length
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for(let i=0;i<len-2;i++) {
      // 左指针 j
      let j=i+1 
      // 右指针k
      let k=len-1   
      // 如果遇到重复的数字，则跳过
      if(i>0&&nums[i]===nums[i-1]) {
          continue
      }
      while(j<k) {
          // 三数之和小于0，左指针前进
          if(nums[i]+nums[j]+nums[k]<0){
              j++
             // 处理左指针元素重复的情况
             while(j<k&&nums[j]===nums[j-1]) {
                  j++
              }
          } else if(nums[i]+nums[j]+nums[k]>0){
              // 三数之和大于0，右指针后退
              k--
             
             // 处理右指针元素重复的情况
             while(j<k&&nums[k]===nums[k+1]) {
                  k--
              }
          } else {
              // 得到目标数字组合，推入结果数组
              res.push([nums[i],nums[j],nums[k]])
              
              // 左右指针一起前进
              j++  
              k--
             
              // 若左指针元素重复，跳过
              while(j<k&&nums[j]===nums[j-1]) {
                  j++
              }  
             
             // 若右指针元素重复，跳过
             while(j<k&&nums[k]===nums[k+1]) {
                  k--
              }
          }
      }
  }
  
  // 返回结果数组
  return res
};
// 上述左右指针相互靠近，这样特殊的指针形态又称对撞指针