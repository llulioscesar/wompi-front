
const identifyCardType = (cardNumber: string): string => {
    const firstFourDigits = cardNumber.slice(0, 4);

    const visa = new RegExp('^4[0-9]{3}');
    const mastercard = new RegExp('^5[1-5][0-9]{2}');
    const amex = new RegExp('^3[47][0-9]{2}');
    const discover = new RegExp('^6011');
    const diners = new RegExp('^3(?:0[0-5]|[68][0-9])');
    const jcb = new RegExp('^(?:2131|1800|35\\d{2})');

    if (visa.test(firstFourDigits)) {
        return 'visa';
    } else if (mastercard.test(firstFourDigits)) {
        return 'mastercard';
    } else if (amex.test(firstFourDigits)) {
        return 'amex';
    } else if (discover.test(firstFourDigits)) {
        return 'discover';
    } else if (diners.test(firstFourDigits)) {
        return 'diners';
    } else if (jcb.test(firstFourDigits)) {
        return 'jcb';
    }
    return 'unknown';
}

export default identifyCardType;