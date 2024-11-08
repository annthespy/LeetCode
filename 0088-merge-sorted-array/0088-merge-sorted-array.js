/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1.splice(m, nums1.length - m)
    // nums1 = nums1.concat(nums2)
    // nums1.sort((a, b) => a - b)
    // console.log('nums1', nums1)
    for (let i=0; i<m+n; i++) {
        if (i>=m) {
            nums1[i] = nums2[i-m]
        }
    }
    nums1.sort((a, b) => (a-b));
};