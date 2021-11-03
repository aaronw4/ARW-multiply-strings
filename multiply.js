var multiply = function(num1, num2) {
    let numArr = []
    let exp = 0

    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    
    for (var i = num1.length -1; i >= 0; i--) {
        let number = ''
        let remainder = 0
        for (var j = 0; j < exp; j++) {
            number = number + '0'
        }
        for (var k = num2.length - 1; k >= 0; k--) {
            let digit = (Number(num1[i]) * Number(num2[k])) + remainder
            remainder = 0
            while (digit > 9) {
                digit = digit - 10
                remainder++
            }
            number = digit.toString() + number
        }
        exp++
        if (remainder > 0) {
            number = remainder.toString() + number
        }
        numArr.push(number)
    }

    let maxLength = 0
    for (i in numArr) {
        if (numArr[i].length > maxLength) {
            maxLength = numArr[i].length
        }
        numArr[i] = numArr[i].split('').reverse().join('')
    }
    
    let answer = ''
    let remainder = 0
    for (var i = 0; i < maxLength; i++) {
        let sum = 0 + remainder
        remainder = 0
        for (var j = 0; j < numArr.length; j++) {
            sum = sum + (Number(numArr[j][i]) || 0)
        }
        while (sum > 9) {
            sum = sum - 10
            remainder++
        }
        answer = sum.toString() + answer
    }
    if (remainder > 0) {
        answer = remainder.toString() + answer
    }

    return answer
};

console.log(multiply('123456789', '987654321'), "121932631112635269")

"121932631112635269"