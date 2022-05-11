const getSubgridItems = (executionContext) => {
    const formContext = executionContext.getFormContext(); 
    const entity = 'subgridentity' 
    const basicFiled = 'referencefield'
    const parentLookup = '_parenttableid_value' 
    const parentGuid = formContext.data.entity.getId();
    
    Xrm.WebApi.retrieveMultipleRecords(entity, `?$filter=${parentLookup} eq ${parentGuid}&$select=${basicFiled}`).then(success => {
        if (success.entities) {
        }
    }, console.error);
}
