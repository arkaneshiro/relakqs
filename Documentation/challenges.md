# Challenges in Developing Relakqs

## simultaneous updates of channel topic
- ### Challenge
    - using regular fetch API doesn't have a way to force others page's to update, reducing seamlessness of the site
- ### Process
    - after realizing problem with using fetch API to allow the 'admin's to update channel topic, refactored code to use flask-socket.io
    - this introduced the problem of how to implement authentication with flask-socket.io
