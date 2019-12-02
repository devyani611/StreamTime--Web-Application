const express = require('express')
var nodemailer = require("nodemailer");
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

//GET method to load the contact form
app.get('/', function(req, res) 
{
res.sendFile(`${__dirname}/contact.html`)
});

// POST route from the contact form
app.post('/', (req, res) => {
    // Instantiate the SMTP server
    const transport = nodemailer.createTransport({
      service: 'gmail',
      //secure: false,
      auth: {
        // mailtrap generated user id
        user: 'xxxxxxxxxxxxxxxxxxx@gmail.com',
        // mailtrap generated password
        pass: 'xxxxxxxxxxxxx'
      }
    });
    
    var mailcontent = {
      // sender's address
      from: req.body.email, 
      //receiver's address
      to: 'shrivastavadevyani611@gmail.com, vinaya.dbhat@gmail.com, amisankhesara',
      subject: 'Movie search',
      //content received from HTML form
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
    
    // Attempt to send the email
    transport.sendMail(mailcontent, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    })
    res.send('<h2>Message sent successfully</h2>')
  })
  app.listen (3000,function()
 {
  console.log("Application started on PORT 3000");
})