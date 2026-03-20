var characterReplacement = function(s, k) {
    // "AABABBA", k = 1
    let count = {}
    let left = 0 // should only move when the window is invalid
    let maxLength = 0 // longest valid window
    let mostFreqCount = 0 // most frequent char in window
    for (let right = 0; right < s.length; right++) {
        // add right char to counts
        if (count[s[right]]) {
            count[s[right]]++
        } else {
            count[s[right]] = 1
        }
        // update most frequent char count
        mostFreqCount = Math.max(mostFreqCount, count[s[right]])

        // shrink when window size - mostFreqCount > k
        while ((right - left + 1) - mostFreqCount > k) {
            // when you shrink the window, the leftmost character is no longer in the window
            count[s[left]]--
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};