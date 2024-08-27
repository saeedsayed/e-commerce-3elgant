
export function calcStarRate(arrRate: number[]): number {
    // if array is empty return 5 star
    if (arrRate.length === 0) return 5
    const reviews = arrRate;
    // calc count of rates
    const count = reviews.reduce((prev, current) => prev + current, 0);
    // calc result
    const result = (count / reviews.length);
    // return result as decimal number
    return +result.toFixed(0);
}