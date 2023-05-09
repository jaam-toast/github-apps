# jaam-github-apps

> A GitHub App built with [Probot](https://github.com/probot/probot) that Jaam Toast&#x27;s Github apps!

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t jaam-github-apps .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> jaam-github-apps
```

## Contributing

If you have suggestions for how jaam-github-apps could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 jaam-toast
