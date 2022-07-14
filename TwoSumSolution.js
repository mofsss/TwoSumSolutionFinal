/**
 nums = [2,5,8,9]
 target = 10
 we return [2,8]
 */
var twosum = function(nums,target) {
    for(var i = 0; i<nums.length; i++){
        for(var j = i=1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
}