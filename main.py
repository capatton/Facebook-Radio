from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.api import urlfetch
from google.appengine.ext.webapp import template
from django.utils import simplejson as json

class MainPage(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        
        self.output('<h1>BRO</h1>')

    # Shortcut for writing to webpage
    def output(self, x):
        self.response.out.write(x)

        


application = webapp.WSGIApplication(
                                     [('/', MainPage)],
                                     debug=True)



def main():
    run_wsgi_app(application)



if __name__ == "__main__":
    main()