# Utilizado para enviar vários requests ao endpoint
from random import randrange
# import time
import time
import requests
import json
from datetime import datetime


password = "fra"

users = {   
    4:"Antonio",
	14:"Augusto",
    24:"Rogerio",
    34:"Castro",
    44:"Francisco",
    54:"Heitor",
    64:"João"
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

# Array
usernameArray = [4,14,24,34,44,54,64]
middleNameArray = [4,14,24,34]
emailsArray = [4,14,24,34]

def createUsername():
    user = usernameArray[randrange(0,len())]
    return users[user]


def createEmail():
    email = emailsArray[randrange(0,len())]
    return emails[email]

def randId(): 
    return f'{randrange(1,9999)}'.zfill(4)

def createProfileId(user):
    profile_id = f"{user}#{randId()}"
    return profile_id



class RandomObject:
    def __init__(self):
        self.username = createUsername() #string
        self.email = createEmail() #string
        self.password = password #string
        self.profile_id = createProfileId(self.username)

    def postRandomData(self):
        return json.dumps({'username': self.username, 'password': self.password, 'profile_id': self.profile_id, 'displayName': self.username})

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

while True:
    time.sleep(1)
    obj = RandomObject()
    r = requests.post('http://localhost:5000/api/postUser',data=obj.postRandomData())
    list = r.json()
    print(f"server response: {list['MSG']}")
    objectArray.append(obj)