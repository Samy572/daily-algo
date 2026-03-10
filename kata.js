// 6kyu
// change snake case to camelCase
function toCamelCase(str) {
	let result = [];
	let refactor = '';
	[...str].forEach((el, i) => {
		if (el === '-' || el === '_') {
			result.push(i + 1);
		}
	});
	for (let i = 0; i < [...str].length; i++) {
		if (result.includes(i)) {
			refactor += [...str][i].toUpperCase();
		} else {
			refactor += str[i];
		}
	}
	return [...refactor].filter((el) => el !== '-' && el !== '_').join('');
}

// 7kyu
// return largest pair sum
function largestPairSum(numbers) {
	const sortedArr = numbers.sort((a, b) => b - a);
	return sortedArr[0] + sortedArr[1];
}

largestPairSum([3, 3, 4, 8, 8, 6]);

// 6kyu

function isValidWalk(walk) {
	if (walk.length !== 10) {
		return false;
	}
	let east = 0;
	let west = 0;
	let north = 0;
	let south = 0;

	walk.forEach((element) => {
		switch (element) {
			case 'e':
				east++;
				break;
			case 'w':
				west++;
				break;

			case 'n':
				north++;
				break;

			case 's':
				south++;
				break;
		}
	});
	if (north === south && east === west) {
		return true;
	}
	return false;
}
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);

// 6kyu
// return sum of all natural multiple of 3 and 5
function solution(number) {
	if (number <= 0) {
		return 0;
	}
	let result = [];
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) result.push(i);
	}
	return result.reduce((a, b) => (a += b), 0);
}

solution(25);

// 8kyu Remove 0 at the end ex 10500 => 105

function noBoringZeros(n) {
	if (n === 0) {
		return 0;
	}
	let findArrIndex = Array.from(String(n)).findLastIndex((el) => el !== '0');
	let res = arr.slice(0, findArrIndex + 1).join('');
	return parseInt(res);
}
noBoringZeros(0);

// 7kyu sum all odd number between 1 and n
function OddNumber(n) {
	return Array.from({ length: n }, (_, i) => i + 1)
		.filter((el) => el % 2 !== 0)
		.reduce((acc, curr) => (acc += curr));
}

OddNumber(42);

// 7kyu change last character to capitalize
function testit(s) {
	let splitStr = s.split(' ');
	return splitStr
		.map((el) => el.slice(0, -1) + el.slice(-1).toUpperCase())
		.join(' ');
}
testit('a ab vv cfge');

//7kyu removes all vowels from a string

function disemvowel(str) {
	const vowels = 'aeiou';
	return str
		.split('')
		.filter((el) => !vowels.includes(el))
		.join('');
}

disemvowel('hello comment ca va today');

// 7kyu return price of shopping cart

function getTotal(arr) {
	const total = arr.reduce((acc, curr) => {
		return acc + curr.quantity * curr.price;
	}, 0);
	return total;
}

getTotal(
	(cart = [
		{
			product: 'shoes',
			quantity: 7,
			price: 50,
		},
		{
			product: 'laptop',
			quantity: 1,
			price: 2010,
		},
		{
			product: 'phone',
			quantity: 2,
			price: 450,
		},
	]),
);

// 7kyu return a counter of the number of word in a string format {h: 1, e:1, l: 3 ect...}
function countWords(str) {
	return str.split('').reduce((acc, letter) => {
		if (letter !== ' ') {
			if (acc[letter] === undefined) {
				acc[letter] = 0;
			}
			acc[letter] += 1;
		}
		return acc;
	}, {});
}

countWords('code wars code');

// kyu 7 return an array of only numbers
function filter_list(l) {
	return l.filter((el) => typeof el === 'number');
}

filter_list(['a', 'b', 1, 2]);

// kyu 7 return non-negative integer as an argument and return it with its digits in descending order ex 1745 => 7541

