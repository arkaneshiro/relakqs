# Challenges in Developing Relakqs

## simultaneous updates of channel topic
- ### Challenge
    - using regular fetch API doesn't have a way to force others page's to update, reducing seamlessness of the site
- ### Process
    - after realizing problem with using fetch API in many scenarios, refactored code to use flask-socket.io


- ### Challenge
    - deployed server didn't work as expected
- ### Process
    - realized gunicorn servers dont support websockets, installed add on 'eventlet' to allow this functionality


- ### Challenge
    - as you used a channel more, it became less performant until you switched to using another channel. When you switched back it would reset to being snappy
