const pool = require('../../db/db-config');

async function insertLoanDistribution(data) {
    console.log("insert loan_distribution into postgres");

    for (const entry of data) {
        await pool.query(

            `INSERT INTO loan_destribution (
                year,
                Segment,
                loan_share_percent,
                notes
            ) VALUES ($1, $2, $3, $4)`,
            [
                parseInt(entry['Year ']),
                parseFloat(entry['Segment']),
                parseFloat(entry['Loan Share (%)']),
                parseFloat(entry['Notes'])
            ]
        );
    }
}

module.exports = { insertLoanDistribution };
