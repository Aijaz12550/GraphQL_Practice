const graphql = require('graphql')
const _ = require('lodash')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} = graphql;

const Book = [
    { name: 'first', id: "1",authorId:"2" },
    { name: 'second', id: "2",authorId:"1" },
    { name: 'third', id: "3",authorId:"3" },
]

const Author = [
    { name: 'firstAuthor', id: "1" },
    { name: 'Aijaz', id: "2"},
    { name: 'Ahmed', id: "3" },
]


// schema----1
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        author:{
            type:AuthorType,
            resolve(parent,args){
                  console.log("parent ==>",parent)
                return _.find(Author,{id:parent.authorId})
            }
        }
    })
})

// schema -- 2
const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
})




// ----------------------query 


// ------


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {

        // -------------------------------------book
        Book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(Book, { id: args.id })
            }
        },

        // ---------------------------author

        Author:{
            type:AuthorType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return _.find(Author, {id:args.id})
            }
        } 
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})