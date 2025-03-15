// Day 1
// Write a palindrome function that returns true or false

function isAPalindrome(str) {
	const reverseStr = str
		.split('')
		.reverse()
		.join('')
		.toLowerCase()
		.replace(/\s/g, '');
	return reverseStr === str;
}

isAPalindrome('kayak');

// Write a anagram function that returns true or false

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
