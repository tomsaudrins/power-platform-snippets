function calculateDuration(executionContext) {    

    const formContext = executionContext.getFormContext()
    const providedDuration = formContext.getAttribute("kontant_duration").getValue()
    const invoiceDuration = formContext.getAttribute("kontant_durationinvoice")
    
    if (providedDuration === null)
        return

    const wholeHours = Math.floor(providedDuration / 60)
    const remainingMinutes = providedDuration - wholeHours * 60

    const totalMinutes = Math.max(wholeHours * 60 + Math.ceil(remainingMinutes / 15)*15, 60)

    invoiceDuration.setValue(totalMinutes)
}