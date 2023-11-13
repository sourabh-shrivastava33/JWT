const jwt = require("jsonwebtoken");
const { UnauthencatedError } = require("../errors");
const authMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new UnauthencatedError("no token provided");
	}
	const token = authHeader.split(" ")[1];
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const { id, username } = decoded;
		req.user = { id, username };
		next();
	} catch (error) {
		throw new UnauthencatedError("you have no authorized access to this route");
	}
};
module.exports = authMiddleware;
