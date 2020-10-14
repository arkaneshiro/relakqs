# Challenges in Developing Relakqs

## simultaneous updates of channel topic
- ### Challenge
    - using regular fetch API doesn't have a way to force others page's to update, reducing seamlessness of the site
- ### Process
    - after realizing problem with using fetch API to allow the 'admin's to update channel topic, refactored code to use flask-socket.io


- ### Challenge
    - deployed server didn't work as expected, way too slow / inconsistent
- ### Process
    - ---- still in progress ----
