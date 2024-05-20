# Genitive Faucet

<i> Genitive Testnet faucet fork from 0xDeploy/faucet-evm-template. Using Nextjs, Tailwind, hCaptcha and Redis </i>

## One click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGenitive-Network%2Ffaucet)

## Demo

https://genitive-faucet.vercel.app/

## Video Tutorial

[![](https://user-images.githubusercontent.com/19412160/212460373-16832943-6626-409c-aba9-15227937748d.png)](https://youtu.be/PcFfN_jrc_w)

https://youtu.be/PcFfN_jrc_w

## Environment Variables

```
PRIVATE_KEY=0000000000000000000000000000000000000000000000000000000000000000

COOLDOWN_HOURS=2
VALUE=12300000000000000

# https://www.hcaptcha.com/
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=00000000-0000-0000-0000-000000000000
HCAPTCHA_SECRET=0x0000000000000000000000000000000000000000

REDIS_URI=redis://default:supersecretKey@redis-address.ec2.cloud.redislabs.com:16284
UPSTASH_TOKEN=supersecretKey
```

## Definitions

PRIVATE_KEY: The private key of the wallet issuing funds. https://metamask.zendesk.com/hc/en-us/articles/360015289632

RPC_URL: RPC url of the blockchain https://www.ankr.com/rpc/

COOLDOWN_HOURS: Amount of hours users must wait to recieve funds again

VALUE: Value in smallest unit (ie: wei) https://eth-converter.com/

NEXT_PUBLIC_HCAPTCHA_SITE_KEY: Create hCaptcha account. Also known as `Sitekey` https://dashboard.hcaptcha.com/sites

HCAPTCHA_SECRET: Create hCpatcha account. Also known as `Secret Key` https://dashboard.hcaptcha.com/settings

REDIS_URI: upstash Redis URI
UPSTASH_TOKEN: upstash

## Getting Started Locally

First, add a host record to your host file:

```
127.0.0.1	faucet.local
```

This is not necessary if you don't use hCaptcha.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Copy then add .env varibles

```
cp .env.local.example .env.local
```

Modern browsers have strict CORS and CORB rules, so opening a file://URI that loads hCaptcha will not work

The simplest way to use a tool such as [ngrok](https://ngrok.com/)
