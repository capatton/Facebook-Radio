import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        
        self.output('<h1>BRO</h1>')

    # Shortcut for writing to webpage
    def output(self, x):
        self.response.out.write(x)

        


application = webapp2.WSGIApplication(
                                     [('/', MainPage)],
                                     debug=True)



#def main():
 #   run_wsgi_app(application)



#if __name__ == "__main__":
#    main()