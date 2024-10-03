const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = Router();

const createToken = () => {
  return jwt.sign({}, 'secret', { expiresIn: '1h' });
};

const { getDb } = require('../db')

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const db = await getDb().collection('users')

    const user = await db.findOne({ email })
    if (!user) {
      res.status(401).json({ message: 'Authentication failed, invalid username or password.' });
      return;
    }

    const validPassword = await bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      res.status(401).json({ message: 'Authentication failed, invalid username or password.' });
      return;
    }

    const token = createToken();
    res.status(200).json({ token: token, user: { email: user.email } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Login failed.' });
  }

});

router.post('/signup', async (req, res, next) => {
  try {
    const db = await getDb().collection('users')
    const { email, password: pw } = req.body

    const hashed = await bcrypt.hashSync(pw, 12)
    await db.insertOne({ email, password: hashed })
    const token = createToken()
    res.status(201).json({ token, user: { email } })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Creating the user failed.' });
  }
});

module.exports = router;
