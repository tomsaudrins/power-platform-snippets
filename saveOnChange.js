function saveOnChange(executionContext) {
    const formContext = executionContext.getFormContext();
    formContext.data.save();
}
