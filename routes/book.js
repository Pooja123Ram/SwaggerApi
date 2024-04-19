/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         firstName: 
 *           type: string
 *           description: The title of your book
 *         lastName:
 *           type: string
 *           description: The book explanation
 *         email:
 *           type: string 
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /book:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Books'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Books'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *       500:
 *         description: Some server error
 * /book/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Books'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Books'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

// -------------------------dashboard--------------------------

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: The dashboard managing API
 * /dashboard:
 *   get:
 *     summary: Lists all the dashboard
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: The list of the dashboard
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dashboard'
 *   post:
 *     summary: Create a new dashboard
 *     tags: [Dashboard]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dashboard'
 *     responses:
 *       200:
 *         description: The created dashboard.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dashboard'
 *       500:
 *         description: Some server error
 * /dashboard/{id}:
 *   get:
 *     summary: Get the dashboard by id
 *     tags: [Dashboard]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The dashboard id
 *     responses:
 *       200:
 *         description: The dashboard response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dashboard'
 *       404:
 *         description: The dashboard was not found
 *   put:
 *     summary: Update the dashboard by the id
 *     tags: [Dashboard]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The dashboard id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dashboard'
 *     responses:
 *       200:
 *         description: The dashboard was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dashboard'
 *       404:
 *         description: The dashboard was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the dashboard by id
 *     tags: [Dashboard]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The dashboard id
 *     responses:
 *       200:
 *         description: The dashboard was deleted
 *       404:
 *         description: The dashboard was not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Dashboard:
 *       type: object
 *       required:
 *         - name
 *         - client
 *         - scheduled
 *         - completed
 *         - cancel
 *         - selection
 *         - onboarding
 *         - offer
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the dashboard
 *         name: 
 *           type: string
 *           description: The name of the dashboard
 *         client:
 *           type: string
 *           description: Client information
 *         scheduled:
 *           type: string
 *           description: Scheduled details
 *         completed:
 *           type: string 
 *           description: Completion status
 *         cancel:
 *           type: string
 *           description: Cancellation details
 *         selection:
 *           type: string
 *           description: Selection status
 *         onboarding:
 *           type: string
 *           description: Onboarding information
 *         offer:
 *           type: string
 *           description: Offer details
 */

// ------------------------------Ridhitek------------------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Ridhitek:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - message
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the ridhitek
 *         name:
 *           type: string
 *           description: The name of the ridhitek
 *         phone:
 *           type: string
 *           description: Client phone number
 *         email:
 *           type: string
 *           description: Client email address
 *         message:
 *           type: string
 *           description: Message from the client
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the ridhitek was created
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Ridhitek
 *   description: The Ridhitek managing API
 * /ridhitek:
 *   get:
 *     summary: Lists all the ridhiteks
 *     tags: [Ridhitek]
 *     responses:
 *       200:
 *         description: The list of the ridhiteks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ridhitek'
 *   post:
 *     summary: Create a new ridhitek
 *     tags: [Ridhitek]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ridhitek'
 *     responses:
 *       201:
 *         description: The created ridhitek.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ridhitek'
 *       500:
 *         description: Some server error
 * /ridhitek/{id}:
 *   get:
 *     summary: Get the ridhitek by id
 *     tags: [Ridhitek]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ridhitek id
 *     responses:
 *       200:
 *         description: The ridhitek response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ridhitek'
 *       404:
 *         description: The ridhitek was not found
 *   put:
 *     summary: Update the ridhitek by the id
 *     tags: [Ridhitek]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ridhitek id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ridhitek'
 *     responses:
 *       200:
 *         description: The ridhitek was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ridhitek'
 *       404:
 *         description: The ridhitek was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the ridhitek by id
 *     tags: [Ridhitek]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ridhitek id
 *     responses:
 *       200:
 *         description: The ridhitek was deleted
 *       404:
 *         description: The ridhitek was not found
 */


// ------------------------------User------------------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - pimage
 *         - name
 *         - image
 *         - dishname
 *         - dishtype
 *         - time
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         pimage:
 *           type: string
 *           description: The profile image of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         image:
 *           type: string
 *           description: The image of the dish
 *         dishname:
 *           type: string
 *           description: The name of the dish
 *         dishtype:
 *           type: string
 *           description: The type of the dish
 *         time:
 *           type: string
 *           description: The time of the dish
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the user was created
 *     
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing API
 * /user:
 *   get:
 *     summary: Lists all the Users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /user/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *   put:
 *     summary: Update the user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       required:
 *         - pimage
 *         - name
 *         - image
 *         - dishname
 *         - dishtype
 *         - time
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         pimage:
 *           type: string
 *           description: The profile image of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         image:
 *           type: string
 *           description: The image of the dish
 *         dishname:
 *           type: string
 *           description: The name of the dish
 *         dishtype:
 *           type: string
 *           description: The type of the dish
 *         time:
 *           type: string
 *           description: The time of the dish
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the user was created
 *     
 */