function descendingOrder(n) {
	let arr = n
		.toString()
		.split('')
		.map(Number)
		.sort((a, b) => b - a);
	return Number(arr.join(''));
}

descendingOrder(1745);

// kyu 6

function likes(names) {
	switch (names.length) {
		case 1:
			return `${names[0]} likes this`;
			break;
		case 2:
			return `${names[0]} and ${names[1]} like this`;
			break;
		case 3:
			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
			break;
		case 0:
			return 'no one likes this';
			break;
		default:
			return `${names[0]}, ${names[1]} and ${names.length} others like this`;
			break;
	}
}

likes([]);

// 6kyu create phone number
function createPhoneNumber(numbers) {
	const [a, b, c, d, e, f, g, h, i, j] = numbers;
	return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

// 7kyu find the middle character
function getMiddle(s) {
	const isEven = s.length % 2 === 0;
	let midRange = s.length / 2;
	if (isEven) {
		return s.slice(midRange - 1, midRange + 1);
	}
	return s.length > 0 ? s[Math.round(midRange - 1)] : s[0];
}

getMiddle('testo');

// 7kyu square every digit
function squareDigits(num) {
	const res = Array.from(String(num), Number)
		.map((el) => el * el)
		.join('');
	return parseInt(res);
}

squareDigits(3212);
// 8kyu
function repeatStr(n, s) {
	return Array(n).fill(s).join('');
}

repeatStr(3, '*');

// 7kyu return the length of the shortest word
function findShort(s) {
	let res = s.split(' ').sort((a, b) => a.length - b.length);
	return res[0].length;
}

findShort(
	`voic uin test debitcoin take over the world maybe who knows perhaps`,
);

// 7kyu return true if the string is an isogram false if not

function isIsogram(str) {
	let set = new Set(str.toLowerCase());
	return Array.from(set).join('') === str.toLowerCase();
}

isIsogram('isogram');

// 7kyu return biggest and smallest number from a string

function highAndLow(numbers) {
	let res = numbers
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);
	return `${res[numbers.length - 1]} ${res[0]}`;
}

highAndLow('1 2 3 45 8 -9 12');

// 7 kyu define if the number is a square
var isSquare = function (n) {
	return Number.isInteger(Math.sqrt(n));
};

isSquare(-25);

// 5kyu moove zero at the end
function moveZeros(arr) {
	let result = [];
	let zro = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			result.push(arr[i]);
		} else {
			zro.push(arr[i]);
		}
	}
	return [...result, ...zro];
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);

//5 kyu

function pigIt(str) {
	return str
		.split(' ')
		.map((el) => `${el.slice(1)}${el[0]}ay `)
		.join('');
}
pigIt('Pig latin is cool'); // should return igPay atinlay siay oolcay

// 5 kyu return the difference of two arrays
function arrayDiff(a, b) {
	let res = [...a, ...b];
	return res.filter((item) => !b.includes(item));
}

arrayDiff([1, 2, 3], [1, 2]);

// 7 kyu find the first non repeated character
function firstNonRepeated(s) {
	const arr = s.split('');
	let result = '';
	for (const charIndex in arr) {
		let findUnique = arr.filter((el) => el === arr[charIndex]);
		if (findUnique.length === 1) {
			return (result += arr[charIndex]);
		}
	}
	return result.length > 1 ? result : null;
}

firstNonRepeated('tttat');

// 7kyu compare two string

function XO(str) {
	return (
		str
			.toLowerCase()
			.split('')
			.filter((el) => el === 'o').length ===
		str
			.toLowerCase()
			.split('')
			.filter((el) => el === 'x').length
	);
}

XO('xo');

// 6kyu reverse string if the length of the string is greater than or equal to 5
function spinWords(string) {
	let res = string
		.split(' ')
		.map((el) => (el.length >= 5 ? el.split('').reverse().join('') : el));
	return res.join(' ');
}

