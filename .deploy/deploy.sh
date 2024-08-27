#!/bin/bash
cd ~/Learn-frontend-easy
pm2 stop 0
git pull
pm2 start json-server/index.js
npm run build:prod

rm -rf /var/www/Learn-frontend-easy/html
mv build /var/www/Learn-frontend-easy/html
