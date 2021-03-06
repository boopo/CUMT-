import os
from flask_script import Manager
from App import create_app

env = os.environ.get

app = create_app(env)

manager = Manager(app=app)



if __name__ == '__main__':
    manager.run()


#apidoc -i src/ -o apidoc/