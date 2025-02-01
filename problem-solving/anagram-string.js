// Given an array of strings, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(arr) {
  const map = new Map();

  for (const word of arr) {
    // Sort the characters of the word to form a key.
    const key = word.split('').sort().join('');
    
    // If the key is not in the map, initialize an array.
    if (!map.has(key)) {
      map.set(key, []);
    }
    
    // Push the original word into the correct anagram group.
    map.get(key).push(word);
  }
  
  // Convert the map values to an array of arrays.
  return Array.from(map.values());
}

console.log(groupAnagrams(input));
