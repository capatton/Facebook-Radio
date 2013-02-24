import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        
        self.output('<h1>BRO BALLS</h1>')

    # Shortcut for writing to webpage
    def output(self, x):
        self.response.out.write(x)

        


app = webapp2.WSGIApplication([('/', MainPage)], debug=True)