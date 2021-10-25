var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jagadishgollapalli24@gmail.com',
    pass: 'G24@empire'
  }
});

var mailOptions = {
  from: 'jagadishgollapalli24@gmail.com',
  to: 'jagadishgollapalli620@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});