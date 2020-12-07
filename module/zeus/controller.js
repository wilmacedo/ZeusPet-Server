const zeusSchema = require('./schema');

const all = async (_, response) => response.json(await zeusSchema.find());

const findById = async (request, response) => {
  const { id } = request.params;
  const model = await zeusSchema.findById(id);

  if (!model) {
    return response.status(404).send('Item not found.');
  } else {
    return response.json(model);
  }
}

const findLastItem = async (_, response) => {
  const lastItem = await zeusSchema.find().sort({
    createdAt: -1
  }).limit(1);

  if (!lastItem) {
    return response.status(404).send('Item not found.');
  } else {
    return response.json(lastItem);
  }
}

const removeItem = async (request, response) => {
  const {
    id,
    petId,
    itemId
  } = request.params;
  const { body } = request;

  if (id && petId && itemId) {
    await zeusSchema.updateOne({
      _id: id, "pets._id": petId
    }, {
      $pull: {
        "pets.$.items": { _id: itemId }
      }
    });

    const updated = await zeusSchema.findById(id);
    return response.status(202).send(updated);
  } else {
    return response.status(404).send('Item not found.');
  }
}

const save = async (request, response) => {
  const { id, petId } = request.params;
  const { body } = request;

  if (id) {
    if (petId) {
      await zeusSchema.updateOne({
        _id: id, "pets._id": petId
      }, {
        $push: {
          "pets.$.items": body
        }
      });
    } else {
      await zeusSchema.updateOne({
        "pets._id": id,
      }, {
        $push: {
          "pets.$.items": body
        }
      });
    }

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
  return response.status(204).send('Sucessfully deleted.');
}

module.exports = {
  all,
  findById,
  save,
  remove,
  removeItem,
  findLastItem
}