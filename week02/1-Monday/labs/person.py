class Person: 
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friend = []
        self.greeting = 0
    
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting += 1

    def printContactInfo(self, name):
        print(f"name: {name}, email: {self.email}, phone: {self.phone}")

    def addFriend(self, newFriend):
        self.friend.append(newFriend)

    def numFriends(self):
        new = len(self.friend)
        return new


jordan = Person("Jordan", "u@u.com", "999-999-9999")
sonny = Person("Sonny", "sonny@hotmail.com", "888-888-8888")

sonny.printContactInfo("Sonny")
jordan.friend.append("Sonny")
sonny.friend.append("Jordan")
# print(len(sonny.friend))
jordan.addFriend("bill")
#print(jordan.friend)
#print(jordan.numFriends())
#print(sonny.numFriends())


