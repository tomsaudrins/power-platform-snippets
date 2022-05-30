function updateSubgridCurrency(entity, parentLookup, parentGuid, basicFiled, currencyId, sub, moms, total){
    Xrm.WebApi.retrieveMultipleRecords(entity, `?$filter=${parentLookup} eq ${parentGuid}&$select=${basicFiled}`)
    .then(success => {
        if (success.entities) {
            let subtotal = 0;
            success.entities.map(item => {
                subtotal += item.kontant_subtotal
                Xrm.WebApi.updateRecord(entity, item.kontant_servicerequestitemid || item.kontant_serviceitemid, {"transactioncurrencyid@odata.bind": `/transactioncurrencies(${currencyId})`})

            })
            formContext.getAttribute(sub).setValue(subtotal);
            formContext.getAttribute(moms).setValue(subtotal * 0.25);
            formContext.getAttribute(total).setValue(subtotal+moms);
            }
        }, console.error);
}
