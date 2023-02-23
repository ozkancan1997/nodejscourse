const joi = require("joi");

const exampleObject = {
    exampleProperty : {
        name : "example",
        race: "human",
        age: 16,
        state: "trt"
    },
    exampleProperty_2: ["example", "example", "example", "example"]
}

const schema_1 = joi.object().keys({
    name : joi.string(),
    race : joi.string(),
    age : joi.number().min(1).max(120),
    state : joi.string().length(2)
})

const schema_2 = joi.array().items(joi.string());

const schema_3 = joi.object().keys({
    exampleProperty : schema_1,
    exampleProperty_2 : schema_2
})

console.log(schema_3.validate(exampleObject));


