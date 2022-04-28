## Node Version
* 16.14.2
## Getting Started
```bash
npm install
# or
yarn
```

```bash
npm run dev
# or
yarn dev
```

## Deploy
```bash
yarn build
```

```
pm2 start yarn -w -i 0 --name "next" -- start
sudo systemctl reload nginx
```

## Reference
[react-animejs-wrapper](https://github.com/DanielJDupont/react-animejs-wrapper)