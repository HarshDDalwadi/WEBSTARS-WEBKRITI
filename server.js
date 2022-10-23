const express = require('express');
const { pool } = require('./dbConfig');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const ejs = require('ejs');
const path = require('path');
const alert = require('alert');
const dotenv = require('dotenv');


const initializePassport = require('./passportConfig');

initializePassport(passport);

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

app.use(flash());

app.get('/register', checkAuthenticated, (req, res) => {
    res.render('register');
});

app.get('/login', checkAuthenticated, (req, res) => {
    res.render('login');
});

app.get('/dashboard', checkNotAuthenticated, (req, res) => {
    res.render('index', { name: req.user.name, email: req.user.email });
    // console.log(req.user.email);
});

app.get('/logout', (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', "You have logged out");
        res.redirect('/login');
    });
});

app.post('/register', async (req, res) => {
    let { name, email, password, password2, father_name, mother_name, college_name, contact_number_1, contact_number_2, state_name, standard, gender, age } = req.body;
    // console.log({ name, email, password, password2 });

    let errors = [];

    if (!name) {
        errors.push({ message: 'Please enter username' });
    }

    if (!email) {
        errors.push({ message: "Please enter email" });
    }

    if (!gender) {
        errors.push({ message: "Please enter gender" });
    }

    if (!password) {
        errors.push({ message: "Please enter password" });
    }

    if (!password2) {
        errors.push({ message: "Please confirm password" });
    }

    if (!college_name) {
        errors.push({ message: "Please enter college name" });
    }

    if (!contact_number_1) {
        errors.push({ message: "Please enter contact number" });
    }

    if (!state_name) {
        errors.push({ message: "Please enter state name" });
    }

    if (!standard) {
        errors.push({ message: "Please enter year" });
    }

    if (password.length < 6) {
        errors.push({ message: 'Password should be atleast 6 characters' });
    }


    if (password != password2) {
        errors.push({ message: 'Passwords do not match' });
    }

    if (password != password2) {
        errors.push({ message: 'Passwords do not match' });
    }

    if (errors.length > 0) {
        res.render('register', { errors });
    }

    else {
        //Form validation has passed
        let hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);


        pool.query(
            `SELECT * FROM users
            WHERE email = $1`, [email], (err, results) => {
            if (err) {
                throw err
            }
            // console.log(results.rows);

            if (results.rows.length > 0) {
                errors.push({ message: 'Email already registered' });
                res.render('register', { errors });
            }
            else {
                pool.query(`
                    INSERT INTO users (name, email, password,college_name, standard, state_name, gender, age, contact_number_1, contact_number_2, father_name, mother_name)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [name, email, hashedPassword, college_name, standard, state_name, gender, age, contact_number_1, contact_number_2, father_name, mother_name], (err, results) => {
                    if (err) {
                        throw err;
                    }

                    // console.log(results.rows);
                    req.flash('success_msg', "You are now registered. Please log in");
                    res.redirect('/login');
                }
                );
            }
        }
        )
    }
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}), (req, res) => {
    let email = req.body.email;
    // console.log(email);
}
);


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard');
    }
    next();
}


function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}


app.get('/', (req, res) => {
    res.render('index', { name: 'User' });
});

app.get('/user-dashboard', loggedIn, (req, res) => {
    pool.query(`SELECT event_name from events_participation WHERE email = $1`, [req.user.email], (err, results) => {
        if (err) {
            throw err;
        }
        else {
            console.log(results.rows);
            res.render('user-dashboard', { name: req.user.name, email: req.user.email, results });
        }
    });
});

// app.post('/user-dashboard', loggedIn, (req, res) => {
// });

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/event_1', (req, res) => {
    res.render('event_1');
});
app.get('/event_2', (req, res) => {
    res.render('event_2');
});
app.get('/event_3', (req, res) => {
    res.render('event_3');
});
app.get('/event_4', (req, res) => {
    res.render('event_4');
});
app.get('/event_5', (req, res) => {
    res.render('event_5');
});
app.get('/event_6', (req, res) => {
    res.render('event_6');
});
app.get('/event_7', (req, res) => {
    res.render('event_7');
});
app.get('/event_8', (req, res) => {
    res.render('event_8');
});
app.get('/event_9', (req, res) => {
    res.render('event_9');
});
app.get('/contact-us', (req, res) => {
    res.render('contact');
});

app.get('/register', (req, res) => {
    res.render('register');
});


app.get('/register-event', loggedIn, (req, res) => {
    // The user is logged in otherwise they would have been redirected
    res.render('register-event');
})

app.post('/register-event', (req, res) => {

    let email = req.body.email;
    let event_name = req.body.event_name;
    console.log(email, event_name);
    // console.log(event_name);

    pool.query(`SELECT * FROM events_participation WHERE email=$1 AND event_name=$2`, [email, event_name], (err, results) => {
        if (err) {
            throw err;
        }

        if (results.rows.length > 0) {
            alert("You have already registered in event");
            res.redirect('/dashboard');
        }

        else {
            pool.query(`INSERT INTO events_participation (email, event_name)
            VALUES ($1, $2)`, [email, event_name], (err, results2) => {
                if (err) {
                    throw err;
                }
                // console.log(results.rows);
                req.flash('success_msg', "You are now registered");
                alert("You are now registered for the event");
                res.redirect('/dashboard');
            }
            )
        }
    }
    );
}
);


app.post('/user-dashboard', (req, res) => {
    res.render('user-dashboard', { user })
    pool.query(`SELECT * FROM events_participation WHERE name = $1`, [email], (err, results) => {
        if (err) {
            throw err
        }
        // console.log(results.rows)
    }
    )

})

function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});


