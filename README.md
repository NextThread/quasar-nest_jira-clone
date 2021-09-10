# Jira clone with Quasar (Vue 3 TS) + Nest (Node.js)

### Stack
#### Frontend

1. Vue 3
2. Vuex
3. Typescript
4. Quasar (ui)
5. Socket.io (real-time issues update) (not implemented yet ❌)
6. Vuedraggable (kanban board)
7. Vue i18n (for pluralization '1 доскА' '2 доскИ' '6 досОК' (one board, two boardS, six boardS)) (not implemented yet ❌)
8. Vue test utils + Jest (testing) (not implemented ❌)
9. RTL view (haha, even in jira rtl doesn't work very well, but thanks to quasar pretty nice rtl support in this clone and CSS gaps)
10. other - date-fns, some lodash functions, eslint + tslint + prettier

#### Backend stack

1. Nest.js
2. Typescript
3. PostgreSQL + TypeORM (database)
4. Swagger, Swagger UI (docs)
5. Passport, JWT auth
6. Socket.io (not implemented yet ❌)
7. Jest (testing) (not implemented yet ❌)
8. AWS S3 (Amazon Simple Storage Service)
9. Elasticsearch (just for app complexity 😄) 
10. Nodemailer, @nestjs/schedule and cron (annoying email messages with very-very-very interisting news or email confirmation)
11. Mailtrap as free dev smtp server

#### Other

Github actions CI pipeline

### Features
#### Auth

- Login / Register / Forgot password  
- Unique username validation  
- Send email verification mail (not implemented yet ❌) 
- Send (news) emails with schedule (not implemented yet ❌)
- Send forgot password mail (not implemented yet ❌)  
- Automaticly redirect to requested page after login (/auth?redirect=/projects)  
- JWT access (1d exp) and refresh (30d exp) tokens, auto relogin if access token expired  

#### Projects

- Add new project  
- Delete project  
- View project detail with boards  
- Mark project as favorite  
- Upload project avatar (not implemented yet ❌)  
- Projects pagination (not implemented yet ❌)  
- Projects sorting (not implemented yet ❌)  
- Projects search (not implemented yet ❌) 
  
#### Project Detail
##### Boards (only kanban and no multiple boards on one page)

- Add board (with ability to select project and automaticly redirect, interface is slightly different from jira)
- Board settings (not implemented yet ❌)  
- Delete board  
- Auto load last viewed board (or load it from URL)  
- Auto load last viewed issue (from URL)  
- Mark board as favorite  
- Drag & drop issues between columns
- Edit column name

##### Board Issues

- Issues filter by user (not implemented yet ❌)  
- Issues filter by last changes (not implemented yet ❌)  
- Issues search (not implemented yet ❌)  
  
- Projects search (not implemented yet ❌) 
- Change name / description
- WYSYWIG description editor
- Change column
- Change assigned user
- Change author
- Change issue type
- Change issue priority
- Add marks (not implemented yet ❌) 
- Created at / updated at fields with ability to toggle show mode (2 hours ago, 16 seconds ago, etc..) and default (May 15, 13:43)
- Add / Edit / Delete comments
- Reply comment (not implemented yet ❌) 

##### Roadmap    
  
#### Filters
–
  
#### Dashboards
–

#### People
- Teams CRUD (not implemented yet ❌) 
- Add users in created team (not implemented yet ❌) 

##### User / Team profile page
- Edit user info - change username / display name / email / location / organisation etc...

- Upload header image (store in AWS S3, compression with [sharp](https://github.com/lovell/sharp))
- Upload user / team avatar (store in AWS S3, compression with [sharp](https://github.com/lovell/sharp))

- View assigned issues
- View watching issues
- View favorite projects

- View user teams / team users


