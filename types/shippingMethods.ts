export interface ShippingMethods {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    methodName: string;
    increases: number;
    typeIncrease: string;
}