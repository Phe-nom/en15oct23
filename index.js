const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", (req,res) => {
	let name= req.body.name;
	let phone = req.body.phone;
	let query = req.body.query;

	let txt ="name " + name + "phone" + "query" + query;

	let transporter = nodemailer.createTransport({
	service: "gmail",
	auth : {
			user: "yeshwant37182@gmail.com",
			pass: "smjgkbghynxpltjc"
		}
})

let mailOptions = {
		from :"yeshwant37182@gmail.com",
		to:"sapeyeshwant@gmail.com",
		subject: "Enquiry from" +name,
		text :txt
		}
transporter.sendMail(mailOptions, (err,info) => {
		if(err)	
			res.status(500).json({"message" : "server error"});
		else
			res.status(200).json({"message" : "email.sent"});
	})
})

app.listen(9000, () => {console.log("ready @9000");});
