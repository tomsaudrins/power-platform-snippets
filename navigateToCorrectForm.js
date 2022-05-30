function navigate(executionContext) {    

    const formContext = executionContext.getFormContext()
    const serviceType = formContext.getAttribute("kontant_servicetype").getValue()
    const availableForms = formContext.ui.formSelector.items.get();
    const form = availableForms.filter(form => form._label == serviceType[0].name)

    if (form.length)
        form[0].navigate()
    
}

