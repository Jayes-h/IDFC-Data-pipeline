const pool = require('../../db/db-config');

async function insertLibilities(data) {
    console.log("insert libilities into postgres");

    for (const entry of data) {
        await pool.query(

            `INSERT INTO liabilities (
                year,
                retail_deposits_cr,
                legacy_borrowings_cr,
                certificate_of_deposits_cr,
                corporate_deposits_cr,
                government_banking_cr,
                fresh_borrowings_cr,
                total_libilities_cr,
                retail_percent,
                legacy_percent,
                cod_percent,
                corporate_percent,
                govt_percent
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
            [
                parseInt(entry['Year ']),
                parseFloat(entry['Retail Deposits (Cr)']),
                parseFloat(entry['Legacy Borrowings (Cr)']),
                parseFloat(entry['Certificate of Deposits (Cr)']),
                parseFloat(entry['Corporate Deposits (Cr']),
                parseFloat(entry['Government Banking (Cr)']),
                parseFloat(entry['Fresh Borrowings (Cr)']),
                parseFloat(entry['Total Liabilities (Cr)']),
                parseFloat(entry['Retail %']),
                parseFloat(entry['Legacy %']),
                parseFloat(entry['CoD %']),
                parseFloat(entry['Corporate %']),
                parseFloat(entry['Govt %'])
            ]
        );
    }
}

module.exports = { insertLibilities };
