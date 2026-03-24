var topKFrequent = function(words, k) {
    let storage = {}
    let result = []
    for (var i = 0; i < words.length; i++) {
        let currentWord = words[i]
        if (storage[currentWord]) {
            storage[currentWord]++
        } else (storage[currentWord] = 1)
    }
    const sortableArray = Object.entries(storage)
    sortableArray.sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1]  // higher frequency first
        return a[0].localeCompare(b[0])          // same frequency: alphabetical
    })
    let index = 0
    while (k > 0) {
        result.push(sortableArray[index][0])
        index++
        k--
    }
    return result
};