/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/DistortedAxiom')
  .then((gitData) => {
    const myProfile = gitData.data;
    cards.appendChild(cardMaker(myProfile));

  })
  .catch((err) => {
    console.log(err);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

var i = 0;

followersArray.forEach((user, i) => {
  axios.get(`https://api.github.com/users/${followersArray[i]}`)

  .then((gitData) => {
    const profile = gitData.data;
    console.log(profile);
    cards.appendChild(cardMaker(profile));
  })

  .catch((err) => {
    console.log(err);
  }),

  i++;

});

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function cardMaker(obj) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = obj.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = `${obj.name}`;

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = `${obj.username}`;

  const location = document.createElement('p');
  location.textContent = `${obj.location}`;

  const profile = document.createElement('p');
  profile.textContent = `Profile: `

  const profileLink = document.createElement('a');
  profileLink.href =  obj.html_url;
  profileLink.textContent = obj.html_url;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`;

  const expand = document.createElement('span');
  expand.classList.add('expandButton');
  expand.textContent = "EXPAND";

  const extra_info = document.createElement('div');
  extra_info.classList.add('extraInfo');

  const public_gists = document.createElement('p');
  public_gists.textContent = `Public Gists: ${obj.public_gists}`;

  const private_gists = document.createElement('p');
  private_gists.textContent = `Private Gists: ${obj.private_gists}`;

  card.appendChild(cardImg);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(expand);

  expand.appendChild(extra_info);

  extra_info.appendChild(public_gists);
  extra_info.appendChild(private_gists);

  expand.addEventListener("click", (e) => {
    extra_info.classList.toggle('infoOpen');
  })

  return card;
}

// STRETCH: EXPANDING CARD

/*

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
      <span>  // NEW STUFF
      <div>
        <p>Public Gists: {users public_gists}</p>
        <p>Private Gists: {users private_gists}</p>
      </div>
      </span>
    </div>

*/
