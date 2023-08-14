# TypeChat
This is a serverless chat client built using React.js and styled using Sass. All data is stored into the app's state not a database.

On app initiliazation the user will be asked to input their name and an image url to create a user profile. Then you will see a chat window where you can talk to yourself to your heart's content

In terms of UX/UI this app was built with the assumption our users will want to send messages both via click and pressing the "return" key.
Additionally we have threads as children of each message. If you reply to a message it will create a new thread. Once you create the thread you will be able to view the threads chat history. You can also see the thread length (amount of messages in said thread) for each message if it contains a thread.

To start this program you will want to run the following commands in your terminal
```
git clone git@github.com:edfranco/TypeChat.git
cd TypeChat
npm i
npm start
```

The commands will clone this repo, change the directory to the repo, install dependencies, then run the program in your browser leveraging a local server from your computer

## Final Notes
I chose React as the library for this project because it provides the means to use reusable components and makes it easier to create, maintain, and passdown state to children

I chose Sass as the preprocessor for styling because it helps write clean code with it's use of nested styles

### Nice to Haves
With more time I of course would have liked to have been able to create a backend for this app to allow the project to have a database to store these messages. Additionally I'd use multer to allow a user to upload an image for their profile. Lastly I would've like to have some Chatgpt implementation to give the user an option to have a chat partner that isn't themselves