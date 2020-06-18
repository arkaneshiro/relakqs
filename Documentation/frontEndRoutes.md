# Frontend Routes

## Welcome - /
  * toggles login / register forms
  * about section
  * fun logo hover animation
    * --- Backend Routes Needed ---
    * POST for create user
    * POST for auth
## Landing - / (if logged in)
  * Sidebar with User / DM / Channel sections
  * 'getting started' box
    * --- Backend Routes Needed ---
    * GET for relevant channels & DMs
    * PUT for update Bio or Avi
    * DELETE for leave channel
## Channel Browser - /channels
  * Sidebar
  * Header with search bar for channels
    * --- Backend Routes Needed ---
    * GET for channel names (for searching)
    * POST for create channel
    * POST for join channel
## Channel - /:channelname
  * Sidebar
  * Header with title / member list / pinned / topic
  * extra auth options
    * --- Backend Routes Needed ---
    * GET for channel info (header details + old messages including message details)
    * POST for messages
    * PUT for update channel topic
    * POST for reactions (stretch)
    * POST for thread messages (stretch)
    * POST for ban user (stretch)
## Direct Message - /:DMnumber
  * Sidebar
  * Header with names of DM members
    * --- Backend Routes Needed ---
    * GET for DM info (header name + old messages including message details)
    * POST for messages
    * POST for reactions (stretch)
    * POST for thread messages (stretch)
## New Message - /message
  * sidebar
  * search bar for selecting channels or DMs
    * --- Backend Routes Needed ---
    * GET for channel names, DM groups, and all other user names (for searching)
    * POST for create DM
    * POST for messages
