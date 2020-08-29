# FastAPI sample to-do list app

Sample To-do list application featuring:

- Flask
- mako
- pyHaml
- python 3
- vanilla js
- axios
- redis
- json

Note: If you're looking for the FastAPI version of this To-Do app then visit: https://github.com/makevoid/fastapi-todo-app


### Install

    pip install flask redis mako git+https://github.com/mikeboers/pyhaml

### Prerequisites

You need to have Redis running locally listening on the default port 6379.

### Run

   python3 app.py


This will run the python app using the development server.

Then visit http://localhost:3000

### Production

I recommend to set up `waitress`, `uvicorn` or another production-grade server if you plan to finish/improve and host the final application.


---

Enjoy!

@makevoid
