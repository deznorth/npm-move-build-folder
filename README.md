## Issue
react-build creates the build folder inside the client folder and "assumes" that all files are at the root of the application. This can be solved by adding `"homepage":"<domain of app>"` which would tell react-build where to direct the files.<br>
That solution works for most cases but not for me, since I am using multiple domains and `"homepage"` only takes one, thus causing my `localStorage` to be unreachable and my tokens returning *null*

## Solution
I built this small app to re-create the issue and find a solution without directly modifying my original app.<br>
The solution I came up with was to use an *npm* build script that would move the build folder to the root of the app after it builds. This solved my issue because now react-build can safely assume that the "build" folder will be located at the root and I don't need to provide a `"homepage"` attribute to the *package.json*. This way my localStorage will be correctly assigned and my tokens will be available to my app.

### NPM Script 
```json
"heroku-postbuild":"cd ./client && npm install && npm run build && mv -f ./build ../"
```

## Process
- [x] Found solution, scripted for MS-DOS
- [x] Translate commands from MS-DOS to BASH
- [x] Test on heroku
- [x] test a fetch from the client to the api on dev
- [x] test that fetch on heroku