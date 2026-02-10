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

