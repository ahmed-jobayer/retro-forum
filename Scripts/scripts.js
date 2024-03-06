const allPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  // console.log(posts)
  displayPosts(posts);
};

const displayPosts = (posts) => {
  console.log(posts);

  const postContainer = document.getElementById("post-container");

  posts.forEach((post) => {
    console.log(post);

    const postCard = document.createElement("div");
    postCard.classList = `p-10 bg-[#797DFC19] rounded-3xl flex gap-6`;
    postCard.innerHTML = `
    <div class=" ">
    <div class="avatar ${post.isActive ? "online" : "offline"}">
        <div class="w-16 rounded-2xl">
            <img src="${post.image}
            " />
        </div>
    </div>
</div>
<div class="grow">
    <div class="flex gap-5 inter font-medium text-sm">
        <p class="">#${post.category}
        </p>
        <p>Author : ${post.author.name}
        </p>
    </div>
    <h3 class="mulish text-xl font-bold mt-3 mb-4">${post.title}

    </h3>
    <p class=" border-b-2 border-dashed border-gray-300 pb-5 inter ">${
      post.description
    }
    </p>
    <div class="flex justify-between ">
        <div class="flex gap-7 pt-6 ">
            <div class="flex gap-4 items-center">
                <i class="fa-regular fa-message"></i>
                <p>${post.comment_count}</p>
            </div>
            <div class="flex gap-4 items-center">
                <i class="fa-regular fa-eye"></i>
                <p>${post.view_count}
                </p>
            </div>
            <div class="flex gap-4 items-center">
                <i class="fa-regular fa-clock"></i>
                <p>${post.posted_time} min</p>
            </div>
            
        </div>
        <div class=" flex items-center ">
          <p onclick="updateMarkAsReadCount('${post.title}', ${post.view_count})">
            <i class="fa-regular fa-envelope-open "></i>
          </p>
        </div>
    </div>
</div>
        `;

    postContainer.appendChild(postCard);
  });
};

// display latest post

const allLatestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data2 = await res.json();
  // console.log(data2)
  displayLatestPosts(data2);
};

const displayLatestPosts = (latestPosts) => {
  console.log(latestPosts);

  const latestPostContainer = document.getElementById("latest-post-container");

  latestPosts.forEach((latestPost) => {
    console.log(latestPost);
    const latestPostCard = document.createElement("div");
    latestPostCard.classList = `card w-96 bg-base-100 shadow-xl`;
    latestPostCard.innerHTML = `
    <figure><img src="${latestPost.cover_image}" /></figure>
                    <div class="card-body">
                        <div class="flex items-center gap-4">
                            <i class="fa-regular fa-calendar-minus"></i>
                            <p>${latestPost.author.posted_date} </p>
                        </div>
                        <h2 class="card-title mb-3">${latestPost.title}</h2>
                        <p class="mb-4">${latestPost.description}</p>
                        <div class="flex gap-4 items-center">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img src="${latestPost.profile_image}" />
                                </div>
                            </div>

                            <div>
                                <h3 class="mulish font-bold">${latestPost.author.name}</h3>
                                <p class="mulish text-sm ">${latestPost.author.designation}</p>
                            </div>
                        </div>

                    </div>
    `;
    latestPostContainer.appendChild(latestPostCard);
  });
};

allLatestPost();

allPost();
