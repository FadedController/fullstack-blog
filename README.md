# Instalation

1. Clone this repo by entering the following

```bash
  git clone https://github.com/FadedController/fullstack-blog.git
```

2. Create python environment

```bash
  # go to the server directory
  cd server/
  # create the environment
  python3 -m venv venv
  # activate the environment
  source /env/Scripts/activate.bat
```

3. Install the python dependencies

```bash
  pip install .
```

4. Install frontend dependencies

```bash
  # install yarn if you don't have it
  npm install -g yarn
  # go to the client directory
  cd client/
  # install dependencies
  yarn install
```

# Development

Once all of the dependencies are installed, you are ready to start development, follow this instructions

```bash
  # start the server
  cd /server
  python server.py #opens in localhost:5000

  # start the frontend
  cd /client
  yarn start #opens in localhost:3000
```

Now everything is configured properly, and the client is able to request information from the server with ease