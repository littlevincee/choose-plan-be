/**
 * @swagger
 * components:
 *   schemas:
 *     Plan-Features:
 *       type: object
 *       required:
 *       properties:
 *         PlanId:
 *           type: integer
 *           description: The id of the plan
 *         FeatureId:
 *           type: integer
 *           description: The id of the feature
 *         IsActive:
 *           type: boolean
 *           description: Is the feature active of the plan
 *         Plan:
 *           type: object
 *           properties:
 *              code:
 *                  type: string
 *                  description: The plan code
 *              description:
 *                  type: string
 *                  description: The plan description
 *              price:
 *                  type: integer
 *                  description: The plan's price
 *              period:
 *                  type: string
 *                  description: The plan's price period
 *         Feature:
 *           type: object
 *           properties:
 *              code:
 *                  type: string
 *                  description: The feature code
 *              description:
 *                  type: string
 *                  description: The feature description
 *
 *       example:
 *         PlanId: 1
 *         FeatureId: 1
 *         IsActive: True
 *         Plan: { id: 1, code: STANDARD, description: Standard Plan}
 *         Feature: { id: 1, code: GENE, description: General}
 */

 /**
  * @swagger
  * tags:
  *   name: Plan-Features
  *   description: The endpoint to retrieve the Plan Features
  */

/**
 * @swagger
 * /plan-features/all:
 *   get:
 *     summary: Returns the list of all the plan-features
 *     tags: [Plan-Features]
 *     responses:
 *       200:
 *         description: The list of the plan-features
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Plan-Features'
 */