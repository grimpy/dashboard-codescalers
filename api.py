from flask import Flask
from apiserve import ApiServe


app = Flask(__name__)

api_serve = ApiServe("config.json")
cookie, server = api_serve.init_connection()


@app.route('/overall_health')
def get_overall_health():
    overall_status = api_serve.get_overall_status()
    return overall_status

@app.route('/status_summary')
def get_status_summary():
    status_summary = api_serve.get_status_summary()
    return status_summary


if __name__ == '__main__':
    app.run()
