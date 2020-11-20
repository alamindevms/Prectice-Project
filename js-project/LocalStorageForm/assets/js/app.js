// Variable

let tweetList = document.querySelector("#tweet-list");
let form = document.querySelector("#form");

// Event Listener
eventLoeader();

function eventLoeader() {
   // form submission
   form.addEventListener('submit' , addTweet);
   // remove tweet-list
   tweetList.addEventListener('click' , removeItem);
   // DOM loader
   document.addEventListener('DOMContentLoaded' , tweetLoadedFromLS)
   
}


// Function

function addTweet (e){
   e.preventDefault();

   let tweet = document.querySelector("#tweet").value;

   // create Li
   let li = document.createElement('li');
   li.textContent = tweet;
   
   // add close button

   let clsBtn = document.createElement('span');
   clsBtn.textContent = "X";
   clsBtn.classList.add('clsbtn');

   // append clsBtn into li
   li.appendChild(clsBtn);

   // append li into tweetList
   tweetList.appendChild(li);

   // add tweet into LS
   addTweetLS(tweet);

   //alert
   alert("Tweet Added");
   
   //reset
   this.reset();
}

// remove tweet
function removeItem(e) {
   if (e.target.classList.contains('clsbtn')) {
      e.target.parentElement.remove();
   }

   removeTweetFromLS(e.target.parentElement.textContent)
}

// addTweetLS
function addTweetLS(tweet){
   let tweets = getTweetsFromLS();

   tweets.push(tweet);

   // convert tweet array into string
   localStorage.setItem('tweets' , JSON.stringify( tweets ));

}


// getTweetsFromLS
function  getTweetsFromLS() {
   let tweets;
   const tweetsLS = localStorage.getItem('tweets');

   if (tweetsLS === null) {
      tweets = [];
   }else{
      tweets = JSON.parse( tweetsLS )
   }
   return tweets;
}

// tweetLoadedFromLS
function tweetLoadedFromLS(){
   let tweets = getTweetsFromLS();

   tweets.forEach(tweet => {

      // create Li
      let li = document.createElement('li');
      li.textContent = tweet;
      
      // add close button

      let clsBtn = document.createElement('span');
      clsBtn.textContent = "X";
      clsBtn.classList.add('clsbtn');

      // append clsBtn into li
      li.appendChild(clsBtn);

      // append li into tweetList
      tweetList.appendChild(li);
   });
}

//remove tweet from localStorage
function removeTweetFromLS(tweet){
   let tweets = getTweetsFromLS();

   //remove the X from the tweet
   const tweetDelet = tweet.substring(0 , tweet.length -1); 

   // loop
   tweets.forEach(function (tweetLS , index) {
      if (tweetDelet === tweetLS) {
         tweets.splice(index , 1);
      }
   })

   //save the data
   localStorage.setItem("tweets" , JSON.stringify(tweets));
}