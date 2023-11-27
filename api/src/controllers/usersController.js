const User = require('../model/User');

const getUsers = async (req, res) => {
    const users = await User.find().exec();
    if(!users) return res.status(204).json({ message: 'User not found' });
    res.status(200).json(users);
}

const updateUser = async (req, res) => {
    if(!req?.params?.id) {
        return res.status(400).json({ 'message': 'User ID is required' });
    }
    const user = await User.findById({_id: req.params.id }).exec();
    if (!user) {
        return res.status(400).json({ "message": `user with ID ${req.params.id} not found` });
    }

    if (req.body?.username) user.username = req.body.username;

    const result = await user.save();

    res.json(result);
}

const deleteUser = async (req, res) => {
    if(!req?.params?.id) {
        return res.status(400).json({ 'message': 'User ID is required' });
    }
    const user = await User.findById({_id: req.params.id }).exec();
    if (!user) {
        return res.status(400).json({ "message": `user with ID ${req.params.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.params.id });
    res.status(200).json(result);
}

module.exports = {
    getUsers,
    updateUser,
    deleteUser
}