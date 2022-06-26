const category = document.querySelectorAll('.item');
const result = "Number of Categories:" + " " + category.length;
console.log(result);

const finalResult = category.forEach(name => console.log(`Category: ${name.querySelector('h2').innerHTML}`, `Elements: ${name.querySelectorAll("li").length}`))
console.log(finalResult);
