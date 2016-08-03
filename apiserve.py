import json
import requests


class ApiServe(object) :
    
    
    def __init__(self, config_file):
        with open(config_file) as config:    
            self.config = json.load(config)
        self.username = self.config['username']
        self.password = self.config['password']
            #here we init the connection between us and the main server :D
        self.cookie, self.server = self.init_connection()

    def init_connection(self):

        state_url = requests.request('POST',self.config['url_state'], headers={'Accept':'application/json'}).url
        state = state_url.split('&')[1].split('=')[1]

        login_request = requests.request('POST',self.config['url_cookie'], data={'client_id':'portal','redirect_url':'','response_type':'code','scope':'user','state':state
    , 'login':self.config['username'], 'password':self.config['password']}, headers={'Accept':'application/json'})

        cookie_request = requests.get(json.loads(login_request.content)["url"], allow_redirects=False)
        cookie = cookie_request.headers['Set-cookie'].split(";")[0]
        servers = self.config['get_data']
        return cookie, servers

    def get_overall_status(self):
        overall_status = requests.request("GET", self.server["get_overall_status"],headers={"Cookie":self.cookie})
        return overall_status.content

    def get_status_summary(self):
        status_summary = requests.request("GET", self.server["get_status_summary"],headers={"Cookie":self.cookie})
        return status_summary.content
