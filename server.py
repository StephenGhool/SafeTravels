from flask import Flask, request

#app = Flask(__name__)

#@app.route("/")

#def main():
#    return "Welcome to SafeTravels' Server....How may I help you ?"

#if __name__=="__main__":
#    app.run(debug=True, host="0.0.0.0", port=80)

# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import time

app = Flask(__name__)

@app.route("/")
def index():
    request.get()
    return "Method used %s" % request.method

@app.route("/postpage", methods = ['GET', 'POST'])
def requests():
    if request.method =="POST":
        return "You are using Post"
    else:
        return "Method used %s" % request.method

hostName = "localhost"
serverPort = 8080

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p>Safe Travel's web server.</p>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))



if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))
    app.run()
    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")