# Movie Feedback App

![impleVista](https://res.cloudinary.com/duoa4oiur/image/upload/v1739376723/movieList_ftl98s.png)

The Movie Feedback App is an Angular-based application designed for managing a list of movies with key features such as adding, viewing, editing, and deleting movie entries.The app provides a user-friendly interface for managing movie lists, leveraging modern Angular features to ensure a smooth and interactive experience. 🚀

#### Video Explanation (Public Link): https://www.loom.com/share/ba11e7351aea4109a3653b34e5bf1685?sid=8d8fbf07-3c24-4688-964e-191cc7961a95

## **Features**

### **1. Movie Entry Form**

Users can add movies with details likes:

- Movie Title (text input)
- Language (dropdown: English, Bangla, Hindi)
- Rating (decimal input)
- File Attachment (for images or documents, displayed in view mode)

### **2. Data Management**

- Movies are displayed in a list or table format.
- Users can view details or edit movie entries.
- File attachments are viewable in the UI.

### **3. Technical Implementation**

- Angular Services & Observables for state managemen
- Angular Signals for reactive programming.
- Automatically set `inStock` to `false` when stock reaches zero.
- HTTP Client to fetch mock movie data from free APIs.

## **Technology Stack**

- **Framework:** [Angular.js](https://angular.dev/tools/cli)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Language:** [JsonServer](https://www.npmjs.com/package/json-server)
- **API Testing:** [ThunderClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

## **Developer guide**

- Clone the project in your local machine
  ```bash
   git clone https://github.com/nurhossainfarid/movie-list-app
  ```
- Install all the the dependencies
  ```bash
   npm install
  ```
- Run Code
  ```bash
   ng serve
   npm run json:server [server]
  ```

## **API END POINT**

#### **Add Movie**

- Endpoint: http://localhost:5000/movies
- Method: POST

#### **Get All Movies**

- Endpoint: http://localhost:5000/movies
- Method: GET

#### **Get Single Movie**

- Endpoint: http://localhost:5000/movies/:id
- Method: GET

#### **Update a Movie**

- Endpoint: http://localhost:5000/movies/:id
- Method: PUT

#### **Delete a Movie**

- Endpoint: http://localhost:5000/movies/:id
- Method: DELETE

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributions

Feel free to fork this repository, raise issues, and submit pull requests to contribute to this project.

## Contact

For queries, suggestions, or feedback, please contact:
Nur Hossain Farid
Email: faahsan1516@gmai.com
GitHub: github.com/nurhossainfarid
