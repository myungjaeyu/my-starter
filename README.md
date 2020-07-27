# service
> A micro web service monorepo setup using lerna / Front-end toolkit

* (Latest ver: 2/20/2020 AM 09:50)

## Usage

```bash
$ git clone https://github.com/myungjaeyu/service.git && cd service

$ yarn install

$ yarn boot

$ yarn start

# client
# http://localhost:3000

# api proxy
# http://localhost:3000/api/github/myungjaeyu

# api
# http://localhost:3001/api/github/myungjaeyu

# storybook
# http://localhost:9009

$ yarn build

$ yarn serve
# http://localhost:8080
# http://localhost:8080/api/github/myungjaeyu

$ yarn serve-ui
# http://localhost:9009

$ yarn lint
```

#### Deploy in UI Storybook Dev Server
> https://storybook-static-pi.now.sh

```bash
# deploy

$ yarn build

$ yarn deploy-ui
```

## Packages

- [packages/api](https://github.com/myungjaeyu/service/tree/master/packages/api)
- [packages/client](https://github.com/myungjaeyu/service/tree/master/packages/client)
- [packages/design-system](https://github.com/myungjaeyu/service/tree/master/packages/design-system)

## dependencies

- [lerna](https://www.npmjs.com/package/lerna)

`shared`
- [axios](https://www.npmjs.com/package/axios)
- [typescript](https://www.npmjs.com/package/typescript)
- [husky](https://www.npmjs.com/package/husky)
- [eslint6](https://www.npmjs.com/package/eslint)
- [prettier](https://www.npmjs.com/package/prettier)
- design-system
    - `design-system/dist/index.js`
    - `design-system/dist/index.d.ts`

#### prettierrc.json

```json
{
    "printWidth": 200,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "arrowParens": "always",
    "tabWidth": 4
}
```

#### Directory Structure
```bash
service/
│
├── storybook-static/ # (design-system)
│
├── dist/ # (api, client)
│
├── packages/
│   ├── api/
│   ├── client/
│   └── design-system/
│
└── package.json
```

**API**

```bash
    express
    prerender-node
```

**Client**

```bash
    react
    react-router-dom
    react-meta-tags
    react-hook-form
    react-use

    unstated-next # state mgmt

    js-cookie
    query-string
    i18next

    @emotion/styled
    bootstrap4 # index.html cdn
    fontawesome5 # index.html cdn

    less
    postcss
    babel7

    analytics
```

**Design-system**

```bash
    react
    react-use

    classnames

    @emotion/styled
    bootstrap4 # preview-head.html cdn
    fontawesome5 # preview-head.html cdn

    # addons
    @storybook/addon-actions
    @storybook/addon-storysource
    @storybook/addon-viewport
    @storybook/addon-info
```

Copyright © 2020 Myungjae Yu

___

### Docker Container

```bash
$ yarn build

$ docker-compose build && docker-compose up

# http://localhost:5000
```

### Serverless AWS Lambda & CloudFront

```
$ serverless deploy
```

### SCP

```bash
$ zip -r service.zip . && scp -i [pem key] service.zip root@127.0.0.1:~/blah/blah
```

- [cloudflare.com](https://www.cloudflare.com)

## License

[MIT license](LICENSE).