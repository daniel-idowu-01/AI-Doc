const User = require('../model/User');
const axios = require('axios');
const generateChat = async (req, res) => {
  const { messages } = req.body;
  const { id } = req.user;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    const { data } = await axios.post(
      'http://8320-34-125-150-98.ngrok-free.app',
      {
        query: messages,
      }
    );

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  generateChat,
};
