const nodemailer = require("nodemailer");
const path = require('path')
const otp = require("./generateotp")


const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port :587,
    secure : false,
    requireTLS: true,
    auth:{
        user:'ram.sharma@kiwitech.com',
        pass: 'yourpassword'
    }
});  

let genratedOtp = otp.genrateotp();



var mailOptions={
    from: 'ram.sharma@kiwitech.com',
    to : 'ramcas2000@gmail.com',
    subject: "nodemailer",
    text:"your otp is: ",
    html: `<p>${genratedOtp}</p>`


    // html: '<H1>This image is sent by the node server </h1><img src="cid:images" height="100">',
   
   
    // // text: "hello from the srver side and i hope you are doing well with your assesment",
    // // attachments: [
    // //     { filename: 'images.jpeg', path: './images/images.jpeg' }
    // //  ],

    // attachments: [
    //     { filename: 'images.jpeg', 
    //     cid: 'images',
    //     path: __dirname + '/images/images.jpeg'
    //  }
    //  ],
    
}


transpoter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log("email has been send ",info.response)
    }
})

console.log(genratedOtp) 