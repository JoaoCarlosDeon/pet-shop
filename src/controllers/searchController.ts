import { Request, Response } from 'express';
import { Pet } from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObject';



export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) { //se não tem nada escrito no campo search e clicar no enter
        res.redirect('/')
        return
    }


    let list = Pet.getFromName(query)

    res.render('pages/page', {
        menu: createMenuObject(''),
        list, // list: list
        query
  })
}