function replace(sentence, word1, word2)

{   let newSentence = '';
    let sentenceSplit = sentence.split(" ");
    for(let index=0; index<sentenceSplit.length; index++)
    {
        if(sentenceSplit[index].toLowerCase() == word1.toLowerCase())
        {
            sentenceSplit[index]= word2;
        }
        newSentence += sentenceSplit[index] + ' ';
    }
    console.log(newSentence);
}


replace("dog barks", "dog", "Cat");