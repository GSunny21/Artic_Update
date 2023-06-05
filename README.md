**News App:**
A web application built with React that fetches news articles from the News API and provides news based on different categories. Users can read the detailed articles by redirecting to the original source and bookmark articles to read later.

**Features:**
Fetches news articles from the News API
Provides news articles based on categories such as sports, tech, health, etc.
Allows users to read the detailed article by redirecting to the original source
Bookmark articles to read later

**Installation:**
To run the application locally, you need to have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps:

Clone this repository to your local machine using git clone https://github.com/your-username/news-app.git.
Navigate to the project directory: cd news-app.
Install the required dependencies by running npm install.
Obtain an API key from News API by signing up for an account.
Create a .env file in the project root directory and add the following line, replacing YOUR_API_KEY with your actual News API key:
makefile
Copy code
REACT_APP_NEWS_API_KEY=YOUR_API_KEY
Start the development server with npm start.
Open your browser and visit http://localhost:3000 to access the application.

**Usage:**
Once the application is running, you can use the following features:

The home page displays a list of news articles from various categories. Click on a category to view news articles specific to that category.
Click on a news article to read the detailed article on the original source website.
To bookmark an article for later reading, click the bookmark icon on the news article. Bookmarked articles can be accessed from the bookmarks section.
