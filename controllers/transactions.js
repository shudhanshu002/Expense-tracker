const Transaction = require('../models/Transaction');

exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.deleteTransactions = async(req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                success: false,
                error : 'No transaction found'
            })
        }

        await transaction.remove();
    } catch (error) {
        return res.status(500).json({
        success: false,
        error: 'Server Error'
        });
    }
} 