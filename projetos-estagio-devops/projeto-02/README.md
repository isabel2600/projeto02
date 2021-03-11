# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. PostgreSQL

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

<h2>Routes:</h2>
  <br />
  <h4>BET TYPES:</h4>
  <br />
  <ul>
       <li>DELETE BET TYPE</li>
       <li>CREATE BET TYPE</li>
       <li>UPDATE BET TYPE</li>
       <li>LIST BET TYPE</li>
  </ul>
  <br />

  <h4>BETS:</h4>
  <br />
  <ul>
     <li>CREATE BET</li>
     <li>LIST BET</li>
  </ul>
  <br />

  <h4>USERS:</h4>
  <br />
  <ul>
     <li>CREATE USERS</li>
     <li>LIST USERS</li>
     <li>LIST ONE USER</li>
     <li>UPDATE PASSWORD</li>
     <li>AUTHENTICATE USER</li>
  </ul>
  <br />

<h2>Models:</h2>
  <br />
  <ul>
    <li>USER</li>
    <li>BET</li>
    <li>BET_TYPE</li>
  </ul>
<br />

<h2>Migrations:</h2>
  <br />
  <ul>
    <li>USER_SCHEMA</li>
    <li>BET_SCHEMA</li>
    <li>BET_TYPE</li>
  </ul>
<br />  

<h2>Relationships:</h2>
  <br />
  <ul>
    <li>ONE USER HAS MANY BETS</li>
    <li>ONE BET HAS ONE BET TYPE</li>
    <li>ONE BET BELONGS TO ONE USER</li>
  </ul>
<br />  


