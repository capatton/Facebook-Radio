// Additional JS functions here
window.fbAsyncInit = function() {
  FB.init({
          appId      : '148310075327662', // App ID
          channelUrl : '//localhost:8080/channel.html', // Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true  // parse XFBML
        });

  FB.getLoginStatus(function(response){
    if (response.status === 'connected') {  
       var getNamesQuery = 'SELECT name, music FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me() LIMIT 100) AND music <>""';
       //put the music likes into a hash table and grab the most popular (max num of people listed it)
       
       FB.api('/fql', 'GET', {q: getNamesQuery}, function(response){
         if (response && response.data) {
          document.getElementById("test").innerHTML = "All friends:\n";
          for (i = 0; i < response.data.length; ++i) {
            document.getElementById("test").innerHTML += i + ": " + (response.data[i].name) + "</br>";
          }
        }
      });
      //  FB.api('/fql', 'GET', {q: 'SELECT * FROM like WHERE user_id = me()'}, function(response){
      //    if (response && response.data) {
      //     document.getElementById("test").innerHTML += "Likes: \n";
      //     for (j = 0; j < response.data.length; ++j) {
      //       document.getElementById("test").innerHTML += (response.data[i]);
      //     }
      //   }
      // });
   }  
   else {
    alert("ERROR! User should not be on this screen");
  }
});
}; 

// Load the SDK Asynchronously
(function(d){
  var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(js, ref);
}(document));