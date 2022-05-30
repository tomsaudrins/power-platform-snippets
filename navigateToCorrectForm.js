function navigate(executionContext) {    

    const formContext = executionContext.getFormContext()
    const serviceType = formContext.getAttribute("kontant_servicetype").getValue()
    const availableForms = formContext.ui.formSelector.items.get();
    const form = availableForms.filter(form => form._label == serviceType[0].name)
    const formId = formContext.ui.formSelector.getCurrentItem().getId();

    if (form.length && form[0]._id.guid != formId)
        form[0].navigate()
    
}

