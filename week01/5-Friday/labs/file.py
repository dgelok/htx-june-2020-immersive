

# file_handler = open("hello.txt", 'w')
# file_handler.write("Hello World!")
# file_handler.close()

# file_handler = open("sample.html", 'r')
# contents = file_handler.read()
# file_handler.close()

# print(contents)

import pickle
# data = {"name": "Paul"}

# with open('data.pickle', 'wb') as fh:
#     pickle.dump(data, fh)

with open('data.pickle', 'rb') as fh:
    data = pickle.load(fh)
    print(data)

