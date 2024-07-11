#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports



# Views go here!

class Home(Resource):
    def get(self):
        return '<h1> Phase 4 Project Server </h1>'
    
api.add_resource(Home, '/')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

