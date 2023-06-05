**News App:<br />**
A web application built with React that fetches news articles from the News API and provides news based on different categories. Users can read the detailed articles by redirecting to the original source and bookmark articles to read later.

**Features:<br />**
Fetches news articles from the News API <br />
Provides news articles based on categories such as sports, tech, health, etc. <br />
Allows users to read the detailed article by redirecting to the original source <br />
Bookmark articles to read later <br />

**Installation:<br />**
To run the application locally, you need to have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps: <br />

1. Clone this repository to your local machine using git clone https://github.com/your-username/news-app.git. <br />
2. Navigate to the project directory: cd news-app. <br />
3. Install the required dependencies by running npm install. <br />
4. Obtain an API key from News API by signing up for an account. <br />
5. Create a .env file in the project root directory and add the following line, replacing YOUR_API_KEY with your actual News API key:
makefile
Copy code
REACT_APP_NEWS_API_KEY=YOUR_API_KEY <br />
6. Start the development server with npm start. <br />
7. Open your browser and visit http://localhost:3000 to access the application.

**Usage:<br />**
Once the application is running, you can use the following features:

The home page displays a list of news articles from various categories. <br />
Click on a category to view news articles specific to that category. <br />
Click on a news article to read the detailed article on the original source website. <br />
To bookmark an article for later reading, click the bookmark icon on the news article. Bookmarked articles can be accessed from the bookmarks section.
