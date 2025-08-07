const pool = require('../../db/db-config');

async function insertLoanDistribution(data) {
    console.log("Inserting loan_distribution data into PostgreSQL",data);

    for (const entry of data) {
        await pool.query(
            `INSERT INTO loan_distribution (
                year,
                segment,
                loan_share_percent,
                notes
            ) VALUES ($1, $2, $3, $4)`,
            [
                parseInt(entry['Year']),
                entry['Segment'],  // Keep as string
                parseFloat(entry['Loan Share (%)']),
                entry['Notes'] || null  // Handle optional Notes field
            ]
        );
    }
}

module.exports = { insertLoanDistribution };
