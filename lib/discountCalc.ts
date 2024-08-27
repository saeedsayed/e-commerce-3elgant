export function discountCalc(price: number, discount: number): number {
    // calc discount by discount percentage
    const newPrice = +(price - (price * discount) / 100).toFixed(2)
    // if discount is not exist return price without discount else return new price with discount
    return discount ? newPrice : price
}