/**
 * @swagger
 * tags:
 *   name: File
 *   description: The User managing API
 * /user:
 *   get:
 *     summary: Lists all the Users
 *     tags: [File]
 *     responses:
 *       200:
 *         description: The list of Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/File'
 *   post:
 *     summary: Create a new File
 *     tags: [File]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/File'
 *     responses:
 *       201:
 *         description: The created File.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       500:
 *         description: Some server error
 * /user/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [File]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       404:
 *         description: The user was not found
 *   put:
 *     summary: Update the user by id
 *     tags: [File]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The File id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/File'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [File]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The File id
 *     responses:
 *       200:
 *         description: The File was deleted
 *       404:
 *         description: The File was not found
 */


const router = require('express').Router();
const models = require('../db/models');
const express = require('express');
const user = require('../db/models/user');

router.post('/book', (req, res) => {
    const { firstName, lastName, email } = req.body;
    models.Books.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
    .then((books) => {
        res.send(books);
    })
    .catch((err) => {
        res.send(err);
    });
});

router.get('/book', (req, res) => {
    models.Books.findAll()
    .then((books) => {
        res.json(books);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/book/:id', (req, res) => {
   const { id } = req.params;
    models.Books.findByPk(id)
    .then((book) => {
        res.json(book);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.put('/book/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    
    models.Books.findByPk(id)
    .then(book => {
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        return book.update({
            firstName,
            lastName,
            email,
        });
    })
    .then(updatedBook => {
        res.json(updatedBook);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

router.delete('/book/:id', (req, res) => {
    const { id } = req.params;
    
    models.Books.findByPk(id)
    .then(book => {
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        return book.destroy();
    })
    .then(() => {
        res.json({ message: 'Book deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});


// DASHBOARD

router.post('/dashboard', (req, res) => {
    const { name, client, scheduled, completed, cancel, selection, onboarding, offer } = req.body;
    models.dashboard.create({
        name: name,
        client: client,
        scheduled: scheduled,
        completed: completed,
        cancel: cancel,
        selection: selection,
        onboarding: onboarding,
        offer: offer

    })
    .then((dashboard) => {
        res.send(dashboard);
    })
    .catch((err) => {
        res.send(err);
    });
});

router.get('/dashboard', (req, res) => {
    models.dashboard.findAll()
    .then((dashboard) => {
        res.json(dashboard);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/dashboard/:id', (req, res) => {
   const { id } = req.params;
    models.dashboard.findByPk(id)
    .then((dashboard) => {
        res.json(dashboard);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.put('/dashboard/:id', (req, res) => {
    const { id } = req.params;
    const { name, client, scheduled, completed, cancel, selection, onboarding, offer } = req.body;
    
    models.dashboard.findByPk(id)
    .then(dashboard => {
        if (!dashboard) {
            return res.status(404).json({ error: 'dashboard not found' });
        }

        return dashboard.update({
            name,
            client,
            scheduled,
            completed,
            cancel,
            selection,
            onboarding,
            offer
        });
    })
    .then(updatedBook => {
        res.json(updatedBook);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

router.delete('/dashboard/:id', (req, res) => {
    const { id } = req.params;
    
    models.dashboard.findByPk(id)
    .then(dashboard => {
        if (!dashboard) {
            return res.status(404).json({ error: 'Book not found' });
        }

        return dashboard.destroy();
    })
    .then(() => {
        res.json({ message: 'Book deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// ridhitek

// Create a ridhitek
router.post('/ridhitek', (req, res) => {
    const { name, phone, email, message } = req.body;
    
    // Check if models object and Ridhitek model are properly initialized
    models.ridhitek.create({
        name,
        phone,
        email,
        message
    })
    .then((ridhitek) => {
        res.status(201).json(ridhitek);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});


// Get all ridhiteks
router.get('/ridhitek', (req, res) => {
    models.ridhitek.findAll()
    .then((ridhitek) => {
        res.json(ridhitek);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Get a ridhitek by ID
router.get('/ridhitek/:id', (req, res) => {
    const { id } = req.params;
    models.ridhitek.findByPk(id)
    .then((ridhitek) => {
        if (!ridhitek) {
            return res.status(404).json({ error: 'Ridhitek not found' });
        }
        res.json(ridhitek);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Update a ridhitek by ID
router.put('/ridhitek/:id', (req, res) => {
    const { id } = req.params;
    const { name, phone, email, message} = req.body;
    
    models.ridhitek.findByPk(id)
    .then(ridhitek => {
        if (!ridhitek) {
            return res.status(404).json({ error: 'ridhitek not found' });
        }

        return ridhitek.update({
            name,
            phone,
            email,
            message
        });
    })
    .then(updatedBook => {
        res.json(updatedBook);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});


// Delete a ridhitek by ID
router.delete('/ridhitek/:id', (req, res) => {
    const { id } = req.params;

    models.ridhitek.findByPk(id)
    .then((ridhitek) => {
        if (!ridhitek) {
            return res.status(404).json({ error: 'Ridhitek not found' });
        }
        return ridhitek.destroy();
    })
    .then(() => {
        res.json({ message: 'Ridhitek deleted successfully' });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

//Use


router.post('/dashboard', (req, res) => {
    const { name, client, scheduled, completed, cancel, selection, onboarding, offer } = req.body;
    models.dashboard.create({
        name: name,
        client: client,
        scheduled: scheduled,
        completed: completed,
        cancel: cancel,
        selection: selection,
        onboarding: onboarding,
        offer: offer

    })
    .then((dashboard) => {
        res.send(dashboard);
    })
    .catch((err) => {
        res.send(err);
    });
});

router.get('/dashboard', (req, res) => {
    models.dashboard.findAll()
    .then((dashboard) => {
        res.json(dashboard);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/dashboard/:id', (req, res) => {
   const { id } = req.params;
    models.dashboard.findByPk(id)
    .then((dashboard) => {
        res.json(dashboard);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.put('/dashboard/:id', (req, res) => {
    const { id } = req.params;
    const { name, client, scheduled, completed, cancel, selection, onboarding, offer } = req.body;
    
    models.dashboard.findByPk(id)
    .then(dashboard => {
        if (!dashboard) {
            return res.status(404).json({ error: 'dashboard not found' });
        }

        return dashboard.update({
            name,
            client,
            scheduled,
            completed,
            cancel,
            selection,
            onboarding,
            offer
        });
    })
    .then(updatedBook => {
        res.json(updatedBook);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

router.delete('/dashboard/:id', (req, res) => {
    const { id } = req.params;
    
    models.dashboard.findByPk(id)
    .then(dashboard => {
        if (!dashboard) {
            return res.status(404).json({ error: 'Book not found' });
        }

        return dashboard.destroy();
    })
    .then(() => {
        res.json({ message: 'Book deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});


// User

// Create a user
router.post('/user', (req, res) => {
    const { pimage, name, image, dishname, dishtype, time } = req.body;

    models.User.create({
        pimage,
        name,
        image,
        dishname,
        dishtype,
        time
    })
    .then((user) => {
        res.status(201).json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    });
});

// Get all users
router.get('/user', (req, res) => {
    models.User.findAll()
    .then((users) => {
        res.json(users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    });
});

// Get a user by ID
router.get('/user/:id', (req, res) => {
    const { id } = req.params;

    models.User.findByPk(id)
    .then((user) => {
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user' });
    });
});

// Update a user by ID
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { pimage, name, image, dishname, dishtype, time } = req.body;
    
    models.User.findByPk(id)
    .then(user => {
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }

        return user.update({
            pimage,
            name,
            image,
            dishname,
            dishtype,
            time
        });
    })
    .then(updatedBook => {
        res.json(updatedBook);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// Delete a user by ID
router.delete('/user/:id', (req, res) => {
    const { id } = req.params;

    models.User.findByPk(id)
    .then(user => {
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return user.destroy();
    })
    .then(() => {
        res.json({ message: 'User deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete user' });
    });
});


// Files

router.post('/File', (req, res) => {
    const { pimage, name, image, dishname, dishtype, time } = req.body;

    models.File.create({
        pimage,
        name,
        image,
        dishname,
        dishtype,
        time
    })
    .then((File) => {
        res.status(201).json(File);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    });
});

// Get all users
router.get('/File', (req, res) => {
    models.File.findAll()
    .then((File) => {
        res.json(File);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch files' });
    });
});

// Get a user by ID
router.get('/File/:id', (req, res) => {
    const { id } = req.params;

    models.File.findByPk(id)
    .then((File) => {
        if (!File) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(File);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user' });
    });
});

// Update a user by ID
router.put('/File/:id', (req, res) => {
    const { id } = req.params;
    const { pimage, name, image, dishname, dishtype, time } = req.body;
    
    models.File.findByPk(id)
    .then(File => {
        if (!File) {
            return res.status(404).json({ error: 'File not found' });
        }

        return File.update({
            pimage,
            name,
            image,
            dishname,
            dishtype,
            time
        });
    })
    .then(updatedBook => {
        res.json(updatedBook);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// Delete a user by ID
router.delete('/File/:id', (req, res) => {
    const { id } = req.params;

    models.File.findByPk(id)
    .then(File => {
        if (!File) {
            return res.status(404).json({ error: 'User not found' });
        }
        return File.destroy();
    })
    .then(() => {
        res.json({ message: 'File deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete user' });
    });
});

module.exports = router;
