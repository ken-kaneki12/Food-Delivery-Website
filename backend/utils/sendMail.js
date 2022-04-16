const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const dotenv=require('dotenv');
dotenv.config({path:'./config/hidden.env'});

const oauth2Client = new OAuth2(
   
    process.env.Mailing_service_clientId,
    process.env.Mailing_service_clientSecret,
    process.env.Mailing_service_refreshToken,
    OAUTH_PLAYGROUND 
);


// send mail
const sendEmail = (to, url, txt) => {
    oauth2Client.setCredentials({
        refresh_token: process.env.Mailing_service_refreshToken
    })
    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.Sender_Email,
            clientId: process.env.Mailing_service_clientId,
            clientSecret: process.env.Mailing_service_clientSecret,
            refreshToken: process.env.Mailing_service_refreshToken,
            accessToken
        }
    })

    const mailOptions = {
        from: process.env.Sender_Email,
        to: to,
        subject: "FoodSwipe",
        html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the FoodSwipe.</h2>
            <p>Congratulations! You're almost set to start using FoodSwipe.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `
    }

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if(err) return console.log(err.message);
        return infor
    })
};
module.exports=sendEmail