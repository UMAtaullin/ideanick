# frontend
yarn create vite
npm install -g pnpm
pnpm i
npm run dev
## prettify
pnpm i -D prettier
pnpm prettify - команда для запуска
"scripts": {
"prettify": "prettier --loglevel warn --cache --write '{src/**/*,*}.{ts,tsx,js,json,yml,scss}' '!**/{node_modules,dist}/**/*'"}

