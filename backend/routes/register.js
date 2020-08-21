const router = require('express').Router();
let Register = require('../models/register.model');

router.route('/').get((req, res) => {
    Register.find()
    .then(register => res.json(register))
    .catch(err =>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const schoolRole = req.body.schoolRole; 
    const schoolName = req.body.schoolName;

    const newRegister = new Register({
        username,
        name,
        password,
        schoolRole,
        schoolName,
        email,
    });

    newRegister.save()
    .then(() => res.json('Registration complete!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Register.findById(req.params.id)
      .then(register => res.json(register))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Register.findByIdAndDelete(req.params.id)
      .then(() => res.json('Registration deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Register.findById(req.params.id)
      .then(register => {
        register.username = req.body.username;
        register.name = req.body.name;
        register.schoolRole =req.body.schoolRole;
        register.schoolName =req.body.schoolName;
        register.password = Number(req.body.password);
        register.email = Date.parse(req.body.email);
  
        register.save()
          .then(() => res.json('Registration updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;