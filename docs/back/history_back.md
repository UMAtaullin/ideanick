# backend
  796  mkdir backend
  797  cd backend
  798  touch package.json
  799  pnpm i -D typescript
  800  mkdir src
  801  touch index.ts
  802  pnpm i -D ts-node
  803  pnpm exec ts-node src/index.ts
файл запустился и остановился, но нам нужно чтоб работал постоянно,
для этого есть демон, но работает не так быстро как ts-node-dev
  804  pnpm i -D ts-node-dev
  805  touch tsconfig.json
  806  pnpm i -D @types/node
  807  pnpm build
  808  pnpm start
после pnpm build периодически нужно удалять данные и поэтому установим rimraf
  809  pnpm i -D rimraf
  810  pnpm i -D prettier
  811  pnpm prettify
  812  nvm list
  813  cd ..
  814  touch .nvmrc
  833  pnpm i express
  834  pnpm i -D @types/express