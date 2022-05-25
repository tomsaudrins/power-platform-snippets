function saveOnCreate(executionContext) {    

    const formContext = executionContext.getFormContext()
    const isCreateForm = formContext.ui.getFormType() == 1;

        if (isCreateForm)
        {        
            formContext.data.save();
        }
    }