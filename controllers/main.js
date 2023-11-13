const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");
const login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		throw new BadRequestError("Please provide username and password");
	}
	const id = Date.now();
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	res.status(200).json({ msg: "user created", token });
};
const dashboard = async (req, res) => {
	const secretNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your lucky number is ${secretNumber}`,
	});
};
module.exports = {
	login,
	dashboard,
};
