# Backend Routes

## Users
  * POST /user
    - create a new user (returns userId and token)
  * POST /user/token
    - verifies user login and returns token for the user
  * PUT /user/bio/:userId
    - updates user bio
  * PUT /user/avi/:userId
    - updates user avi
  * GET /user/:userId/landing
    - gets names & ids of channels and dms for a particular user

## Messages
  * POST /messages
    - creates a new message associated with a user and a container

## Message Containers
### DMs
  * REST API
    * GET /container/DM/all
      - gets names & ids of all DMs and ids of users who don't have DM's with you
    * POST /container/DM
      - creates a new DM message container
      - associates users with DM message container
  * SOCKET.IO


### Channels
  * REST API
    * GET /container/channel/all
      - gets names & ids of all channels
    * POST /container/channel
      - creates a new channel message container
  * SOCKET.IO
    * 'get_history'
      - gets all information for a particular channel including old messages
    * 'join_channel'
      - associates a user to a channel
    * 'leave_channel'
      - removes a users association with a channel message container
    * 'join'
      - associates socket connection with a socket.io 'room' the room number is the channel id
    * 'change_topic'
      - checks to be sure user attempting this is admin
      - updates channel message container's topic
    * 'typing_on' & 'typing_off'
      - sends the typing users id to the room, with a boolean indicating wether they are typing or not
    * 'delete_channel'
      - checks to be sure user attempting this is admin
      - deletes channel container (database model is configured to delete orphaned messages when deleting container)
