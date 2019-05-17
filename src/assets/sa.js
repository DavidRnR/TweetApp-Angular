const form = {
    name: {
        value: null,
        valid: false,
        validators: {
            required: true,
            maxLength: maxLength(30)
        },
        messageError: labels.nameError
    },
    password: null,
    valid: true
};