const express = require('express')
var nodemailer = require("nodemailer");
const app = express()
const path = require('path');
const router = express.Router();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

//GET method to load the contact form
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);

// POST route from the contact form
app.post('/', (req, res) => {
    // Instantiate the SMTP server
    const transport = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: 'xxxxxxxxxxxxxxxxxxxx@gmail.com',
        pass: 'xxxxxxxxxxxxxx'
      }
    });
    
    var mailcontent = {
      // sender's address
      from: req.body.email, 
      //receiver's address
      to: 'shrivastavahoney611@gmail.com', 
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
   
    res.sendFile(path.join(__dirname+'/View/thankyou.html'));

  })
  app.listen (3000,function()
 {
  console.log("Application successfully started on PORT 3000");
})