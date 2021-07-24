import { Request, Response, Router } from "express";
import * as path from 'path';
import { getConnection } from '../../helper/dbConnection';

export class MemberRouter {
    public router: Router;
    constructor() {
        this.router = Router({ mergeParams: true });
        this.init();
    }

    private init(): void {
        /**
         * @swagger
         * components:
         *  schemas:
         *    Members:
         *      type: object
         *      properties:
         *        id:
         *          type: int
         *          description: the auto-generated id of Member
         *        firstName:
         *          type: string
         *          description: the first name of the member
         *        lastName:
         *          type: string
         *          description: the lastname  of the member
         *        policyNumber:
         *          type: number
         *          description: the policyNumber  of the member
         *        memberCardNumber:
         *          type: number
         *          description: the memberCardNumber  of the member
         *        dateofBirth:
         *          type: string
         *          description: the dateofBirth  of the member
         *      required:
         *        - name
         *        - description
         *      example:
         *        id: 1
         *        firstName: myfirstName
         *        lastName:  mylastname
         *        policyNumber: 123
         *        memberCardNumber: 1234
         *        dateofBirth: "04/09/2012"
         *    MemberNotFound:
         *      type: object
         *      properties:
         *        msg:
         *          type: string
         *          description: A message for the not found Member
         *      example:
         *        msg: Member was not found
         *  parameters:
         *    policyNumber:
         *      in: query
         *      name: policyNumber
         *      schema:
         *        type: int
         *      description: the policyNumber of member
         *    memberCardNumber:
         *      in: query
         *      name: memberCardNumber
         *      schema:
         *        type: int
         *      description: the memberCardNumber of member
         */

        /**
         * @swagger
         * /api/members?policyNumber=1405677686&memberCardNumber=0473128446:
         *  get:
         *    summary: get member by policyNumber and memberCardNumber
         *    tags: [Members]
         *    parameters:
         *      - $ref: '#/components/parameters/policyNumber'
         *      - $ref: '#/components/parameters/memberCardNumber'
         *    responses:
         *      200:
         *        description: get member by policyNumber and memberCardNumber
         *        content:
         *          text/plain:
         *            schema:
         *              type: array
         *              items:
         *                $ref: '#/components/schemas/Members'
         *      404:
         *        description: the task was not found
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/MemberNotFound'
         *
         */
        this.router.get("/", async (req: Request, res: Response) => {
            let data;
            const {policyNumber, memberCardNumber} = req.query;
            //  this is bug in @types/lowdb library *error find is not found in LoDashExplicitWrapper
            // getConnection().get("members").find({id: parseInt(policyNumber)).value();
            const member = await getConnection().get("members").value();
            // tempory solutions
            if (policyNumber || memberCardNumber) {
                data = member.filter((d: any) => {
                    if (policyNumber && memberCardNumber) {
                    return d.policyNumber === policyNumber && d.memberCardNumber === memberCardNumber
                    }
                    if (policyNumber && !memberCardNumber) {
                        return d.policyNumber == policyNumber 
                    }
                });
            } else {
                data = member;
            }
            console.log(data);
            res.status(200).send(data || []);
        });
    }
}
