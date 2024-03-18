
const identifyCardType = (cardNumber: string): string => {
    const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    const mastercard = new RegExp('^5[1-5][0-9]{14}$');
    const amex = new RegExp('^3[47][0-9]{13}$');
    const discover = new RegExp('^6(?:011|5[0-9]{2})[0-9]{12}$');
    const diners = new RegExp('^3(?:0[0-5]|[68][0-9])[0-9]{11}$');
    const jcb = new RegExp('^(?:2131|1800|35\\d{3})\\d{11}$');

    if (visa.test(cardNumber)) {
        return 'visa';
    } else if (mastercard.test(cardNumber)) {
        return 'mastercard';
    } else if (amex.test(cardNumber)) {
        return 'amex';
    } else if (discover.test(cardNumber)) {
        return 'discover';
    } else if (diners.test(cardNumber)) {
        return 'diners';
    } else if (jcb.test(cardNumber)) {
        return 'jcb';
    }
    return 'unknown';
}

export default identifyCardType;