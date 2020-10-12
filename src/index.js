module.exports = function toReadable(number) {
    let array = number.toString().split('');
    let arrNumto19 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrNumFrom20 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let part = [];
    let res = '';

    if (number === 0) {
        return 'zero';
    }

    if (array.length === 3) {
        part = Number(array[0].toString());
        res = arrNumto19[part - 1] + ' ' + 'hundred';

        part = Number(array[1].toString());
        if (part === 0) {
            if (array[2] === '0') {
                return res;
            } else {
                part = Number(array[2].toString());
                res += ' ' + arrNumto19[part - 1];
                return res;
            }
        }
        part = array.join('').slice(1, 3);
        part = Number(part);
        if (part >= 10 && part <= 19) {
            return res += ' ' + arrNumto19[part - 1];
        } else {
            part = Number(array[1].toString());
            res += ' ' + arrNumFrom20[part - 2];

            if (array[2] === '0') {
                return res;
            } else {
                part = Number(array[2].toString());
                res += ' ' + arrNumto19[part - 1];
                return res;
            }
        }
    } else if (array.length === 2) {
        part = Number(array[0].toString());
        if (part === 1) {
            part = array.join('').slice(0, 2);
            part = Number(part);
            return res = arrNumto19[part - 1];
        } else {
            res += arrNumFrom20[part - 2];

            if (array[1] === '0') {
                return res;
            } else {
                part = Number(array[1].toString());
                return res += ' ' + arrNumto19[part - 1];
            }
        }




    } else {
        return res = arrNumto19[number - 1];
    }

}
