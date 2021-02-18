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
[Socket.io](https://socket.io/) responsible for most of the logic in relakqs. Any time input from one user needs to instantly update the page for many other users, socket.io was used to implement the feature. It would have been extremely difficult to develop relakqs without using socket.io or a very similar technology.

When a user in a channel sends a message, socket.io is what delivers it to the backend, not a fetch call. The backend recieves the message and stores it in the postgres database, and then emits the message, also using socket.io, to other users who are in the same 'room'. This also happens in the same way when an admin updates the topic of a channel.

#### Material-UI
Relakqs uses [Material-UI](https://material-ui.com/) for styling. Making custom styling when the default styling needs changes is very easy by using the `makeStyles` hook. Some of Material-UI's pre-styled components like `Divider` and collapsing menus `Collapse` were also used, which allowed me to spend the bulk of my time working on the chatting features.

## Backend Overview
Relakqs uses a PostgreSQL database with a Flask server, which communicates with the client using Flask-SocketIO. Below are the backend technologies that make this application possible.

### Backend Technologies Used
#### Flask
Using [Flask](https://flask.palletsprojects.com/en/1.1.x/) allowed me to get the server up and running very quickly with its simple and easy to understand syntax. Making a jwt token validator was very easy with Python's function decorators.

#### Flask-SocketIO
The most involved portions of the backend of relakqs come from [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/). As mentioned above, most of the communication between the client and server happens using socket.io and Flask-SocketIO.

#### PostgreSQL
Relakqs uses a [PostgreSQL](https://www.postgresql.org/) database, and uses the ORM [SQLAlchemy](https://www.sqlalchemy.org/) to access and update it. Using table relationships with postgres was crucial in querying the database, and making [CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD) operations easy to implement.

## Conclusion and Further Development

**Further Development:**




u made it to the end of the page! thanks for reading ;)
