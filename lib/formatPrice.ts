export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("co-CO", {
        style: "currency",
        currency: "COP",
    }).format(price);
};
