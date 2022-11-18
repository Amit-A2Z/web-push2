var push = require("web-push");

require("dotenv").config();
/* console.log(process.env) // remove this after you've confirmed it is working */

/* 
⬇️Generate public private VAPID Keys. Use public one in the index script. Store generated values in the .env files.
"let vapidkeys = push.generateVAPIDKeys();
"console.log(vapidkeys);
$"node push-server.js 
OR 
$ "web-push generate-vapid-keys --json
Programmatically, regerate it via below rule.
Returns an object with publicKey and privateKey values which are URL Safe Base64 encoded strings.
👇Note: You should create these keys once, store them and use them for all future messages you send. 
"let vapidkeys = push.generateVAPIDKeys();
*/
// let vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);
push.setVapidDetails(
  process.env.vapidSiteURL,
  process.env.publicKey,
  process.env.privateKey
);

let pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/f_kOSb4h8V4:APA91bEEqsOQdckdwRuXGp-ebFutphZmCvSCFE7wocaWQMcAG911N6O29XaeTGD3lZkN3qc8Y7arsxX1B_VkGhz_KjrE_CRoLB-W9xuzDIc9tR2DUb1QYNeAqP_GNGbAx_m4rkyNGjQj",
  expirationTime: null,
  keys: {
    p256dh:
      "BJhxavt4lizuAR3MQQpHTZ9yzTxNkOc7WparLgMzOvl10hEY7eE9rT7dWdoBr66so2ZgurEEuajTX048qIwghfA",
    auth: "Tqd8JCBjtmedOPcO3_Vw7w",
  },
};
/* 
let pushPayload = '< Push Payload String >';
let pushOptions = {
  gcmAPIKey: '< GCM API Key >',
  vapidDetails: {
    subject: '< \'mailto\' Address or URL >',
    publicKey: '< URL Safe Base64 Encoded Public Key >',
    privateKey: '< URL Safe Base64 Encoded Private Key >'
  },
  timeout: <Number>
  TTL: <Number>,
  headers: {
    '< header name >': '< header value >'
  },
  contentEncoding: '< Encoding type, e.g.: aesgcm or aes128gcm >',
  proxy: '< proxy server options >',
  agent: '< https.Agent instance >'
}
*/
// push.sendNotification(pushSubscription, pushPayload, pushOptions);
push.sendNotification(pushSubscription, "This is Test push message");
