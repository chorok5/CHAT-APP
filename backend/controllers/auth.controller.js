import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }

        // hash password HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https:avater-placeholder.iran.liara.run : 갑자기 사이트 접속이 안된다.
        // const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        // const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const profilePic = `https://source.boringavatars.com/beam/200/username=${username}`;
    

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
        });

        if (newUser) {
            // generate JWT token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
        }

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup", error);
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("Request body:", req.body);

        const user = await User.findOne({ username });
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ error: "Invalid username 유저네임 문제 " });
        }

        console.log("User found:", user);

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log("Password correct:", isPasswordCorrect);

        if (!isPasswordCorrect) {
            console.log("Password mismatch");
            return res.status(400).json({ error: "Invalid  password 비밀번호 문제" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login", error);
        res.status(500).json({ error: error.message });
    }


}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in login", error);
        res.status(500).json({ error: error.message });
    }
};

