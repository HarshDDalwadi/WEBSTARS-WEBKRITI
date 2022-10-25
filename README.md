# Web-Krithi: TechFest Website
## Project Description:

Web development project using nodejs ,expressjs, postgresql, HTML, CSS


##Features Implemented
## Screenshots:
- ![IMG-20221025-WA0014](https://user-images.githubusercontent.com/92083282/197797050-8aad3536-7373-4d17-bc34-c7ed268bfa48.jpg)
- ![IMG-20221025-WA0013](https://user-images.githubusercontent.com/92083282/197797033-73b9bf03-6658-464e-b058-6b582449cdce.jpg)
- ![IMG-20221025-WA0016](https://user-images.githubusercontent.com/92083282/197797064-ee9da0a5-9f53-4679-bd78-ec065bce506d.jpg)
- ![IMG-20221025-WA0015](https://user-images.githubusercontent.com/92083282/197797060-8b865f26-a7c8-44c9-93dd-c4a7223c7b8e.jpg)
- ![IMG-20221025-WA0017](https://user-images.githubusercontent.com/92083282/197797070-11881c5e-00ed-498f-9e30-dc493244f477.jpg)
- ![IMG-20221025-WA0018](https://user-images.githubusercontent.com/92083282/197797076-7874dd15-6ffa-4fa2-9eb2-862d080f1b6d.jpg)
- ![IMG-20221025-WA0021](https://user-images.githubusercontent.com/92083282/197797087-fd1ea411-e858-4b9e-85a1-56ae800b68b4.jpg)
- ![IMG-20221025-WA0019](https://user-images.githubusercontent.com/92083282/197797078-043b5c61-45d8-4c19-ba59-741d4f8cf52e.jpg)
- ![IMG-20221025-WA0023](https://user-images.githubusercontent.com/92083282/197797096-19f72566-a3f4-4067-83de-c89c1065d624.jpg)
- ![IMG-20221025-WA0022](https://user-images.githubusercontent.com/92083282/197797091-fd68af87-f54f-4c49-8ced-839f90009b1d.jpg)
- ![IMG-20221025-WA0020](https://user-images.githubusercontent.com/92083282/197797082-018bfb0d-f07b-42f1-83c3-1d8a5f8f2262.jpg)


## Features Implemented
**Landing page, Login, Registration and Sign-Up pages, Events page**

##Technologies Used
## Technologies Used

##Frontend
- Frontend:<br/>
**HTML, CSS, javaScript**

##Backend
- Backend:<br/>
**expresss, node, postgres, bcrypt, passport, express-session, express-flash, path, alert, dotenv**

## Step 1:
## Local Setup:

### Step 1:

**Clone the repository**

## Step 2:
### Step 2:

**Add a .env file inside the root directory with the format given below:**<br />

- DB_USER=postgres<br />
DB_PASSWORD={your password}<br />
DB_HOST=localhost<br />
DB_PORT=5432<br />
@@ -28,16 +35,23 @@ DB_PORT=5432<br />
DB_DATABASE=nodelogin<br /> // create a database named nodelogin in the postgres<br />
                      //create database by: **CREATE DATABASE nodelogin;**<br />
                      //connect to database by: **\c nodelogin;**<br />
## Step 3:
### Step 3:

- **Add the following commands in postgres sql shell to create table users after connecting into the nodelogin database:**

- **Add the below command in postgres sql shell to create table users after connecting into the nodelogin database:**
  - create table users<br />(id BIGSERIAL primary key not null, name varchar(50) not null,<br /> email varchar(200) not null,password varchar(500) not null,<br />login int, college_name varchar(200),<br/> standard varchar(200), state_name varchar(200),<br/> age int, contact_number_1 varchar(200),<br/> contact_number_2 varchar(200), father_name varchar(200),<br/> mother_name varchar(200), gender varchar(200), unique(email));
  - create table events_participation(event_name varchar(200) not null,email varchar(200));

create table users<br />(id BIGSERIAL primary key not null,<br /> name varchar(50) not null,<br /> email varchar(200) not null,<br /> password varchar(500) not null,<br /> unique(email));

- Verify whether the table is created by typing: **\d users**;

## Step 4:

### Step 4:

To start the project you can use the command: **npm run dev** in the root directory

## Team Members:

- Harsh Dalwadi:      2021IMT-026
- Muthiah Sivavelan:  2021IMG-034
- Mithil Jogi:        2021IMG-033
