// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate
// // TODO: Create a function that uses template literals for HTML generation
let userId=true

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId ==true ) {
        resolve({
          id: userId,
          name: 'Yaqoob Samsodien',
          email: 'yeah@gmail.com',
          registrationDate: '13-11-2025'
        });
      } else {
        reject(new Error('Error invalid user ID'));
      }
    }, 1500); 
  });
}

let HTMLgenerator = function (user){ return `
<body>
    <div>
         <h2>${user.name}</h2>
         <p>ID: ${user.id}</p>
         <p>Email:${user.email}</p>
         <p>Registered: ${user.registrationDate}</p>
    </div>
</body>
`;}

fetchUserData(userId)
.then (user => {
    let res= HTMLgenerator(user);
    console.log('Data fetched successfully');
    console.log(res);
    
}).catch(error => console.error('error :wrong Id')
);

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error

let PostId=true

function fetchUserPosts(PostId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (PostId ==true ) {
        resolve({
          id: PostId,
          name: 'Yaqoob Samsodien',
          title: 'Birthday!!!!',
          email: 'yeah@gmail.com',
        posts: [ 
            { title: "Birthday!", content: "You’re 20!!! No one has to know..." },
            { title: "Vacataion time!!!", content: "We in Thailand yall!" },
            { title: "Weekend Plans", content: "GOING OUT WITH THE BOIIISSS" }] 
        });
      } else {
        reject(new Error('Error invalid user ID'));
      }
    }, 1000); 
  });
}

function PostGenerator(post) { // 
  const postsHTML = post.posts.map(post => `
    <div class='post'>
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>
  `).join('');
  return `
  <body>
    <div>
      <h1>${post.name}</h1>
      <p>Email: ${post.email}</p>
      <h2>User Posts</h2>
      ${postsHTML}
    </div>
  </body>
  `;
}

fetchUserPosts(PostId)
.then (post => {
    let res= PostGenerator(post);
    console.log('Posts retrieved successfully for OG user');
    console.log(res);
    
}).catch(error => console.error('error :wrong Id')
);

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain
const userId3=true

function fetchUserData3(userId3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId3 ===true ) {
        resolve({
          id: userId3,
          name: 'Otis THe COw',
          email: 'M000000W@gmail.com',
          registrationDate: '15-11-2025'
        });
      } else {
        reject(new Error('Error invalid user ID'));
      }
    }, 1500); 
  });
}

let HTMLgenerator3 = function (user){ return `
<body>
    <div>
         <h2>${user.name}</h2>
         <p>ID: ${user.id}</p>
         <p>Email:${user.email}</p>
         <p>Registered: ${user.registrationDate}</p>
    </div>
</body>
`;}

fetchUserData3(userId3)
.then (user => {
    let res= HTMLgenerator3(user);
    console.log('Data fetched successfully');
    console.log(res);
    
}).catch(error => console.error('error :wrong Id')
);

let PostId3=true

function fetchUserPosts3(PostId3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (PostId3 ==true ) {
        resolve({
          id: PostId3,
          name: 'Otis THe COw',
          title: 'Birthday!!!!',
          email: 'M000000W@gmail.com',
        posts: [ 
            { title: "RIP", content: "Going to the butcher" },
            { title: "Dinner Time", content: "They made me into a burger" }] 
        });
      } else {
        reject(new Error('Error invalid user ID'));
      }
    }, 2000); 
  });
}

function PostGenerator3(post) {  
  const postsHTML = post.posts.map(post => `
    <div class='post'>
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>
  `).join('');
  return `
  <body>
    <div>
      <h1>${post.name}</h1>
      <p>Email: ${post.email}</p>
      <h2>User Posts</h2>
      ${postsHTML}
    </div>
  </body>
  `;
}

fetchUserPosts3(PostId3)
.then (post => {
    let res= PostGenerator3(post);
    console.log('Posts retrieved successfully for user 3');
    console.log(res);
    
}).catch(error => console.error('error :wrong Id')
);



function getUserAndPosts(userId3, postId3) {
  return fetchUserData3(userId3)
    .then(user => {
      return fetchUserPosts3(postId3)
        .then(posts => ({ user, posts }));
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
}


getUserAndPosts(true,true)
  .then(data => console.log("Combined data:", data))
  .catch(error => console.log("Error:", error));

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data
async function fetchAllData(userId, postId) {
  try {
    let userData = await fetchUserData(userId);
    let userPost = await fetchUserPosts(postId);
    let combinedData = { userData,
       userPost };
    console.log(combinedData);
    return combinedData;
  } catch (error) {
    console.error('Error:', error);
  }
}

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users
let userId1=true
let userId2=true


function fetchUserData1(userId1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId1 ==true ) {
        resolve({
          id: userId1,
          name: 'Jacob Smith',
          email: 'JacSmith@gmail.com',
          registrationDate: '14-11-2025'
        });
      } else {
        reject(new Error('Error invalid user ID'));
      }
    }, 1500); 
  });
}

let HTMLgenerator1 = function (user){ return `
<body>
    <div>
         <h2>${user.name}</h2>
         <p>ID: ${user.id}</p>
         <p>Email:${user.email}</p>
         <p>Registered: ${user.registrationDate}</p>
    </div>
</body>
`;}

fetchUserData(userId1)
.then (user => {
    let res= HTMLgenerator(user);
    console.log('Data fetched successfully for user1 ');
    console.log(res);
    
}).catch(error => console.error('error :wrong Id')
);




function fetchUserData2(userId2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId2 ==true ) {
        resolve({
          id: userId2,
          name: 'Phoenix CHUNG',
          email: 'Birdman@gmail.com',
          registrationDate: '14-11-2025'
        });
      } else {
        reject(new Error('Error invalid user ID'));
      }
    }, 1800); 
  });
}

let HTMLgenerator2 = function (user){ return `
<body>
    <div>
         <h2>${user.name}</h2>
         <p>ID: ${user.id}</p>
         <p>Email:${user.email}</p>
         <p>Registered: ${user.registrationDate}</p>
    </div>
</body>
`;}

fetchUserData(userId2)
.then (user => {
    let res= HTMLgenerator(user);
    console.log('Data fetched successfully for combined ');
    console.log(res);
    
}).catch(error => console.error('error :wrong Id')
);

Promise.all([fetchUserData2(userId2),fetchUserData1(userId1)])
  .then(([userData2,userData1 ])=> {
    let CombinedData= {user2: userData2,
      user: userData1
    };
    console.log(CombinedData);
    return CombinedData;
  }).catch(error => console.error('error :wrong Id'));


// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately
Promise.all([fetchUserData(userId),fetchUserPosts(PostId)])
  .then(([userData,postData ])=> {
    let CombinedData= {user: userData,
      post: postData
    };
    console.log(CombinedData);
    return CombinedData;
  }).catch(error => console.error('error :wrong Id'));


// TODO: Test success cases
// - Test single user fetch
fetchUserData(true)
  .then(user => console.log("Single user fetched:", user))
  .catch(err => console.error("Single user error:", err));

// - Test multiple user fetch
Promise.all([fetchUserData1(userId1), fetchUserData2(userId2)])
  .then(users => console.log("Multiple users fetched:", users))
  .catch(err => console.error("Multiple user fetch error:", err));

// - Test error handling
fetchUserData(false)
  .then(user => console.log("Should not succeed:", user))
  .catch(err => console.error("Correctly caught error (user):", err));

fetchUserPosts(false)
  .then(posts => console.log("Should not succeed:", posts))
  .catch(err => console.error("Correctly caught error (posts):", err));