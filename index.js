const express = require('express');
const bodyParser = require('body-parser')
const SGmail = require ('@sendgrid/mail')
const cors = require('cors')
const path = require('path');
const app = express();
const port = process.env.PORT || 4444;

//MiddleWares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

SGmail.setApiKey(process.env.REACT_APP_SG_API)
if (process.env.NODE_ENV === 'production') {

SGmail.setApiKey(process.env.REACT_APP_SG_API || process.env.SG_API)
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.get('/api/mails', (req, res) => {
    res.json(req.body)
})

app.post('/api/mail', (req,res) => {
    const data = req.body
    const mailOptions = {
        from: data.email,
        to:'mish.al.shomary@gmail.com',
        subject:'Subject',
        html:`<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
    }
    SGmail.send(mailOptions).then((err,res)=>{res.redirect('/') 
    if(err){res.redirect('/')}})
})

app.listen( port, () => {
    console.log('live on port 4444')
    console.log(process.env.REACT_APP_SG_API);
    
})