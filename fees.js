let faker = require('faker');


let randomDate = (start) => {
    var dateFrom = new Date(faker.date.recent(start))
    month = '' + (dateFrom.getMonth() + 1),
    day = '' + dateFrom.getDate(),
    year = dateFrom.getFullYear().toString().substr(-2);
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    return [month, day, year].join('/')
}
    

let generateFees = () => {
    let fees = [];

    for (let id = 0; id < 80; id++) {
        var actions = ["ADD", "NONE", "SAD", "UPDATE"]
        var partnerTypeNames = ["BORROWER", "LENDER"]

        fees.push({
            "Action": actions[faker.random.number() % 4],
            "ActionReason": "",
            "BuyerDebit": faker.finance.amount(),
            "BuyerPOCAmount": faker.finance.amount(),
            "CDBuyerDebit": faker.finance.amount(),
            "CDBuyerPOCAmount": faker.finance.amount(),
            "CDLineDescription": faker.random.words(),
            "CDSection": String.fromCharCode(65+Math.floor(Math.random() * 12)),
            "CommonSettlementID": `${faker.random.number()}`,
            "FeeId": `${faker.random.uuid()}`,
            "HUDLineDescription": `${faker.random.words()}`,
            "MatchType": "",
            "POCPartnerTypeID": `${faker.random.number()}`,
            "POCPartnerTypeName": partnerTypeNames[faker.random.number() % 2],
            "PayorName": `${faker.company.companyName()}`,
            "SettlementTypeID": `${faker.random.number()}`,
            "SettlementTypeName": `${faker.random.word()}`,
            "PayeeName": `${faker.name.findName()}`,
            "InterestFromDate": randomDate(-1),
            "InterestToDate": randomDate(-30),
            "PerDiem": faker.finance.amount(),
            "Months": faker.random.number() % 13,
            "PaymentPerMonth": faker.finance.amount(),
            "PercentOfBasis": faker.finance.amount()/10000.0
        });
    }

    return {
        "ds": [{
            "id": 1,
            "result": {
                "status": 200,
                "loan_amount": 70353,
                "status_desc": "OK",
                "borrower_proceeds": 69.71,
                "fee_collab_result": fees,
                "loan_info": {
                    "ClosingDate": "06/02/2020",
                    "DateIssued": null,
                    "DisbursementDate": "06/08/2020",
                    "InterestRate": 2.99,
                    "LoanAmount": 70353,
                    "LoanNumber": "1394434584",
                    "BorrowerProceeds": 69.71,
                    "LenderCredits": null,
                    "CDStartPage": 1,
                    "LenderWireAmount": 66665.51
                }
            },
            "timing": 3832.2274684906006,
            "release": {
                "model_version": "5ed5692446e0fb00095298e5",
                "harness_version": "0.1",
                "model_version_number": 50
            },
            "request_id": "HVOXQ5CEZRFIS0MD",
            "model_time_in_ms": 3832
        }]
    }
}

module.exports = generateFees
