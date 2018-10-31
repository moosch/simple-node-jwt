# Simple Node JWT implementation

This is a very lightweight starter for creating authentication within a NodeJS app.

You are provided `user` routes:
`/user/create`
`/user/login`
`/user/logout`
`/user/delete`

And also two locations that you can access, one that requires a bearer token created on user login:
`/asset/`
`/asset/secure`

There is not yet any database connection, only an in-code array of user objects.

## Get started

Clone this repo
`git clone https://github.com/moosch/simple-node-jwt.git`

and install dependencies
`npm install` or `yarn install`

## TODO

* Write some tests
* Split router functions into controllers
* Maybe hook it up to a database to contains session tokens to check against or something

## License

MIT Licensed. Use all you like at your own risky fun.
Go nuts.

Made from stardust ✨ [@moosch](https://github.com/moosch)
