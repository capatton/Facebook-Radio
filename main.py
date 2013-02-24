import webapp2
import oauth
import os
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        CONSUMER_KEY = "3jdky3k3ttjtz89dcympbkrm"
        CONSUMER_SECRET = "D438GSs8gK"
        CALLBACK_URL = '{}player'.format(self.request.url)

        self.response.headers['Content-Type'] = 'text/html'
        path = os.path.join(os.path.dirname(__file__), 'master.html')
        self.response.out.write(template.render(path, {}))

    # Shortcut for writing to webpage
    def output(self, x):
        self.response.out.write(x)

        


app = webapp2.WSGIApplication([('/', MainPage)], debug=True)