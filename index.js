// Additional JS functions here
window.fbAsyncInit = function() {
    FB.init({
          appId      : '148310075327662', // App ID
          channelUrl : '//localhost:8080/channel.html', // Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true  // parse XFBML
      });

        //Added this to check the log-in status upon signing in.  We can use "response" to get their relevant data
        // if they're already logged in.  Otherwise, we can grab that data after the auth.login event gets triggered
        FB.getLoginStatus(function(response){
            //not logged in upon opening the page
            if (response.status === 'connected') {
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                window.location="player"
            } 
            else if (response.status === 'not_authorized') {
                // the user is logged in to Facebook, 
                // but has not authenticated your app
                alert("Not authorized");    
            } 
            else {
                // the user isn't logged in to Facebook.
                alert("Not logged in")
            }
        });

        FB.Event.subscribe('auth.login', function(response) {
            alert('the status is ' + response.status);
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