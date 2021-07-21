/**
 * @swagger
 * components:
 *   schemas:
 *     Features:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the feature
 *         code:
 *           type: string
 *           description: The feature code
 *         description:
 *           type: string
 *           description: The feature description
 *         price:
 *           type: integer
 *           description: The plan price
 *         period:
 *           type: string
 *           description: The plan price per period
 *       example:
 *         id: 1
 *         code: GENE
 *         description: General
 */


 /**
  * @swagger
  * tags:
  *   name: Features
  *   description: The endpoint to retrieve the features
  */

/**
 * @swagger
 * /features/all:
 *   get:
 *     summary: Returns the list of all the features
 *     tags: [Features]
 *     responses:
 *       200:
 *         description: The list of the features
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Features'
 */