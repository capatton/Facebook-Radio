import webapp2
import oauth
import os
from google.appengine.ext.webapp import template

class RdioLoginPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'

        CONSUMER_KEY = "3jdky3k3ttjtz89dcympbkrm"
        CONSUMER_SECRET = "D438GSs8gK"
        CALLBACK_URL = '{}player'.format(self.request.url)

        client = oauth.RdioClient(CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL)
        self.output('<h1>' + str(self.redirect(client.get_authorization_url())) + '</h1>')


        #path = os.path.join(os.path.dirname(__file__), 'player.html')
        #self.response.out.write(template.render(path, {}))


    # Shortcut for writing to webpage
    def output(self, x):
        self.response.out.write(x)


app = webapp2.WSGIApplication([('/rdiologin', RdioLoginPage)], debug=True)