// 5kyu return first non repeatable char
function firstNonRepeatingLetter(s) {
	const arr = s.split('');
	let result = '';
	for (const charIndex in arr) {
		let findUnique = arr.filter((el) => el === arr[charIndex]);
		if (findUnique.length === 1) {
			return (result += arr[charIndex]);
		}
	}
	return result.length > 1 ? result : null;
}

firstNonRepeatingLetter('bcca');

// 7kyu FizzBuzz fibonacci
var fibsFizzBuzz = function (n) {
	let res = [];

	for (let i = 0; i < n; i++) {
		if (res.length > 1) {
			let newVal = res[i - 1] + res[i - 2];
			res.push(newVal);
		} else {
			res.push(1);
		}
	}
	return res.map((el) =>
		el % 3 === 0 && el % 5 === 0
			? 'FizzBuzz'
			: el % 3 === 0
				? 'Fizz'
				: el % 5 === 0
					? 'Buzz'
					: el,
	);
};

fibsFizzBuzz(10);
// 7kyu
function accum(s) {
	let arr = [...s];
	let str = '';
	for (let i = 0; i < s.length; i++) {
		let count = i;
		str += arr[i].toUpperCase();
		while (count > 0) {
			str += arr[i].toLowerCase();
			count--;
		}
		str += '-';
	}
	return str.slice(0, -1);
}

accum('ZpglnRxqenU'); //Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu

// kyu 8 return the sum of all numbers from 1 to num
var summation = function (num) {
	let res = Array.from({ length: num }, (_, i) => {
		return i + 1;
	});
	return res.reduce((acc, curr) => (acc += curr));
};

summation(8);

// 7kyu verify if the string end with the ending

function solutionStr(str, ending) {
	const strLength = -ending.length;
	return str.slice(strLength) === ending;
}

solutionStr('samurai', 'ai');

function calculate(a, operator, b) {
	let res;
	if (operator === '+') {
		res = a + b;
	}
	if (operator === '-') {
		res = a - b;
	}
	if (operator === '/') {
		res = a / b;
	}
	if (operator === '*') {
		res = a * b;
	}
	return res === typeof Number ? res : null;
}

calculate(3, '*', 3);

// 6 kyu check if the string is a pangram (a string contains every letter of the alphabet)
function isPangram(string) {
	const pangram = 'abcdefghijklmnopqrstuvwxyz';
	let parseStr = new Set(
		[...string]
			.join('')
			.replace(/[^a-z]/gi, '')
			.toLowerCase(),
	);
	return Array.from(parseStr).sort().join('') === pangram;
}

isPangram('The quick brown fox jumps over? the lazy dog.!');

// 6 kyu find the unique number
function findUniq(arr) {
	const res = arr.reduce((acc, curr) => {
		if (acc[curr] === undefined) {
			acc[curr] = 1;
		} else {
			acc[curr] += 1;
		}
		return acc;
	}, {});
	for (const occurence in res) {
		if (res[occurence] === 1) {
			return Number(occurence);
		}
	}
}

findUniq([0, 0, 1, 1, 0, 1, 2, 1, 0, 3, 2]);

// alternative clean to find the unique number
function findTheUnique(arr) {
	arr.sort();
	const unique = arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
	return unique;
}

findTheUnique([0, 0, 3, 24, 24, 2, 1, 0, 1]);

// 4 kyu sum string

function sumStrings(a, b) {
	return (BigInt(a) + BigInt(b)).toString();
}

sumStrings('4', '5');

// 7kyu return minimum and maximum number from an array
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

minMax([1, 2, 3, 4, 5]);

// 6 kyu return the even or odd number from an array or number

function evenOrOdd(n) {
	return Array.isArray(n)
		? n[0] % 2 === 0
			? 'Even'
			: 'Odd'
		: n % 2 === 0
			? 'Even'
			: 'Odd';
}

console.log(evenOrOdd([0]));
