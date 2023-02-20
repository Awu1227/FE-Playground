import threeSum from "./index";

/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 */
describe("三数之和", () => {
  it("示例1, nums = [-1,0,1,2,-1,-4]", () => {
    const nums = [-1, 0, 1, 2, -1, -4];

    const res = threeSum(nums);

    expect(res).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
});
