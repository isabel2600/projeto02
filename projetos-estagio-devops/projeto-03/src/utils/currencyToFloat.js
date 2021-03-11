function currencyToFloat (value) {

    if (typeof value == 'number') {
    
        return value;

    }

    const valueWithoutComas = value.split('.').join('').split(',').join('.');
    return Number(valueWithoutComas.replace(/[^0-9.]+/g, ''));

}

export { currencyToFloat };