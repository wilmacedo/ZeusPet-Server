const Zeus = require('./schema');

const all = async (request, response) => response.json(await Zeus.find());

const findById = async (request, response) => {
    const { id } = request.params;
    const model = await Zeus.findById(id);

    if (!model) {
        return response.status(404).send('Zeus Item not found');
    } else {
        return response.json(model);
    }
}

const save = async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    if (id) {
        await Zeus.updateOne({ _id: id }, { $set: body });
        const updated = await Zeus.findById(id);
        return response.status(202).send(updated);
    } else {
        const zeus = new Zeus(body);
        await zeus.save();
        return response.status(201).send(zeus);
    }
}

const remove = async (request, response) => {
    const { id } = request.params;

    return response.status(204).send(await Zeus.deleteOne({ _id: id }));
}

module.exports = {
  all,
  save,
  findById,
  remove
}