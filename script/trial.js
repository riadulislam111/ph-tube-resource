// function loadCatagories (){
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then((res)=> res.json())
//     .then((data)=> displayCategories(data.categoris));
// }

// function displayCategories(categories){
//     const categoryConstainer = document.getElementById("category-constainer");

//     for (let cat of categories){
//         console.log(cat);

//       const categoryDiv = document.createElement("div");
//       categoryDiv.innerHTML = `
      
//       <button class="btn btn-sm hover:bg-red-500">${cat.category}</button>
//       `
//     categoryConstainer.append(categoryDiv);
//     }
// }



// loadCatagories();