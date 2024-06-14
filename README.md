# react-photolabs

The PhotoLabs project is a single page react webpage, disigned to display the work of photograpers and allow users to like post, see more or see similar posts with a similar topic. 

# features 

photolabs allows you to like photos, explore topics and see simlar photographs based on whats clicked.

# screenshots

!["Similar Photos"](https://github.com/JackMac10/photolabs/blob/main/docs/Similar%20photos.jpg?raw=true)
!["Topics Toggle"](https://github.com/JackMac10/photolabs/blob/main/docs/Topics.jpg?raw=true)
!["Large Image Veiw"](https://github.com/JackMac10/photolabs/blob/main/docs/large%20veiw.jpg?raw=true)
!["Home page, liked toggle"](https://github.com/JackMac10/photolabs/blob/main/docs/likes%20with%20notification.jpg?raw=true)

# setup

for this application, you'll need to establish your local network to host the frontend, and backend ( // api data).

to do this, start by entering `cd frontend` into the terminal and installing the nessisary dependancies by entering `npm install`.
once thats complete, get it up and running with `npm start`

In a new tab for the backend, cd from the root folder with `cd backend` and install the nessisary dependancies by entering `npm install` again, and get it up and running with `npm start`.



# dependancies

FRONTEND

    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

BACKEND
    "body-parser": "^1.18.3",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "helmet": "^3.18.0",
    "pg": "^8.5.0",
    "socket.io": "^2.2.0",
    "ws": "^7.0.0"



