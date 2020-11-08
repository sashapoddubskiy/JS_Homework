var x = prompt('Введите число');
var n = prompt('В какую степень необходимо возвести введенное число?');

function pow(x, n) {
    var output = x;
  
    for (var i = 1; i < n; i++) {
      output *= x;
    }
  
    return output;
  }

  if (n < 1) {
    alert('Данные некорректны, введите корректные данные');
  } else {
    alert(pow(x, n));
  }

  //задание 2

    //способ 1

  function sumTo1(n) {
    var output2 = 0;
    for (var i = 1; i <= n; i++) {
      output2 += i;
    }
    return output2;
  }
  
  alert(sumTo1(11));

    //способ 2

    function sumTo2(n) {
        if (n == 1) return 1;
        return n + sumTo2(n - 1);
      }
      
      alert(sumTo2(37));

    //способ 3


    function sumTo3(n) {
        return n * (n + 1) / 2;
      }
      
      alert(sumTo3(55));

// вопрос 1. Самым быстрым вариантом будет формула, так как она выполнится лишь один раз и после него выдаст уже готовый результат.
// Самой медленной будет рекурсия, так как в каждой итерации, помимо исчисления, она будет вызывать еще и саму функцию заново, тем самым, еще больше нагружая память
// Цикл в данном случае будет выдавать результат и повышать его без лишней нагрузки

// вопрос 2. 
// не выполнится, так как запуск нашей функции в чистом виде приведет к переполнению стека вызова и выдаст ошибку "RangeError: Maximum call stack size exceeded."
// задание 3


var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];

function treeSum(arr) {
    var sum = 0;
   
    for (var i = 0; i < arr.length; i++) {
      if(typeof arr [i] == 'number' && !isNaN(arr[i])) {
        sum += arr [i];
    }
      else if(typeof arr [i] == 'object' && arr[i] != null && arr[i].length) {
          sum += treeSum(arr[i]); 
        } 
    } 
        
    return sum;
  }
  console.log(treeSum(arr));