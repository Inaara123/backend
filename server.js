import express from 'express';
import cors from 'cors';
import sql from './db.js'; // Import the sql object from db.js

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



async function runSql(query) {
    console.log('running query');
    console.log(query);

    try {
        // Use sql.unsafe to execute the raw SQL query
        const dbAnswer = await sql.unsafe(query);
        console.log('The answer from database inside function is : ', dbAnswer);
        return dbAnswer;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}


// Define an API endpoint
app.get('/api/users', async (req, res) => {
    const query = req.body;
    console.log('something came');
    console.log(req);

    // Example usage of sql function - query the database
 
});
app.post('/api/sql', async (req, res) => {
    const query = req.body.response;
    console.log('something came');
    console.log('The query that i am sending is : ', query);
    try {
        const result = await runSql(query);
        console.log("the answer from database is : ",result);
        res.json(result);
    
    }
    catch (error) {
        console.error('Error executing query:', error);
        res.json(error);


    // Example usage of sql function - query the database
 
}});
// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
