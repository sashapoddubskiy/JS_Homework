var nameList=['Дима', 'Вова', 'Хрюша', 'Степашка'];
var sortedNames=[];

function nameSorting(){
    for(i=0; i < nameList.length; i++){
        sortedNames.push({name: nameList[i]});
    }
}

nameSorting();
console.log(sortedNames);

//

var timeArr = ['00', '13', '24'];


    timeArr.forEach(function (item, i, timeArr){
        console.log('текущее время:'+ timeArr[i])
    }
    );

//


    function textChecker() {
        var counter = 0;
        var textpart = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
        var textToCheck = 'оооооооооо!';
        var firstTransform = textToCheck.toLowerCase();
        for (var i = 0; i < firstTransform.length; i++)
            for (var j = 0; j < textpart.length; j++)
                if (firstTransform[i] === textpart[j]) {
                    counter++;
                    break;
                }
        return counter ? counter : 'здесь нет гласных!';
    }

    console.log(textChecker());

//

    function countSentensesLetters(){
        var text = 'Привет, студент! Студент... Как дела, студент?';
        var words = text.split(/[.?!]+/);
        var words2 = words[0].split('')
        var counter = 0;
        /*for(i=0; i<words2.length; i++)
            if(words2[i] != ','){
                counter++;
            }
            else if(words2[i] == null){
                counter--;
            }
        console.log(words2);
        console.log(counter);*/
        console.log(words[0] + ' \nдлина:' + words[0].length);
        console.log(words[1] + ' \nдлина:' + words[1].length);
        console.log(words[2] + ' \nдлина:' + words[2].length);


    }
    countSentensesLetters();

