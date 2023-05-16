const sum = (accumulator: number, currentValue: any) => {
    if (Number(currentValue)) {
        accumulator += Number(currentValue)
    }
    return accumulator
}

export function sumNumbers(expression:string): number {
    var separator:string
    ({ separator, expression } = extractSeparator(expression))
    let numbers = expression.split(separator)
    const total = numbers.reduce(sum, 0);
    return total;
}



function extractSeparator(expression: string) {
    var separator = ","
    if (expression.startsWith('//')) {
        // has custom separator
        separator = expression.charAt(2)
        expression = expression.slice(4)
    }
    return { separator, expression }
}

