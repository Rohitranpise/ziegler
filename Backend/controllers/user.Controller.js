const secret_key = process.env.SECRET_KEY
const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const max = 3 * 24 * 60 * 60;

const createUser = async (req, res) => {
    try {
        const { username, phone, password, role } = req.body;

        // Check if the phone number is already in use
        const existingUser = await User.findOne({ phone });

        if (existingUser) {
            // Phone number is already registered
            return res.status(400).json({ error: 'Phone number already registered' });
        }

        // Hash the password using bcrypt.hash, and wait for the result with await
        const hash = await bcrypt.hash(password, 12);

        const user = new User({
            username: username,
            phone: phone,
            password: hash,
            role: role,
        });

        // Use await with the save() method to wait for the operation to complete
        const savedUser = await user.save();

        console.log(`user created !`, savedUser);
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle other errors, such as database or server issues
        console.error(`Error creating user`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const userSignIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        if (user) {
            // Use async/await with bcrypt.compare
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({ id: user.id, role: user.role }, secret_key, { expiresIn: max });
                res.status(200).json({ token });
            } else {
                // Password doesn't match
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            // User not found
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
};



const getUsers = async (req, res) => {
    try {
        const data = await User.find()
        if (User.length != 0) {
            res.status(200).send(data);
            return;
        } else {
            res.status(200).send(`no users, blank!`)
            return;
        }
    } catch (error) {
        res.status(500).send(`internal server error`, error)
        return;
    }
}


const deleteAllUsers = async (req, res) => {
    try {
        const data = await User.deleteMany()
        res.status(200).json({ message: 'All users deleted!' });
        return;
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
}

module.exports = {
    createUser,
    getUsers,
    deleteAllUsers,
    userSignIn
}