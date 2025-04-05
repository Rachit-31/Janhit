import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProblemReport'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;
