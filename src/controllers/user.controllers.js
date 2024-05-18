const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await User.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

//CREAR ROLES PARA UN USUARIO 
const setUserRoles = catchError(async(req, res) => {
  const {id} = req.params
  const user = await User.findOne({where: {id}}) //Buscar el Usuario que tenga el id de la URL
  await user.setRols(req.body) //Setear o Agregar los roles al Usuario
 const roles = await user.getRols() //Buscar los roles seteado y retornar
  return res.json(roles);
});
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setUserRoles
}