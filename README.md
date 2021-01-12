## Install
To install this package, run:
```
npm install @auntodev/hcaptcha --save
```


## Usage
Make sure you require this package after installing it!
```js
const hCaptcha = require('@auntodev/hcaptcha');
```

### Providing credentials
It's important that you provide credentials **before** attempting to verify any responses. You may using the following code to do this:
```js
hCaptcha.credentials('hcaptcha_secret');
```

### Verifying a response
Verifying a response is quite simple. You may use the following code to do so:
```js
hCaptcha.verify(client_response[, remote_ip?, site_key?]).then((response) => {
    /*
        {
            "success": true|false,     // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
            "challenge_ts": timestamp, // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
            "hostname": string,        // the hostname of the site where the challenge was solved
            "credit": true|false,      // optional: whether the response will be credited
            "error-codes": [...]       // optional: any error codes
            "score": float,            // ENTERPRISE feature: a score denoting malicious activity.
            "score_reason": [...]      // ENTERPRISE feature: reason(s) for score. See BotStop.com for details.
        }
    */
}).catch(console.error);
```


## License and disclaimers
```
MIT License

Copyright (c) 2021 Aunto Development

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
```
hCaptcha is a registered trademark of Intuition Machines, Inc.
```
```
Aunto Development is not affiliated with, or supported by, the hCaptcha brand or
Intuition Machines, Inc. Aunto Development has simply created this package.
```