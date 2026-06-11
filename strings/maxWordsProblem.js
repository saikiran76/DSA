function mostWordsFound(sentences) {
  // Write your logic here
  let maxWordslen = sentences[0].split(" ").length;
  for(let i = 1; i<sentences.length; i++) {
    const wordArrlen = sentences[i].split(" ").length;
    if(wordArrlen > maxWordslen) {
      maxWordslen = wordArrlen;
    }
  }
  return maxWordslen;
}

module.exports = { mostWordsFound };
