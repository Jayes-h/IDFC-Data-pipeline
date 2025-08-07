const pool = require('../../db/db-config');

async function insertFinancials(data) {
    console.log("insert financials into postgres");

    for (const entry of data) {
        console.log("financials data",entry);
        await pool.query(

            `INSERT INTO financials (
                year,
                loans_advances_cr,
                deposits_cr,
                casa_ratio_percent,
                gross_npa_percent,
                net_npa_percent,
                pat_cr,
                roa_percent,
                roe_percent
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                parseInt(entry['Year']),
                parseFloat(entry['Loan_Advances (Cr)']),
                parseFloat(entry['Deposits (Cr)']),
                parseFloat(entry['CASA_Ratio (%)']),
                parseFloat(entry['Gross_NPA (%)']),
                parseFloat(entry['Net_NPA']),
                parseFloat(entry['PAT (Cr)']),
                parseFloat(entry['ROA (%)']),
                parseFloat(entry['ROE (%)'])
            ]
        );
    }
}

module.exports = { insertFinancials };
