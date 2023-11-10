## Introductrion EXPRESS
- Express librería que usamos para levantar un servidor LOCAL y para el deployment retorne HTML
- 
- Libreria para crear servidores
- Levantar una API, permitirá ver:
    - Patrón de arquitectura MODELO VISTA-CONTROLADOR
    - Modelos para operar con datos
    - Vista a poder mostrar datos y operar
    - Controladores que van a ser métodos permitirán  operar con esos datos.
    - Typescript**
- API, nos va a permitir mostrar 'Console.log' de los diferentes métodos

- Rimraf: Herramienta que permite borrar todo el arbol de dependencias

- Organización structura de carpetas:
    -  SRC: 
    -  Punto de entrada => Server: Donde levantaremos el servidor.
    - Index => Puerto de entrada de nuestra aplicación ¿Qué significa eso? LLamar aplicación y configurarla !

    - Config  >  Config => Configuración BBDD, ORM, Cloudinary..

    - Que es el modelo MVC = Modelo Vista Controlador
    - Vista => Respuesta que vamos a dar
    - Controlador => Métodos que vamos a crear para configurar

    - Cuando hacemos una API, tenemos que crear:
        - Routes :
        - Controllers :

    -  Poder acceder a un endpoint..y usar métodos
    -  Debo decirle al server que cree la rute..para dirigir el tráfico.

::::::::

## Introductrion MongoDB Concepts

- BBDD: Programa que se encarga de almacenar todos los datos relacionados con el contexto de una aplicación.
Ex. Usuarios, Vendedores, Productos, Ventas...
- ¿Comor organizar los datos? =>  Collection
- Collection: Division de datos según sus caracteristicas  (Ex: Usuarios, Productos, Categorias, Películas, Géneros..)
- ¿Qué guardamos en la colección?  
EX (users)
    - name
    - email
    - password
    - date created
IMPORTANTE: En MongoDB todos estos son guardados dentro un objeto JSON
IMPORTANTE: Tipos de datos tienen diferente tipado.
{
    name: 'sue',
    age: 24,
    status: 'married'
}

** Estructura 
BBDD => Collections => Objectos Json: Que mongoDB los llama 'Documentos'
MondgoDB =>  Store data records as BSONS documents
*BSON is a binary representation of JSON documents

** Basic Comando MongoDB
>  mongosh: Initziar mongo connection 
> help: See all the operations we can perfom
> db: Show the current database
> db.collection.help: Command we can perfom on a  single collection [db.name-bbdd.method]
> cls: clear
> exit
> show dbs: List all the current db
> show collection: List out all the  collections inside of current db
> cls
> mongoimport: Import a json file to database [mongoimport src/mongodb/persons-data.json  -d contact -c persons --jsonArray]
> use contact: Switch to a particular database
> count(): Count method [db.name-collection.count({param: value})]
> countDocuments(): Return count of documents that match the query
> insertOne: Creating a collection with one document [db.name-collection.insertOne({})]
> insertMany(): Creating a collection with one or more documents [db.name-collection.insertMany({},{})]
> var: Create variables [var name = 'Pepa']
> distinct: Return entries in our current db by params [db.name-collection.distinct('param')]
> drop(): Eliminate all the documents of collection in a current db [db.name-collection.drop()]
> find(): Method return all documents from a collection
    > find ({param: value})
    > find ({param2: value, param3: value})
    > find ({param:{$gt: value}}) gt: '>'
    > find ({param: {$gte: value}}) gte: '>='
    > find ({params: {$lt: value}}) lt: '<'
    > find ({params:{$lte: value}}) lte: '<='
    > find ({$or:[{param2}, {param3}]}) $or: 'or'. Important: Entries need to be full objects
    > find ({param: {$in:[value, value2, value3]}}) $in: Param is equal to value,value2,value3
    > find ({param: {$nin:[value, value2, value3]}}) $nin: Param is not equal to value,value2,value3
    > find ({array_param: value})
    > find ({array_param:{$all:[value, value2]}}) $all: array contain value, value2
    > findOne({}) One: Returns one document that satisfies the specified query
> pretty(): Method has the following prototype form [db.collection-name.find().pretty()]

> field(): Field: What fields we want to be back.
    > find({}, fields: value)

> limit(): Return  n documents that match the query criteria for a collection [db.collection-name.find(criteria).limint(number)]
> sort(): Return the order in which the query return matching documents. 1: ascending, -1: descending

> deleteOne(): Method removes a single document from  collection [db.movies.deleteOne({ param: value })]
> deleteMany(): Method allow us to remove several documents [db.movies.deleteMany({ name: { $in: ["Grimm", "Lost Girl", "The Strain"] }})]

> Projection: Query only parts of the keys in a document [db.collection-name.find(), {param: value}]
> Projection (no id): Query only parts of the keys, exlclude id. [db.collection-name.find(), {param:value, _id:0}]

** MongoDB Query Operatos ($eq, $ne, $in, $nin, $and, $or)
> $eq(equal): Query for equality of elements [db.collection-name.find({param:{$eq: 'value'}}), ]
> $ne(not equal): Query for elements that are not equal [db.collection-name.find({param:{$ne:'value'}}, {name:2}).pretty()]
> $in: Search for documents that match any of the values [db.collection-name.find({param:{$in:[value, value]}})]
> $nin: Search for documents that match any of the values [db.collection-name.find({param:{$nin:[value, value]}})]

