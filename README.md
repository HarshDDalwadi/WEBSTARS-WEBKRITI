# Web-Krithi: TechFest Website
Web development project using nodejs ,expressjs, postgresql, HTML, CSS


##Features Implemented
**Landing page, Login, Registration and Sign-Up pages, Events page**

##Technologies Used

##Frontend
**HTML, CSS, javaScript**

##Backend
**expresss, node, postgres, bcrypt, passport, express-session, express-flash, path, alert, dotenv**

## Step 1:

**Clone the repository**

## Step 2:

**Add a .env file inside the root directory with the format given below:**<br />

- DB_USER=postgres<br />
DB_PASSWORD={your password}<br />
DB_HOST=localhost<br />
DB_PORT=5432<br />
DB_DATABASE=nodelogin<br /> // create a database named nodelogin in the postgres<br />
                      //create database by: **CREATE DATABASE nodelogin;**<br />
                      //connect to database by: **\c nodelogin;**<br />
## Step 3:

- **Add the below command in postgres sql shell to create table users after connecting into the nodelogin database:**

create table users<br />(id BIGSERIAL primary key not null,<br /> name varchar(50) not null,<br /> email varchar(200) not null,<br /> password varchar(500) not null,<br /> unique(email));

- Verify whether the table is created by typing: **\d users**;

## Step 4:
 
To start the project you can use the command: **npm run dev** in the root directory


