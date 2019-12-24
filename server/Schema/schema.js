const graphql = require('graphql')
const _ = require('lodash')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} = graphql;

const Book = [
    { name: 'first', id: "1" },
    { name: 'second', id: "2" },
    { name: 'third', id: "3" },
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        Book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(Book, { id: args.id })
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})