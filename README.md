## Book Search Application

This is a web application that allows users to search for books using the Google Books API and save their favorite books to their account.

### Features

- **Search Books**: Users can search for books using keywords. The application fetches data from the Google Books API and displays the search results.
  
- **Save Books**: Authenticated users can save their favorite books to their account. Saved books are displayed on the "Saved Books" page.

- **Remove Books**: Users can remove books from their saved list if they no longer want to keep them.

### Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Bootstrap**: UI framework for React applications.
- **Apollo Client**: GraphQL client for making requests to the backend GraphQL server.
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **GraphQL**: Query language for APIs, used for fetching and managing data.
- **MongoDB**: NoSQL database for storing user data and saved books.
- **JWT**: JSON Web Tokens for user authentication.
- **Google Books API**: External API for searching and retrieving book information.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/book-search-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd book-search-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add the following environment variables:

    ```plaintext
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Access the application at `http://localhost:3000`.

### Usage

1. Register for an account or log in if you already have one.
2. Use the search bar to search for books by title, author, or keyword.
3. Click on a book to view more details.
4. To save a book, click on the "Save this Book" button.
5. View saved books by navigating to the "Saved Books" page.
6. To remove a book from your saved list, click on the "Delete this Book" button.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

- This project was developed as part of a coding bootcamp curriculum.
- Special thanks to the instructors and mentors for their guidance and support.
