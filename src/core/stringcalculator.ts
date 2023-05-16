export function stringCalculator(values:string): number {
    var separator = ","
    if(values.startsWith('//')) {
        // has configurable separator
        separator = values.charAt(2)
        values = values.slice(4)

    }
    let numbers = values.split(separator)
    const sumReducer = (accumulator: number, currentValue: any) => {
        if (Number(currentValue)) {
            return accumulator + Number(currentValue)
        }
        return accumulator
    }
    const sum = numbers.reduce(sumReducer, 0);

    return sum;
}



