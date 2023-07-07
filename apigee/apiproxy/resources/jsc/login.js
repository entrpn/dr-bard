/**
 * login.js - authenticate user against properties file 'user.properties'
 * @param google.dialogflow.session.parameters.date-of-birth.year
 * @param google.dialogflow.session.parameters.date-of-birth.month
 * @param google.dialogflow.session.parameters.date-of-birth.day
 * @param google.dialogflow.session.parameters.last-name
 * @return {string} df.login-response-status
 * @return {string} df.login-response-first-name
 * @return {string} df.login-response-medical_history
 **/

var last_name = context.getVariable('google.dialogflow.session.parameters.last-name');
var dob_year = context.getVariable('google.dialogflow.session.parameters.date-of-birth.year');
var dob_month = context.getVariable('google.dialogflow.session.parameters.date-of-birth.month');
var dob_day = context.getVariable('google.dialogflow.session.parameters.date-of-birth.day');

context.setVariable('df.login-response-status', false);
if (context.getVariable('propertyset.user.' + last_name + '_enabled')) {
    if ((dob_year == context.getVariable('propertyset.user.' + last_name + '_dob_year')) &&
        (dob_month == context.getVariable('propertyset.user.' + last_name + '_dob_month')) &&
        (dob_day == context.getVariable('propertyset.user.' + last_name + '_dob_day'))) {
            var first_name = context.getVariable('propertyset.user.' + last_name + '_first_name');
            var medical_history = context.getVariable('propertyset.user.' + last_name + '_medical_history');
            
            context.setVariable('df.login-response-status', true);
            context.setVariable('df.login-response-first-name', first_name);
            context.setVariable('df.login-response-medical-history', medical_history);
    }
}
