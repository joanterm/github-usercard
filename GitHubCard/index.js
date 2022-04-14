import axios from "axios"
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):

    https://api.github.com/users/<your name>
*/

//FOR INDIVIDUAL REQUEST: 


// axios.get("https://api.github.com/users/joanterm")
// .then((response) => {
//   console.log(response.data)
//   const responseData = response.data
//   const newElement = githubCardMaker(responseData)
//   allCardsDiv.appendChild(newElement)
// })
// .then((error) => {
//   console.log(error)
// })

//FOR MULTIPLE USERS AR ONCE:

const allCardsDiv = document.querySelector(".cards")

const getUsers = (user) => {
axios.get(`https://api.github.com/users/${user}`)
.then((response) => {
  console.log(response.data)
  const responseData = response.data
  const newElement = githubCardMaker(responseData)
  allCardsDiv.appendChild(newElement)
  
})
.then((error) => {
  console.log(error)
})
}
//THINK -> DATASET
const followersArray = ["tetondan", "joanterm", "justsml"];
followersArray.forEach(arrayUser =>{
  getUsers(arrayUser)
})

//responseData becomes username
const githubCardMaker = (username) => {
  const card = document.createElement("div")
  const image = document.createElement("img")
  const cardInfoDiv = document.createElement("div")
  const name = document.createElement("h3")
  const name2 = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const profileUrl = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")

  card.classList.add("card")
  cardInfoDiv.classList.add("card-info")
  name.classList.add("name")
  name2.classList.add("username")

  image.src = username.avatar_url
  name.textContent = username.name
  name2.textContent = username.login
  location.textContent = `Location: ${username.location}`
  profile.textContent = "Profile: "
  profileUrl.textContent = username.html_url
  profileUrl.href = username.html_url
  followers.textContent = `Followers: ${username.followers}`
  following.textContent = `Following: ${username.following}`
  bio.textContent = `Bio: ${username.bio}`

  card.appendChild(image)
  card.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(name)
  cardInfoDiv.appendChild(name2)
  cardInfoDiv.appendChild(location)
  cardInfoDiv.appendChild(profile)
  cardInfoDiv.appendChild(followers)
  cardInfoDiv.appendChild(following)
  cardInfoDiv.appendChild(bio)
  profile.appendChild(profileUrl)

  return card
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// const check = githubCardMaker("https://api.github.com/users/joanterm")
// console.log(check)
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
