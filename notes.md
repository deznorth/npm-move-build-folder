#Notes

## Issue
npm does not have permission to overwrite the already created build folder. Meaning that if heroku erases the old build before creating the new, it would work. Or if I have permissions to replace the folder.

## Solution
Add this script to the package.json file 
```json
"heroku-postbuild":"cd ./client && npm install && npm run build && mv -f ./build ../"
```

## ToDo
- [x] Translate commands from MS-DOS to BASH
- [x] Test on heroku
- [ ] test a fetch from the client to the api on dev
- [ ] test that fetch on heroku