const  express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors= require('cors')

const app = express()
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactFormDB');
//3. WE will make objects available db which will hold mongoose.connnetion
const db=mongoose.connection;
//4. once event will call only once when database open
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });
  // Create a Mongoose model
const Contact = mongoose.model('contactSpace', contactSchema);


const port = 5000
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({
       name: name,
       email: email,
        message:message,
      });
    // TODO: Implement your logic to process the form data
    // For now, let's log the data to the console
    console.log('Received form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    const savedContact = await newContact.save();
    console.log('Contact saved:', savedContact);
  
    // Send a response to the client
    res.json({ success: true, message: 'Form submitted successfully!' });
  });
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))