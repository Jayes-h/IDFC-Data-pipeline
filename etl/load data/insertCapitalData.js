const pool = require('../../db/db-config');


// INSERT into PostgreSQL
async function insertCapitalData(data) {
    console.log("insert in postgres");
    for (const entry of data) {
        await pool.query(
            `INSERT INTO capital (
        year,
        net_worth_cr,
        cet1_capital_cr,
        tier1_capital_cr,
        tier2_capital_cr,
        total_capital_cr,
        rwa_cr,
        crar_percent,
        cet1_ratio_percent,
        tier2_ratio_percent,
        leverage_ratio_percent,
        book_value_per_share,
        eps
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
            [
                parseInt(entry['Year']),
                parseFloat(entry['Net Worth (Cr)']),
                parseFloat(entry['CET1 Capital (Cr)']),
                parseFloat(entry['Tier 1 Capital (Cr)']),
                parseFloat(entry['Tier 2 Capital (Cr)']),
                parseFloat(entry['Total Capital (Cr)']),
                parseFloat(entry['RWA (Cr)']),
                parseFloat(entry['CRAR (%)']),
                parseFloat(entry['CET1 Ratio (%)']),
                parseFloat(entry['Tier 2 Ratio (%)']),
                parseFloat(entry['Leverage Ratio (%)']),
                parseFloat(entry['Book Value/Share (?)']),
                parseFloat(entry['EPS (?)'])
            ]
        );
    }
}

module.exports={ insertCapitalData};