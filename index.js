const express = require('express');
const bodyParser = require('body-parser')
const SGmail = require ('@sendgrid/mail')
const cors = require('cors')
const path = require('path');
const app = express();

SGmail.setApiKey('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')
const port = process.env.PORT || 4444;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static('/client/build'))

if(process.env.NODE_ENV === 'production'){
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'/client','build','index.html'))
      });
}


app.get('/api/mail', (req, res) => {
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
    SGmail.send(mailOptions).then(()=>{res.redirect('/')})
})

app.listen( port, () => {
    console.log('live on port 4444')
})