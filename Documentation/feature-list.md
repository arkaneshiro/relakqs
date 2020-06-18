# Soundzone Feature List
1. Users
    * Login / Register
    * Authentication via Auth0
    * Update basic user info: Bio, Avi
2. Messaging
    * Channels
      * users can search for channels by name and join in
      * all members of channel can see all other members messages
      * users who create a channel can set its name and initial topic
      * users who create a channel are its 'admin'
      * admins can edit the channel topic
      * admins can remove / block users from channels (stretch)

    * Direct Messaging
      * users can search for other users by name
      * users can select multiple users when creating a DM to create 'teams'
    * Both
      * users can see when other users in a DM or channel are typing
      * messages update in real time
      * users can react with emojis to messages, and a counter of each reaction appears (stretch)
      * users can start a thread on any message, and react with emojis to thread messages (stretch)

3. UI Design
    * Welcome Page
      * user login / registration
      * about relakqs
      * fun logo hover animation
    * Landing Page
      * sidebar with User / DM / Channel sections (each expand / hideable)
      * some 'getting started' tips
    * Channel View
      * same sidebar as landing
      * member list (fixed size, scrollable) / pinned (stretch) / topic header (pop up)
      * extra admin features
        * member list dropdown has ban button (stretch)
        * topic header pop up has edit feature
    * DM View
      * same sidebar as landing
      * header shows DM name (names of users in DM)
    * New Message View
      * same sidebar as landing
      * search bar that searches user names or channel names
    * Pop Up Elements
      * Profile Edit / View / Ban (hover on Avis)
      * Message Emoji Reaction Pane (stretch) (hover on messages)
      * Threads (stretch) (hover on messages)

4. Stretch goals
    * Notifications
    * Reactions
    * Threads
    * Banning
    * Automatic Message Linking
    * Fun text animations
    * Message Pinning

5. Technologies Used
    * HTML5
    * CSS3
    * JavaScript
      * Node.js
      * React
      * Redux
      * Material UI
      * AUTH0
    * Python
      * Flask
