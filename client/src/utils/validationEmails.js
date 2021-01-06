const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function validationEmails( emails){
    const invalidEmail = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => !re.test(email));

        if(invalidEmail.length){
            return `These emails are invalid: ${invalidEmail}`
        };

        return;

}