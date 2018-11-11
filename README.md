# Label

Use this to differentiate your `dev`, `test`, and `production` environments by adding a loud color and label, without mucking with your source code.

No more testing on the wrong environment and pulling your hair out as to why your data is differnet, or throwing off your analytics with over 9000 hits to the same page by the same user.

## Browser Support

:heavy_check_mark: Google Chrome

:heavy_check_mark: Mozilla Firefox

:x: Microsoft Edge

:heavy_minus_sign: Safari

:heavy_minus_sign: Brave

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

## Develop and Contribute

Simply clone the repository, open the extensions tab in Chrome ([chrome://extensions](chrome://extensions)), select `Load Unpacked` and then select the root folder.

### Firefox

To debug in Firefox, you need to add an app id in order to use the storage API. Do this by adding the following property to the `manifest.json`.

```js
"browser_specific_settings": {
    "gecko": {
        "id": "{b7a32ab9-5d49-4dfd-a2c6-b50ffc25e140}"
    }
}
```

## Tasks

- Support for wildcards when matching host names (eg. `dev.*.website.com`)
- Make overlay more robust - does not work in certain cases with existing headers. Possibly a z-index issue.
- Add a configuration UI rather than using JSON
- Browser testing
- Microsoft Edge: resolve viewport size not being recognized when setting `width: 100%` via the Bootstrap `.container` class.