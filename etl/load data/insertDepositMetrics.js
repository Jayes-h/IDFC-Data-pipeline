const pool = require('../../db/db-config');

async function insertDepositMetrics(data) {
    console.log("insert deposit metrics into postgres");

    for (const entry of data) {
        console.log("entry",data);
        await pool.query(

            `INSERT INTO deposit_metrics (
                year,
                customer_deposits_cr,
                casa_deposits_cr,
                casa_ratio_percent,
                deposit_growth_yoy_percent,
                retail_deposit_share_percent
            ) VALUES ($1, $2, $3, $4, $5, $6)`,
            [
                parseInt(entry['Year ']),
                parseFloat(entry['Customer Deposits (Cr)']),
                parseFloat(entry['CASA Deposits (Cr)']),
                parseFloat(entry['CASA Ratio (%)']),
                parseFloat(entry['Deposit Growth YoY (%)']),
                parseFloat(entry['Retail Deposit Share (%)'])
            ]
        );
    }
}

module.exports = { insertDepositMetrics };
