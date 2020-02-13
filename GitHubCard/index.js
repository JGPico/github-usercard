/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const entry = document.querySelector('.cards')

axios.get('https://api.github.com/users/JGPico').then(response => {
  console.log(response.data);
  entry.append(newUser(response.data));
}).catch(error => {
  console.log('Shit has hit the fan', error);
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['frankie95667', 'jscheuble', 'landoDev', 'josiahroa18', 'teaguehannam'];

followersArray.forEach( element => {
  axios.get('https://api.github.com/users/' + element).then(response => {
    console.log(response.data);
    entry.append(newUser(response.data));
  })
}).catch(error => {
  console.log('A whole array of shit has hit the fan', error);
})



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function newUser(obj) {
  const newCard = document.createElement('div'),
        newImage = document.createElement('img'),
        cardInfo = document.createElement('div'),
        newName = document.createElement('h3'),
        newUsername = document.createElement('p'),
        newLocation = document.createElement('p'),
        newProfile = document.createElement('p'),
        newATag = document.createElement('a'),
        newFollowers = document.createElement('p'),
        newFollowing = document.createElement('p'),
        newBio = document.createElement('p');

  newImage.src = obj.avatar_url;
  newName.textContent = obj.name;
  newUsername.textContent = obj.login;
  newLocation.textContent = obj.location;
  newATag.textContent = obj.html_url;
  newFollowers.textContent = obj.followers_url;
  newFollowing.textContent = obj.following_url;
  newBio.textContent = obj.bio;

  newCard.classList.add('card');
  cardInfo.classList.add('card-info');

  newProfile.append(newATag);
  cardInfo.append(newName);
  cardInfo.append(newUsername);
  cardInfo.append(newLocation);
  cardInfo.append(newProfile);
  cardInfo.append(newFollowers);
  cardInfo.append(newFollowing);
  cardInfo.append(newBio);
  newCard.append(newImage);
  newCard.append(cardInfo);

  return newCard;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
