# Models

## Model List

- Users
- Messages
- Thread Message (stretch)
- Message Container


### Users

| column    | type    | max length | default | constraints      |
| --------- | ------- | ---------- | ------- | ---------------- |
| aviUrl    | text    | none       | no      |
| userName  | varchar | 20         | no      | not null, unique |
| password  | binary  | none       | no      | not null         |
| email     | varchar | 50         | no      | not null, unique |
| bio       | varchar | 100        | no      | not null         |


### Messages

| column       | type    | max length | default | constraints                          |
| ------------ | ------- | ---------- | ------- | ------------------------------------ |
| user_id      | integer | none       | no      | not null references: (Users.Id)      |
| container_id | integer | none       | no      | not null references: (Containers.Id) |
| message      | text    | none       | no      | not null                             |



<!--
### Posts

| column | type    | max length | default | constraints                      |
| ------ | ------- | ---------- | ------- | -------------------------------- |
| image  | text    | none       | no      | not null                         |
| capt   | text    | none       | ""      | not null                         |
| userId | integer | none       | no      | not null, references: (Users.Id) |

### Comments

| column | type    | max length | default | constraints                      |
| ------ | ------- | ---------- | ------- | -------------------------------- |
| postId | integer | none       | no      | not null, references: (Posts.Id) |
| userId | integer | none       | no      | not null, references: (Users.Id) |
| body   | text    | none       | no      | not null                         |

### Post Likes

| column | type    | max length | default | constraints                     |
| ------ | ------- | ---------- | ------- | ------------------------------- |
| userId | integer | none       | no      | not null references: (Users.Id) |
| postId | integer | none       | no      | not null references: (Posts.Id) |

### Comment Likes

| column    | type    | max length | default | constraints                        |
| --------- | ------- | ---------- | ------- | ---------------------------------- |
| userId    | integer | none       | no      | not null references: (Users.Id)    |
| commentId | integer | none       | no      | not null references: (Comments.Id) | -->
