function loadCatagories() {
  // 1- fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  // 2 - convert promise to json
    .then((res) => res.json())
    // 3 - send data to display
    .then((data) => displayCategories(data.categories));
}



// category
// : 
// "Music"
// category_id
// : 
// "1001"




function displayCategories(categories) {
//   get the container 
const categoryConstainer = document.getElementById("category-constainer");
// Loop oparation on array of object
for (let cat of categories){
    console.log(cat)
// create Element
const categoryDiv = document.createElement("div");
categoryDiv.innerHTML = `
<button class="btn btn-sm hover:bg-red-500">${cat.category}</button>
`
// Append the Element
categoryConstainer.append(categoryDiv);

} 
 
}

loadCatagories();
