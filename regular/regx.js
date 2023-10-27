regx=/meets+$/m;

str1="cat eat rat meetsss";
str2="rat eat weet";
result1=regx.test(str1)
result2=regx.test(str2)
console.log(result1);
console.log(result2);