function loadCatagories() {
  // 1- fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  // 2 - convert promise to json
    .then((res) => res.json())
    // 3 - send data to display
    .then((data) => displayCategories(data.categories));
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response)=> response.json())
    .then((data)=> displayVideos(data.videos))
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
    // console.log(cat)
// create Element
const categoryDiv = document.createElement("div");
categoryDiv.innerHTML = `
<button class="btn btn-sm hover:bg-red-500">${cat.category}</button>
`
// Append the Element
categoryConstainer.append(categoryDiv);

} 
 
}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach(video => {
        console.log(video);

        const videoCard = document.createElement("div");

        videoCard.innerHTML =`
        
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
videoContainer.append(videoCard)
      

    });
}





loadCatagories();
loadVideos();