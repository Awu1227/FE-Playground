export default (nums) => {
  const res = [];
  // 双指针解法，需排序
  let arr = nums.sort((a, b) => a - b);
  const len = arr.length;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        // 左指针右移
        j++;
        if (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 右指针左移
        k--;
        if (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
      } else {
        // 找到了，存入
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
      }
    }
  }
  return res;
};
