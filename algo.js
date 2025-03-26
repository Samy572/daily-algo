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

convertNumberToRoman(985);

// Day 3
//Write a function that returns a array of even numbers if none return an empty array.

function evenNumber(arr = [5, 2, 24, 8, 9]) {
	return arr.filter((el) => el % 2 === 0);
}

evenNumber();

//Write a function which takes a character string as input and returns an object containing the number of occurrences of each character in the string

function numberOfOccurences(str = 'Hello world') {
	const cleanStr = str.toLocaleLowerCase().replace(/\s/g, '').split('');
	let result = {};
	for (const char of cleanStr) {
		if (result[char]) {
			result[char]++;
		} else {
			result[char] = 1;
		}
	}

	return result;
}
numberOfOccurences();

// Day 4
//Write a function which takes a string as input and returns the number of words in the string

function countNumberOfWord(str = 'Hello world') {
	return str.split(' ').length;
}

countNumberOfWord();

//Write a function which takes a list of numbers and return true if all the numbers are positive

function areAllnumberArePositive(arr = [2, 4, 6, 8, 9, -2]) {
	return arr.every((num) => num > 0);
}

areAllnumberArePositive();

// Write a function which take an array of user object and return true if user he's over 17yo and email address contains @

function areAllUsersValid(
	users = [
		{ name: 'Charlie', age: 17, email: 'charlie@example.com' },
		{ name: 'David', age: 22, email: 'davidexample.com' },
	]
) {
	return users.every((user) => user.age > 17 && user.email.includes('@'));
}

areAllUsersValid();

// Day 5
// Write a function which take a number array and return the biggest number

function returnTheBiggestNumber(arr = [113, 985, 119]) {
	return Math.max(...arr);
}

returnTheBiggestNumber();

/* Write a function that displays numbers from 1 to n, but: 
	 Replaces multiples of 3 with "Fizz"
 	 Replaces multiples of 5 with "Buzz"
	 Replaces multiples of 3 and 5 with "FizzBuzz". */

function FizzBuzz(num = 15) {
	return Array.from({ length: num }, (_, i) => {
		let val = '';
		if ((i + 1) % 5 === 0) val += 'Fizz';
		if ((i + 1) % 3 === 0) val += 'Buzz';
		return val || i + 1;
	});
}

FizzBuzz();

// Day 6
// Write a function which take a string and return the fisrt unique character

function firstUniqueCharacter(str = 'swpwiws') {
	const cleanArr = str.toLocaleLowerCase().replace(/\s/g, '').split('');
	for (let i = 0; i < cleanArr.length; i++) {
		if (cleanArr.indexOf(cleanArr[i]) === cleanArr.lastIndexOf(cleanArr[i])) {
			return cleanArr[i];
		}
	}
}

firstUniqueCharacter();

// Write a function which return the second biggest number without using sort()

function secondBiggestNumber(arr = [25, 15, 36, 85, 4]) {
	const max = Math.max(...arr);
	const filterArr = arr.filter((el) => el !== max);
	return filterArr ? Math.max(...filterArr) : null;
}

secondBiggestNumber();

//Day 7
// Write a function wich take a string and return the numbers of vowels

function countNumberofVowels(str = 'hello world') {
	const vowels = ['a', 'e', 'u', 'i', 'o', 'y'];
	let result = 0;

	for (const element of [...str.toLocaleLowerCase()]) {
		if (vowels.includes(element)) result++;
	}
	return result;
}

countNumberofVowels();

// Write a function wich take a string and return an object with the frequency of each vowels

function vowelsFrequency(str = 'Helloo world') {
	let result = {};

	const vowels = [...str.toLocaleLowerCase()].filter((el) =>
		'aeiouy'.includes(el)
	);
	for (const vowel of vowels) {
		if (result[vowel]) {
			result[vowel]++;
		} else {
			result[vowel] = 1;
		}
	}
	return result;
}

vowelsFrequency();

// Day 8
// Write a function which take a string and return the longest word

function longestWordInString(str = 'How are you today') {
	str = str.split(' ');
	return str.sort((a, b) => b.length - a.length)[0];
}

longestWordInString();

// Write a function wich remove duplicate from an array of number

function removeDuplicate(arr = [1, 1, 1, 3, 6, 6, 5, 6, 2, 1]) {
	return [...new Set(arr)];
}

removeDuplicate();

// Day 9
// Write a function which take a string and return the number of words in the string

function countNumberOfCharacter(str = 'Hello world') {
	return str.replace(/\s/g, '').split('').length;
}

countNumberOfCharacter();

// Write a function wich take an array of number and return the average

function average(arr = [7, 8, 55, 6, 2, 4]) {
	return Math.round(arr.reduce((acc, curr) => (acc += curr)) / arr.length);
}

average();

// Day 10
// Write a function wich take a string and capitalize the first letter of each word

function capitalizeFirstLetterOfEachWord(
	str = 'Hello everyone how are yoU ? '
) {
	const words = str.toLowerCase().split(' ');
	capitalizeFirstWord = words.map((el) => {
		if (el) {
			// H + everyone
			return el[0].toUpperCase() + el.slice(1);
		}
	});
	return capitalizeFirstWord.join(' ');
}

capitalizeFirstLetterOfEachWord();

// Day 11
// Write a function wich take a number and return the factorial of a number ex 5 = 5*4*3*2*1 = 120.

function factorialNumber(num = 5) {
	const arr = Array.from({ length: num }, (_, i) => i + 1);
	let result = arr.reduce((acc, curr) => {
		return acc * curr;
	});
	return result;
}
factorialNumber();
