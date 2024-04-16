// Import any necessary GraphQL client libraries or hooks if needed

// Create a new class for AuthService
class AuthService {
  // Method to check if the user is logged in
  loggedIn() {
    // Retrieves the user token from localStorage
    const token = this.getToken();
    // Check if token exists
    return !!token;
  }

  // Method to retrieve the user token from localStorage
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  // Method to store the user token in localStorage upon login
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    // Redirects to the home page or performs any other necessary action upon login
    // In a Single Page Application (SPA), redirection may be handled differently
    window.location.assign('/');
  }

  // Method to remove the user token from localStorage upon logout
  logout() {
    // Clear user token from localStorage
    localStorage.removeItem('id_token');
    // Redirects to the home page or performs any other necessary action upon logout
    // In a Single Page Application (SPA), redirection may be handled differently
    window.location.assign('/');
  }
}

// Export an instance of the AuthService class to be used throughout the application
export default new AuthService();
