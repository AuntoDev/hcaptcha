/*

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

*/


const fetch = require('node-fetch');
let credentials = '';

module.exports = {
    credentials: function (secret) {
        credentials = secret;
    },
    verify: async function (response, remote_ip, site_key) {
        if (!credentials) throw new Error('You have not provided API credentials! (Use "hCaptcha.credentials(<secret>)")');
        if (!response) throw new Error('You must provide a valid response (verify token)');

        let out;
        let params = new URLSearchParams()
        .append('secret', credentials)
        .append('response', response);

        if (remote_ip) params.append('remoteip', remote_ip);
        if (site_key) params.append('sitekey', site_key);

        try {
            out = await fetch('https://hcaptcha.com/siteverify', {
                method: 'POST',
                headers: {
                    'User-Agent': 'NPM:@auntodev/hcaptcha (+https://github.com/AuntoDev/hcaptcha)',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: params
            }).then(x => x.json());
        } catch(err) {
            console.error(err);
            throw new Error('Failed to reach hCaptcha\'s servers (are they down?)');
        };

        return out;
    }
};