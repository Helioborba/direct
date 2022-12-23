# Utilizado para enviar vários requests ao endpoint
from random import randrange
# import time
import time
import requests
import json
from datetime import datetime

## We won't change the password
password = "fra"

## I really think this could be simplified
users = {   
    4:"Antonio",
	14:"Augusto",
    24:"Rogerio",
    34:"Castro",
    44:"Francisco",
    54:"Heitor",
    64:"João",
    74:"antonio",
    84:"antonios"
}

middleName = {   
    4:"Croata",
	14:"Ferreira",
    24:"White",
    34:"Zilla",
    44:"Silva"
}

emails = {
    4: "aaaa@gmail.com",
    14:	"bbbb@gmail.com",
    24:	"cccc@gmail.com",
    34:	"dddd@gmail.com"
}

## I really think this could be simplified
# Array
usernameArray = [4,14,24,34,44,54,64,74,84]
middleNameArray = [4,14,24,34]
emailsArray = [4,14,24,34]

def createUsername():
    user = usernameArray[randrange(0,len(usernameArray))]
    return users[user]


def createEmail():
    email = emailsArray[randrange(0,len(emailsArray))]
    return emails[email]

def randId(): 
    return f'{randrange(1,9999)}'.zfill(4)

def createProfileId(user):
    profile_id = f"{user}#{randId()}"
    return profile_id


# Class object to be instantianted
class RandomObject:
    def __init__(self):
        self.username = createUsername() #string
        self.email = createEmail() #string
        self.password = password #string
        self.profile_id = createProfileId(self.username)

    def __repr__(self):
            return repr(f"self.username : {self.username}, self.email: {self.email}, self.password: {self.password}")

    def postRandomData(self):
        return json.dumps({ 'data' : {'username': self.username, 'password': self.password, 'email': self.email} })

# [this.username, this.username, this.email, this.password, profile_id ]
# Criar 20 Objetos e fazer o post no localhost
time.sleep(10)
objectArray = []

# create 20 only
# for _ in range(0,20):
#     time.sleep(1)
#     obj = RandomObject()
#     r = requests.post('http://localhost:5000/api/postUser',data=obj.postRandomData())
#     list = r.json()
#     print(f"server response: {list['MSG']}")
#     objectArray.append(obj)

# will add various entries each 2 seconds
## Keep in mind: if using data= with a JSON DUMPED data, YOU NEED TO SET THE HEADERS, if you just use json=, YOU DON'T, python sets it for you
while True:
    time.sleep(1)
    obj = RandomObject()
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post('http://localhost:5000/api/sys/new_user', data=obj.postRandomData(), headers=headers)
    list = r.json()
    print(f"server response: {list}")
    #print(repr(obj))
    #objectArray.append(obj)