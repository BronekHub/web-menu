export function convertToCurrency(price: number): string {
    return price.toLocaleString("en-US", { style: "currency", currency: "PLN" });
}