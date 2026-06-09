import os
import redis
from flask import Flask, render_template

app = Flask(__name__)
cache = redis.Redis(
    host=os.getenv("REDIS_HOST", "redis"),
    port=int(os.getenv("REDIS_PORT", "6379")),
)

@app.route("/")
def hello():
    return render_template('index.html')
