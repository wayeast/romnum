var powers = {
    3: "M",
    2: "C",
    1: "X",
    0: "I"
}

function segmentCalculator(numeral) {
    this.raccourcis = {
	"CCCC": "CD",
	"CDC": "D",
	"DCCCC": "CM",
	"XXXX": "XL",
	"XLX": "L",
	"LXXXX": "XC",
	"IIII": "IV",
	"IVI": "V",
	"VIIII": "IX"
    },

    this.numeral = numeral,

    this.getSegment = function(quotient) {
	var segment = "";
	for (var unit = 0; unit < quotient; unit++) {
	    segment += this.numeral;
	    if (segment in this.raccourcis) {
		segment = this.raccourcis[segment];
	    }
	}
	return segment;
    }
}

function getRomNum(num) {
    var romnum = ""
    for (var power = 3; power >= 0; power--) {
	divisor = Math.pow(10, power);
	quotient = Math.floor(num / divisor);
	var segment = new segmentCalculator(powers[power]).getSegment(quotient);
	romnum += segment;
	num = num % divisor;
    }
    return romnum;
}

function convertNumeral() {
    var input = parseInt(document.getElementById("input-area").value);
    document.getElementById("result-area").innerHTML = getRomNum(input);
}

// for (var i = 1; i <= 150; i++) {
//     console.log(i, "=>", getRomNum(i));
// }
