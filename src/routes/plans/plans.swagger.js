/**
 * @swagger
 * components:
 *   schemas:
 *     Plans:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the plan
 *         code:
 *           type: string
 *           description: The plan code
 *         description:
 *           type: string
 *           description: The plan description
 *         price:
 *           type: int
 *           description: The plan price
 *         period:
 *           type: string
 *           description: The plan price per period
 *       example:
 *         id: 1
 *         code: STANDARD
 *         description: description
 *         price: 0
 *         period: month
 */


 /**
  * @swagger
  * tags:
  *   name: Plans
  *   description: The endpoint to retrieve the plans
  */

/**
 * @swagger
 * /plans/all:
 *   get:
 *     summary: Returns the list of all the plans
 *     tags: [Plans]
 *     responses:
 *       200:
 *         description: The list of the plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Plans'
 */