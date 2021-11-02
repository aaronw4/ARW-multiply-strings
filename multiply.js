var multiply = function(num1, num2) {
    let product = (Number(num1) * Number(num2)).toFixed()
    let answer = product.toString()

    return answer
};

console.log(multiply('123456789', '987654321'))