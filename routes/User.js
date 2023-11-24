import express from 'express';
import axios from 'axios';
import * as fs from 'node:fs/promises';

const router = express.Router();
router.get('/signup', async (req, res) => {
try{

    const user = {
        email: "perhaita@test.com",
        password: "mdp",
        firstName: "paul",
        lastName: "perhaita",
    };

    let users;
    try{
        const userData = await fs.readFile('data/users.json', 'utf-8');
        users = JSON.parse(userData);
    }catch (error){
        users = []
    }

    users.push(user);
    await fs.writeFile('data/users.json', JSON.stringify(users, null, 2), 'utf-8')

    
    res.render('user/signup', { user });
}catch(error){
    console.error(error);
    res.status(500).send("Une erreur est survenue")
}
});
export default router;