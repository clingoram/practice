from typing import Counter
class Solution:
  '''
  748. Shortest Completing Word

  Given a string licensePlate and an array of strings words, find the shortest completing word in words.

  A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

  For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

  Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

  Hints:
  Count only the letters (possibly converted to lowercase) of each word. If a word is shorter and the count of each letter is at least the count of that letter in the licensePlate, it is the best answer we've seen yet.

  Example 1:
  Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
  Output: "steps"
  Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
  "step" contains 't' and 'p', but only contains 1 's'.
  "steps" contains 't', 'p', and both 's' characters.
  "stripe" is missing an 's'.
  "stepple" is missing an 's'.
  Since "steps" is the only word containing all the letters, that is the answer.

  Example 2:
  Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
  Output: "pest"
  Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
  

  Constraints:
  1 <= licensePlate.length <= 7
  licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
  1 <= words.length <= 1000
  1 <= words[i].length <= 15
  words[i] consists of lower case English letters.
  '''
  def shortestCompletingWord(self,licensePlate: str, words: list[str]) -> str:
    # 給一字串licensePlate 以及一個字串陣列 words，找到 words 中最短的完成字詞。
    # 一個完成字詞為一字詞，其包含 licensePlate 中的所有字母(忽略數字及空白、大小寫)，若字母出現不只一次，則word字母出現次數需一樣
    # 如果有多個最短的字詞，則回傳第一個出現於 words 中的。

    # 過濾取得字母並轉小寫
    licenseChars = [char.lower() for char in licensePlate if char.isalpha()]
    # 計算字母出現次數
    licenseCount = Counter(licenseChars)
    print(licenseCount)
    words.sort(key=len)
    for word in words:
        wordCount = Counter(word)
      # 統計words出現的字母次數，是否有包含所有licensePlate的字母
        if all(wordCount[char] >= licenseCount[char] for char in licenseCount):
          return word
        
        
licensePlate = "1s3 PSt"
words = ["step","steps","stripe","stepple"]
# "steps"
sol = Solution()
print(sol.shortestCompletingWord(licensePlate, words))