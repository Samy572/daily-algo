// Day 1
// Write a palindrome function that returns true or false.

function isAPalindrome(str) {
	const reverseStr = str
		.split('')
		.reverse()
		.join('')
		.toLowerCase()
		.replace(/\s/g, '');
	return reverseStr === str;
}

isAPalindrome('reset');

// Write a anagram function that returns true or false.

function isAnAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	return (
		str1.toLowerCase().split('').sort().join() ===
		str2.toLowerCase().split('').sort().join()
	);
}

isAnAnagram('silent', 'Listen');

// Day 2
// Write a function that returns the Fibonacci sequence with the number of sequences as a parameter.

function fibonacci(num) {
	if (num <= 0) return 'Number must be greater than 0';
	if (num === 1) return '0';
	if (num === 2) return '0 - 1';
	let result = [0, 1];
	Array.from({ length: num - 2 }).forEach((el) => {
		el = result[result.length - 1] + result[result.length - 2];
		result.push(el);
	});
	return result.join(' - ');
}

fibonacci(7);

// Write a function that convert number into roman number

function convertNumberToRoman(num) {
	const romanNumber = [
		['M', 1000],
		['CM', 900],
		['D', 500],
		['CD', 400],
		['C', 100],
		['XC', 90],
		['L', 50],
		['XL', 40],
		['X', 10],
		['IX', 9],
		['V', 5],
		['IV', 4],
		['I', 1],
	];

	let result = '';

	for (let i = 0; i < romanNumber.length; i++) {
		const [roman, value] = romanNumber[i];
		while (num >= value) {
			result += roman;
			num -= value;
		}
	}
	return result;
}

convertNumberToRoman(8);
