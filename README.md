# Web-Krithi: TechFest Website
## Project Description:

Web development project using nodejs ,expressjs, postgresql, HTML, CSS


## Screenshots:


## Features Implemented
**Landing page, Login, Registration and Sign-Up pages, Events page**

## Technologies Used

- Frontend:<br/>
**HTML, CSS, javaScript**

- Backend:<br/>
**expresss, node, postgres, bcrypt, passport, express-session, express-flash, path, alert, dotenv**

## Local Setup:

### Step 1:

**Clone the repository**

### Step 2:

**Add a .env file inside the root directory with the format given below:**<br />

- DB_USER=postgres<br />
DB_PASSWORD={your password}<br />
DB_HOST=localhost<br />
DB_PORT=5432<br />
DB_DATABASE=nodelogin<br /> // create a database named nodelogin in the postgres<br />
                      //create database by: **CREATE DATABASE nodelogin;**<br />
                      //connect to database by: **\c nodelogin;**<br />
### Step 3:

- **Add the following commands in postgres sql shell to create table users after connecting into the nodelogin database:**

  - create table users<br />(id BIGSERIAL primary key not null, name varchar(50) not null,<br /> email varchar(200) not null,password varchar(500) not null,<br />login int, college_name varchar(200),<br/> standard varchar(200), state_name varchar(200),<br/> age int, contact_number_1 varchar(200),<br/> contact_number_2 varchar(200), father_name varchar(200),<br/> mother_name varchar(200), gender varchar(200), unique(email));
  - create table events_participation(event_name varchar(200) not null,email varchar(200));


- Verify whether the table is created by typing: **\d users**;

### Step 4:
 
To start the project you can use the command: **npm run dev** in the root directory

## Team Members:

- Harsh Dalwadi:      2021IMT-026
- Muthiah Sivavelan:  2021IMG-034
- Mithil Jogi:        2021IMG-033

