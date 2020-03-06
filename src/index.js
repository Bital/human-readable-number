module.exports = function toReadable (number) {

	if(number == 0) {
		return 'zero';
	}

	const numbers = [
	    ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
		['ten', 'eleven', 'twelve',  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
	]

	
	let strNumber = number.toString();
	let order = strNumber.length - 1;

	const converter = {
        '2': (val) =>  [numbers[2][val] + ' hundred'].concat(converter['1'](strNumber.substr(-2, 1))),
        '1': (val) =>  (val == 1) ? [numbers[1][strNumber.substr(-1, 1)]] : [numbers[0][val]].concat(converter['0'](strNumber.substr(-1, 1))),
        '0': (val) =>  [numbers[2][val]]
    }

	return  converter[order](strNumber.substr(-(strNumber.length), 1)).filter((val) => val).join(' ');
}


	

