const zeusSchema = require('./schema');

const all = async (_, response) => response.json(await zeusSchema.find());

const findById = async (request, response) => {
    const { id } = request.params;
    const model = await zeusSchema.findById(id);

    if (!model) {
        return response.status(404).send('Item not found');
    } else {
        return response.json(model);
    }
}

const save = async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    if (id) {
        await zeusSchema.updateOne({
            _id: id
        }, {
            $set: body
        });

        const updated = await zeusSchema.findById(id);
        return response.status(202).send(updated);
    } else {
        const zeus = new zeusSchema(body);
        await zeus.save();
        return response.status(201).send(zeus);
    }
}

const remove = async (request, response) => {
    const { id } = request.params;

    await zeusSchema.deleteOne({
        _id: id
    });
    return response.status(204);
}

module.exports = {
    all,
    findById,
    save,
    remove
}