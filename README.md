# Label

How many times have you been testing on your website and realised you've been on the wrong environment? This is a simple extension to add a sticky label to the top of your webpage page, depending on the hostname. 

For example, use this to differentiate your `dev`, `test`, and `production` environments by adding a loud color and label, without mucking with your source code.

## Supported browsers

- Chrome

## Config
Initially this is configured via a JSON object with the following schema:
```js
[
    {
        "label": "string",
        "color": "string",
        "hosts": [
            "string"
        ]
    }
]
```

For example:

```js
[    
    {
        "label": "PRODUCTION",
        "color": "#ff8000",
        "hosts": [
            "www.website.com"
        ]
    },
    {
        "label": "TEST",
        "color": "#006400",
        "hosts": [
            "test.website.com"
        ]
    },
    {
        "label": "DEV",
        "color": "#230000",
        "hosts": [
            "dev.website.com",
            "dev.authenticate.website.com"
        ]
    }
]
```

## Contribute

Simply clone the repository, open the extensions tab in Chrome ([chrome://extensions](chrome://extensions)), select `Load Unpacked` and then select the root folder.

## Tasks

- Support for wildcards when matching host names (eg. `dev.*.website.com`)
- Make overlay more robust - does not work in certain cases (eg. google.com or twitter.com)
- Add a configuration UI rather than using JSON
- Browser testing