// append things in mark as read section reed-count

let readCount = 0;
function updateMarkAsReadCount(postTitle, viewCount) {
    // Increment read count
    readCount++;
    document.getElementById("reed-count").innerText = readCount;

    // Create elements for post title and view count
    const postTitleElement = document.createElement("h4");
    postTitleElement.innerText = postTitle;
    const viewCountElement = document.createElement("div");
    viewCountElement.innerHTML = `<i class="fa-regular fa-eye"></i>  ${viewCount}`

    // Create container div for post details
    const postDetailsContainer = document.createElement("div");
    postDetailsContainer.classList.add("bg-white", "flex", "justify-between", "p-4", "rounded-2xl");

    // Append post title and view count elements to the container
    postDetailsContainer.appendChild(postTitleElement);
    postDetailsContainer.appendChild(viewCountElement);

    // Append the container to mark-as-reed-container
    document.getElementById("mark-as-reed-container").appendChild(postDetailsContainer);
}