const User = require('../model/User');
const axios = require('axios');
const generateChat = async (req, res) => {
  const { query } = req.body;
  const { id } = req.user;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    if (!query) {
      return res.status(400).json({ message: 'Query is required' });
    }

    user.chats.push({
      content: query,
      role: 'user',
    });
    const { data } = await axios.post(
      'http://a730-34-16-181-176.ngrok-free.app',
      {
        query,
      }
    );
    if (!data) {
      return res.status(400).json({ message: 'Data not found' });
    }

    user.chats.push({ content: data.response, role: 'bot' });
    await user.save();

    res.status(200).json({
      chat: user.chats,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getChats = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    res.status(200).json({
      chat: user.chats,
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  generateChat,
  getChats
};
