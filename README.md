# relakqs
*[relakqs](https://relakqs.herokuapp.com) is a simple messaging app by [Riki Kaneshiro](https://arkaneshiro.github.io/)*

**Table of Contents**
* [relakqs at a Glance](#relakqs-at-a-glance)
* [Application Architecture & Technologies Used](#application-architecture)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion & Next Steps](#conclusion-and-further-development)

## Relakqs at a glance
Relakqs is a simple chatting web application where users can create and join channels to chat in!

Creators of channels are given admin privledges, which include updating the topic of a channel or deleting a channel.

## Application Architecture
Relakqs's stack includes [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Node](https://nodejs.org/en/), [Flask](https://flask.palletsprojects.com/en/1.1.x/), and [PostgreSQL](https://www.postgresql.org/). For styling, relakqs uses [Material-UI](https://material-ui.com/).

Messaging, and updates that admins make to a channel topic are all handled using [socket.io](https://socket.io/) and it's Flask-compatible version, [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/). This not only enables real-time messaging, but allows for all users currently in a channel to instantly see the updated channel topic when an admin updates it.

## Frontend Overview
Below are the frontend technologies used with some notes regarding their implementation.

### Frontend Technologies Used
#### React/Redux
Relakqs is a [React](https://reactjs.org/) app, and makes use of [Redux](https://redux.js.org/) for state management, allowing for a snappy user experience. The [react-redux](https://react-redux.js.org/) library is used extensively throughout the app, using the `useSelector` hook to access the Redux store and the `useDispatch` hook to call actions.

#### socket.io
Socket.io is responsible for most of the logic in relakqs. Any time input from one user needs to instantly change the display for many other users, socket.io was used to implement the feature. It would have been extremely difficult to develop relakqs without using socket.io or a very similar technology.

When a user in a channel sends a message, socket.io is what delivers it to the backend, not a fetch call. The backend recieves the message and stores it in the postgres database, and then emits the message, also using socket.io, to other users who are in the same room. A similar process happens when an admin of a channel updates the channel topic.

#### Material-UI

## Backend Overview

### Backend Technologies Used
#### Flask

#### Flask-SocketIO

#### PostgreSQL

## Conclusion and Further Development

**Further Development:**




u made it to the end of the page! thanks for reading ;)
