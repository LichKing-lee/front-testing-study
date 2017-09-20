let calculator = {
    plus: (...args) => args.reduce((num1, num2) => num1 + num2),
    minus: (...args) => args.reduce((num1, num2) => num1 - num2)
};