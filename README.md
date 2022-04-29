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

## Deploy Site
* http://3.34.206.110/

## Reference
* [react-animejs-wrapper](https://github.com/DanielJDupont/react-animejs-wrapper)