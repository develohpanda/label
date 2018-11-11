# Label

Use this to differentiate your `dev`, `test`, and `production` environments by adding a loud color and label, without mucking with your source code.

No more testing on the wrong environment and pulling your hair out as to why your data is differnet, or throwing off your analytics with over 9000 hits to the same page by the same user.

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
- Make overlay more robust - does not work in certain cases with existing headers. Possibly a z-index issue.
- Add a configuration UI rather than using JSON
- Browser testing