const express = require('express');
const app = express();
const router = express.Router();
const Profiles = require('../models/Profile');


router.get('/', async (req, res) => {
    try {
        const profiles = await Profiles.find();
        res.json(profiles);
    }

    catch (err) {
        res.json({ messsage: err });
    }
});
router.post('/', async (req, res) => {
    const profile = new Profiles({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address
    });
    try {
        const profileSave = await profile.save();
        res.json(profileSave);
    }
    catch (err) {
        res.json({ messsage: err });
    }


});
router.get('/:id', async (req, res) => {
    try {
        const profile = await Profiles.findById(req.params.id);
        res.json(profile);
    }

    catch (err) {
        res.json({ messsage: err });
    }
});

router.patch('/:id', async (req, res) => {

    try {
        const profileUpdate = await Profiles.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    address: req.body.address
                }
            }

        );
        res.json(profileUpdate);
    }
    catch (err) {
        res.json({ messsage: err });
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const deleteProfile = await Profiles.remove({ _id: req.params.id });
        res.json(deleteProfile);
    }
    catch (err) { res.json({ message: err }) }
});
module.exports = router;