# Models

## Model List
- Users
- Containers
- Container Users
- Messages
- Reaction (stretch)
- Thread Message (stretch)
- Bans (stretch)
- Pins (stretch)


### Users
| column    | type    | max length | default | constraints      |
| --------- | ------- | ---------- | ------- | ---------------- |
| aviUrl    | text    | none       | no      |                  |
| userName  | varchar | 20         | no      | not null, unique |
| password  | binary  | none       | no      | not null         |
| email     | varchar | 50         | no      | not null, unique |
| bio       | varchar | 100        | no      | not null         |


### Containers
| column       | type    | max length | default | constraints                          |
| ------------ | ------- | ---------- | ------- | ------------------------------------ |
| admin_id     | integer | none       | no      | nullable references: (Users.Id)      |
| is_channel   | boolean | none       | no      | not null                             |
| title        | varchar | 20         | no      | not null                             |
| topic        | text    | none       | no      | nullable                             |


## Container Users
| column       | type    | max length | default | constraints                          |
| ------------ | ------- | ---------- | ------- | ------------------------------------ |
| user_id      | integer | none       | no      | not null references: (Users.Id)      |
| container_id | integer | none       | no      | not null references: (Containers.Id) |


### Messages
| column       | type    | max length | default | constraints                          |
| ------------ | ------- | ---------- | ------- | ------------------------------------ |
| user_id      | integer | none       | no      | not null references: (Users.Id)      |
| container_id | integer | none       | no      | not null references: (Containers.Id) |
| message      | text    | none       | no      | not null                             |
