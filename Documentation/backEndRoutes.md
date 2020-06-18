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
  * GET /container/DM/all
    - gets names & ids of all DMs and ids of users who don't have DM's with you
  * GET /container/DM/:containerId
    - gets all information for a particular DM including old messages
  * POST /container/DM
    - creates a new DM message container
    - associates users with DM message container
### Channels
  * GET /container/channel/all
    - gets names & ids of all channels
  * GET /container/channel/:containerId
    - gets all information for a particular channel including old messages
  * POST /container/channel
    - creates a new channel message container
  * POST /container/channel/:containerId
    - associates a user to a channel
  * PUT /container/channel/:containerId
    - checks to be sure user attempting this is admin
    - updates channel message container's topic
  * DELETE /container/user/:userId
    - removes a users association with a channel message container
