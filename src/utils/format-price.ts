const formatPrice = (price: number): string => {
    return `$ ${price.toLocaleString()}`;
}

export default formatPrice;