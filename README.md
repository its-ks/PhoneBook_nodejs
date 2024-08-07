<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phonebook Backend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            padding: 20px;
        }
        h1, h2, h3, h4 {
            color: #333;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            overflow-x: auto;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            padding: 5px 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Phonebook Backend</h1>
    </header>
    <div class="container">
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#api-endpoints">API Endpoints</a></li>
            <li><a href="#environment-variables">Environment Variables</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#license">License</a></li>
        </ul>

        <h2 id="installation">Installation</h2>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/yourusername/phonebook-backend.git
cd phonebook-backend</code></pre>
            </li>
            <li>Install the dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Set up the MongoDB database:
                <ul>
                    <li>Create a MongoDB Atlas account and set up a new cluster.</li>
                    <li>Create a <code>.env</code> file in the root directory and add your MongoDB URI:
                        <pre><code>MONGODB_URI=your-mongodb-uri
PORT=3001</code></pre>
                    </li>
                </ul>
            </li>
        </ol>

        <h2 id="usage">Usage</h2>
        <p>To start the server, run:</p>
        <pre><code>npm start</code></pre>
        <p>For development, use:</p>
        <pre><code>npm run dev</code></pre>
        <p>This will automatically restart the server when changes are made to the source code.</p>

        <h2 id="api-endpoints">API Endpoints</h2>
        <ul>
            <li><strong>GET</strong> <code>/api/persons</code> - Retrieve all phonebook entries.</li>
            <li><strong>GET</strong> <code>/api/persons/:id</code> - Retrieve a specific phonebook entry by ID.</li>
            <li><strong>POST</strong> <code>/api/persons</code> - Add a new phonebook entry.</li>
            <li><strong>PUT</strong> <code>/api/persons/:id</code> - Update an existing phonebook entry by ID.</li>
            <li><strong>DELETE</strong> <code>/api/persons/:id</code> - Delete a phonebook entry by ID.</li>
            <li><strong>GET</strong> <code>/api/info</code> - Retrieve the phonebook info.</li>
        </ul>

        <h2 id="environment-variables">Environment Variables</h2>
        <p>The following environment variables are used in the project:</p>
        <ul>
            <li><code>MONGODB_URI</code>: The URI of your MongoDB database.</li>
            <li><code>PORT</code>: The port on which the server will run (default: 3001).</li>
        </ul>

        <h2 id="contributing">Contributing</h2>
        <p>Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.</p>

        <h2 id="license">License</h2>
        <p>This project is licensed under the MIT License.</p>

        <h2 id="error-handling">Error Handling</h2>
        <p>The backend includes error handling middleware to manage errors gracefully:</p>
        <ul>
            <li><strong>CastError</strong>: For malformatted IDs.</li>
            <li><strong>ValidationError</strong>: For validation errors in Mongoose schemas.</li>
            <li><strong>General Errors</strong>: For all other errors, a 500 status code is returned.</li>
        </ul>
    </div>
</body>
</html>
