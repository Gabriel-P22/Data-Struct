

// O(N2)

function hasValueInsideListOn2(listOne, listTwo) {
    
    for (let i = 0; i < listOne.length; i++) {
        for (let j = 0; j < listTwo.length; j++) {
            if (listOne[i] === listTwo[j]) {
                return true;
            }
        }
    }
    return false;
}

let listA = [1, 2, 3, 4, 5];
let listB = [6, 7, 11, 9, 10];

// console.log(hasValueInsideListOn2(listA, listB));

// O(N)

function hasValueInsideListOn(listOne, listTwo) {
    let map = {};

    for (let i = 0; i < listA.length; i++) {
        map[listOne[i]] = true;
    }

    for (let j = 0; j < listTwo.length; j++) {
        if (map[listTwo[j]]) return true;
    }

    return false;
}


// console.log(hasValueInsideListOn(listA, listB));


//two sum problems

function twoSum(nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; //2
        const missingNumber = target - num; //9 - 7 = 2;

        if(missingNumber in obj) {
            return [i, obj[missingNumber]]
        }

        obj[num] = i; // {2: 0, 15: -6, }
        // console.log(obj);
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([2, 15, 11, 7], 22)); // [0, 1]

/*

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

//Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let rest = target - num;

        if(rest in obj) {
            return [i, obj[rest]];
        }

        obj[num] = i;
    }
};


/*

2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1

*/

//Solution:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let List = new ListNode(0);
    let head = List;

    let sum = 0;
    let carry = 0;

    while(l1 !== null || l2 !== null || sum !== 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }

    return List.next;
};


/*

3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    
    if(s.lentgh < 2) return s.length;

    const map = {};

    let front = 0;
    let back = 0;
    let maxLength = 0;

    for (; front < s.length; front += 1) {
        const exists = map[s[front]];
        if(exists !== undefined && back <= exists) {
            back = exists + 1;
        }
        map[s[front]] = front;
        maxLength = Math.max(front - back +1, maxLength);
    }
    return maxLength;
};


/*

4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/

//Solution: 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr = nums1.concat(nums2);
    arr.sort((a,b) => (a-b));
    let n = arr.length;

    if (n % 2 === 0) {
        return ((arr[n/2]+arr[n/2-1]) / 2);
    } else {
        return arr[Math.floor(n/2)];
    }
};