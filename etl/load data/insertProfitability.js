const pool = require('../../db/db-config');

async function insertProfitability(data) {
    console.log("insert profitability into postgres");

    for (const entry of data) {
        await pool.query(

            `INSERT INTO profitability (
                year,
                total_income_cr,
                net_profit_cr,
                operating_profit_ppop_cr,
                net_interest_income_cr,
                flee_other_income_cr,
                net_interest_margin_percent,
                roa_percent,
                roe_percent
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                parseInt(entry['Year ']),
                parseFloat(entry['Total Income (Cr)']),
                parseFloat(entry['Net Profit (Cr)']),
                parseFloat(entry['operating Profit (PPOP) (Cr)']),
                parseFloat(entry['Net Interest Income (Cr']),
                parseFloat(entry['Fee & Other Income (Cr)']),
                parseFloat(entry['Net Interest Margin (Cr)']),
                parseFloat(entry['ROA (%)']),
                parseFloat(entry['ROE (%)'])
            ]
        );
    }
}

module.exports = { insertProfitability };
