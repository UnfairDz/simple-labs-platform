# HighLabs

HighLabs is a simple lab platform that allows you to view available labs, create, update and delete them.

# Development Steps
## Design

The app was designed using Figma.

The link to the figma project:
https://www.figma.com/file/xn7hjklNmIOGUHcUNDciEl/Simple-labs-platform?type=design&mode=design&t=uxPKLvdXaawfDhbW-1

Figma is a collaborative design tool that allows for creating and prototyping user interfaces.


## Server and API Development

The server and API for this project were built using Node.js, MongoDB, and Express. The server provides the necessary endpoints for creating, retrieving, updating, and deleting labs in the MongoDB database.
The server also provides the necessary endpoints for signing up, login, logout, update password and user info.

The development process involved:

1. Setting up a Node.js environment.
2. Installing the necessary dependencies using npm.
3. Creating the Express server.
4. Defining the routes, models and controllers for handling API requests.
5. Connecting to the MongoDB database using Mongoose.
6. Implementing data validation and error handling.
7. Testing the API endpoints using Postman to ensure they work as expected.

> **_NOTE:_** I also implemented user authentification, including sign up functionality, the ability for users to update their information. Although these functionalities were not specifically mentioned in the technical test, I included them as a bonus.

## Client

The client-side of the application was implemented using Next.js 13. Next.js is a React framework that provides server-side rendering, routing, and other helpful features for building web applications.

The implementation process involved:

1. Setting up the Next.js project using the command npm i next@latest client
2. Creating the necessary pages, components, and styles for the application.
3. Implementing the UI design using CSS.
4. Configuring the Next.js routing system to navigate between pages.
5. Connecting the client-side to the server-side by making API requests to the backend endpoints.
7. Implementing client-side form validation and error handling.

## State Management with Redux

For state management, Redux was used as a state container. Redux helps manage the application's global state and facilitates communication between different components.

The integration process involved:

1. Installing the required Redux dependencies using npm.
2. Creating actions and reducers to define the state changes and actions to be dispatched.
3. Configuring the Redux store with the necessary reducers.
4. Connecting the Redux store to the Next.js application using the `react-redux` library.
5. Dispatching actions to update the state and using selectors to retrieve data from the store.

# Running the Project

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16 or higher)
- MongoDB (v4 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/UnfairDz/simple-labs-platform.git

2. Navigate to the project directory:

   ```bash
   cd simple-labs-platform
  
3. Install the dependencies:

   ```bash
   npm install
   cd client
   npm install

4. Install concurrently to be able to start the client and server with one command:

   ```bash
   npm install -g concurrently


## Configuration

1. Create a `config.env` file in the root folder of the project.

   Add the following environment variables to the config.env file:
  
    ```bash
    NODE_ENV=development
    
    PORT=5000
    
    DATABASE=your-mongodb-uri
    
    DATABASE_LOCAL=mongodb://localhost:27017/highlabs
    
    DATABASE_PASSWORD=your-password
    
    JWT_SECRET=the-quick-brown-cat-jumps-over-the-lazy-dog
    
    JWT_EXPIRES_IN=90d
    
    JWT_COOKIE_EXPIRES_IN=90

3. Create your hosted database with Atlas:
   
    - Go to https://www.mongodb.com/cloud/atlas and sign up or log in.

    - Create a new cluster and configure the desired settings.
  
    - Once the cluster is created, click the "Connect" button.
  
    - Select "Connect your application" as the connection method.
  
    - Copy the connection URI provided and replace your-mongodb-uri in the config.env file.
  
    - Create a user with a password in the Database Access panel.
  
    - Copy your user password and replace your-password in the config.env file.

## Usage

1. Start the server:

   ```bash
   npm run dev
  
  - Open your web browser and access the application at http://localhost:3000

