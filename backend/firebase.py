import pyrebase
import os
import ffmpeg
import time
import subprocess

config = {
  "apiKey": "AIzaSyDldFhKZILbJKsRhGJtueWTnmXRnZ65_KI",
  "authDomain": "wakeup-76343.firebaseapp.com",
  "databaseURL": "https://wakeup-76343-default-rtdb.firebaseio.com",
  "projectId": "wakeup-76343",
  "storageBucket": "wakeup-76343.appspot.com",
  "messagingSenderId": "680922052192",
  "appId": "1:680922052192:web:94b99b07b2a22f8b04f505",
  "measurementId": "G-XW9531YQ6R"
}

firebase_storage = pyrebase.initialize_app(config)
storage = firebase_storage.storage()

def firebase_upload(path):
  pcloud = "video/" + path
  plocal = path

  storage.child(pcloud).put(plocal)

def firebase_download(path):
  pcloud = "video/" + path
  plocal = path

  storage.child(pcloud).download(filename="a.mp4", path=os.path.basename(path))

def convert1(video_input, video_output):
    cmds = ['ffmpeg', '-i', video_input, video_output]
    subprocess.Popen(cmds)

def convert2(video_input, video_output):
  process = (
            ffmpeg
            .input(video_input)
            .output(video_output)
            .run()
            )
  
  process = process.run_async(pipe_stdin=True)
  process.communicate(str.encode("q"))

  time.sleep(3) 
  process.terminate()