** Managing Data ||
> nested: Specify query condition on fields [db.collection-name.insertOne({review:[{title, author, genre},{obj},{obj}]})]
> regex: Squence of characters that define a search  pattern. [{field: {$regex: /pattern/, $options: '<options>'}}]
    > symbol '^': Start of string, or start of line in multi-line pattern
    > symbol '.': Any character
    > symnol '*': Characters repeated multiple lines
    > symbol: '$': End of string or end of line 
    > options 'i': Match lower and upper case 
    > options 'm': To include '^', '$' in the pattern in the match
    > options 'x': Ignore all white space
    > options 's': All the '.' character 

> aggregation: Aggregate values for the data in a collection or view. [db.collection-name.aggregate([pipeline, options])]
    > pipeline: A sequence of data aggregations
        > symbol '$match': Filter the document
        > symbol '$group': Groups input documents by a specified indentifier  expresion
        > symbol '$limit': Passes the first n documents
        > symbol '$count': Returns a count of the number of documents
        > symbol '$sort': Reorders the document stream
        > symbol '$exists<boolean>': If<boolean> is true: Match documents that contain the field [{param:{$exists:true}}]
        > symbol '$exists<boolean>: If<boolean> is false: Returns only the documents that not contain field [{param:{$exists:false}}]
        > symbol '$not': Perfom a logical NOT, and selects the documents that not match [{param:{$not:{$gt:400}}}]
        > symbol '$type': Select documents where the value of the field [{param:{$type:value}}]

** Managing Data |||
> skip(): Method to  control where MongoDB begin returnin results. [skip(n)]
> createcollection: Method to create a new collection [db.createcollection(name-collection, {options})] 
    > Options [db.createCollection("teacher", {capped:true, size:2000, max:4})]
        > capped: <boolean>
        > size: <number>
        > max: <number>

> dropDatabase(): Drops the current database [db.dropDatabase()]

## Introductrion Mongoose

> Type of validation each time we enter data into  the DB.
> Schemale: Structure to set data & types.

User A
{
  "firstName": "Bradley",
  "lastName": "Ortiz",
  "email": "brad@manguihi.ph",
  "phone": "(751) 348-4041",
  "age": 24,
  "address": null
}

>  MVC Structure (Modelo Vista Controlador): Folder structure for developing backend app.
> MERN Stack: Stands for MongoDB, Express, React, Node, ..etc.
    > MondoDB: Document database
    > Express-js. Node.js web framework
    > React.js - A client-side Javascript framework
    > Node.js - The premier JavaScript web server

> Mongoose Schemas: Define for a collection is easy. [const userSchema = new mongoose.Schema({...properties})]
    > Type: String, Number, Data, Buffer, Boolean,  Mixed, ObjectId, Array, Decimal, Map
    > Schema options: required,  lowercase, uppercase, trim, enu,, minLenght, maxLength
    > Example:  
        const userSchema = new mongoose.Schema({
            name: {
                type: string,
                required: true
                trim: true,
                minlength: [8, 'The password is too short']
            },
            password: {
                type: string,
                required: true
            }
        }) 

> Custom Validator: Method to validate field. 
    >  Example:
        const mongoose = require('mongoose')
        const validator  = require ('validator')

        const userSchema = new mongoose.Schema({
            name: {
                type: string,
                required: true
                trim: true,
                minlength: [8, 'The password is too short'],
                lowercase: true,
                validate: {
                    validator: (value) => validator.isEmail(value),
                    message: (props) => `${props.value} is not a valid email address`
                }
            },
            password: {
                type: String,
                required: true,
                trim: true,
                minlength: [8, "The password is too short"],
            },
            activities: [{
                type: String,
                enum: ["Programming", "Studying", "Ping Pong"],
            },
            ],
            { timestamps: true }
        })

> Creating a model: Create a model with schema
    const userModel = new mongoose.model('user', userSchema)
    module.exports = userModel

> mongoose Schema Hooks: Allow to us to execute some logic before or after a particular action.
> options: findOneAndUpdate, validate, save, updateOne, find, remove...
    > pre: Execute action before  [schema.pre('validate', function name() {console.log('This gets printed first')})]
    > post: Execute action post [schema.post('validate', function name() {console.log('This gets printed first')})]

> Save way of storing passwords: Use a hook (.pre('save')) to modify document before it is saved.
> Encript: Encrypt the passowrd using 'bcrypt' package so that is safer
    > Example:
        userSchema.pre("save", function userPreSaveHook(next) {
            if (!this.isModified("password")) return next();

            try {
                const hash = await bcrypt.hash(this.password, 12);
                this.password = hash;

                return next();
            } 
            catch (error) {
                return next(error);
            }
        });

## CRUD (Create, Read, Update, Delete)
> Examples of the best ways to make queries  that go throught the validators and middlewares.
> Create
    > Example:
    const user = new User ({
        name: req.body.name,
        age: req.body.age,
        country: req.body.country
    });

    user.save((saveErr,  savedUser)  => {
        res.status(202).send({data: savedUser})
    })

> Read 
    > Example:
    user.findOne()
    user.findById()

> Update
    > Example (PATH)
    user.findById(req.params.id,(err, user))  => {
        user.set(req.body)
        user.save((saveErr, updateUser) => {
            res.send({data: updatedUser})
        })
    }

> Delete
    > Example:
    user.findById(req.params.id, (err, user) =>{
        user.remove((useErr, removeUser) => {
            res.sed({data:removedUser})
        })
    })

## Bcrypt:
> Library to help you hast passwords
> Example:
    const generateSalt  = async ()=> {
        return await bcrypt.genSalt(20)
    }

    const generatePassword = async(password: string): Promise<string> => {
        const salt = await generateSalt()
        return await bcrypt.hash(password, salt)
    }

    const validatePassword = async (entPswd: string, hshPsword:string): Promise<boolean> => {
        return await bcrypt.compare(entPswd, hshPswod)
    }
