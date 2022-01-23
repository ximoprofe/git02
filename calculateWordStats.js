const calculateWordStats = (words, letterStats)=>{
  const wordStats = {};
  words.forEach(word => {
    const wordLetters = [...new Set(word.split(''))];
    wordStats[word] = wordLetters.reduce((acc, letter)=> acc + letterStats[letter],0);
  });
  return wordStats;
}
var a = [];
console.log(calculateWordStats(["hola", "hola", "adios", "test"],a));
