function saveOnChange(executionContext) {
    const formContext = executionContext.getFormContext();
    const serviceControl = formContext.getControl("kontant_service")
    const prisModel = formContext.getAttribute("kontant_prismodel")
    const subscriptionText = formContext

    let defaultView = "" 

    if(prisModel.getValue() != null)
        defaultView = "e4e235bd-09dc-ec11-bb3d-000d3a2cfdec" // View for Over 3.500 KG
    else if(subscriptionText == 'Ikke abonnent')
        defaultView = "6e1df727-0adc-ec11-bb3d-000d3a2cfdec"; // View for Under 3.500 KG without subscription
    else
        defaultView = "82d5e606-0ddc-ec11-bb3d-000d3a2cf04e"; // View for Under 3.500 KG with subscription
    
    serviceControl.setDefaultView(defaultView);
}
