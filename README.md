# README

## Setup Dev environment:

```bash
bundle
rake db:migrate
rake db:seed
npm install
```

2 servers needs to be started in the same time:
```bash
rails server
```


```bash
npm run dev_server
```

## Routes

* ```http://localhost:3000``` for the front-office.

* ```http://localhost:3000/admin``` for back-office, default email/password for activeadmin gem.
