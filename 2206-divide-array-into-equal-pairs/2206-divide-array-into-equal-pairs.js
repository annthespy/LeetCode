/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    let seen={}
    for(let i=0;i<nums.length;i++){
        if(seen[nums[i]]){
            seen[nums[i]]++
        }else{
            seen[nums[i]]=1
        }
    }
    let obj=Object.entries(seen)
    for(let i=0;i<obj.length;i++){
        if(obj[i][1]%2!==0){
        return false
        }
    }
    return true
};