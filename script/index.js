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
        
        <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 stext-sm rounded text-white bg-black">3hrs 56 min ago</span>
        </figure>
        <div class="card-body flex gap-3 px-0 py-5">
          
<div class="profile">
    <div class="avatar">
        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
          <img src="${video.authors[0].profile_picture}" />
        </div>
      </div>
</div>
<div class="intro">
    <h2 class="text-sm font-semibold">Midnight Serenade</h2>
    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_picture.profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
    <p class="text-sm text-gray-400">${video} views</p>
</div>



        </div>
      </div>
        `
videoContainer.append(videoCard)
      

    });
}





loadCatagories();
loadVideos();