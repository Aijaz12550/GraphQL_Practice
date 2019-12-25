const graphql = require('graphql')
const _ = require('lodash')
const Book = require('../models/Books')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = graphql;

// const Book = [
//     { name: 'first', id: "1",authorId:"2" },
//     { name: 'React Native', id: "1",authorId:"2" },
//     { name: 'second', id: "2",authorId:"1" },
//     { name: 'third', id: "3",authorId:"3" },
// ]

// const Author = [
//     { name: 'firstAuthor', id: "1" },
//     { name: 'Aijaz', id: "2"},
//     { name: 'Ahmed', id: "3" },
// ]


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
                // return _.find(Author,{id:parent.authorId})
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
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                // return _.filter(Book, {authorId:parent.id})
            }
        }
    })
})



// --





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
                // return _.find(Book, { id: args.id })
            }
        },

        // ---------------------------author

        Author:{
            type:AuthorType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                // return _.find(Author, {id:args.id})
            }
        } ,

    
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // return Book;
            }
        },

        authors :{
            type: new GraphQLList(AuthorType),
            resolve(){
                // return Author
            }
        },


    }
})


const Mutation = new GraphQLObjectType ({
    name : "Mutation",
    fields :{
        addBook :{
            type:BookType,
            args:{
                name:{type:GraphQLString},
                id:{type:GraphQLString}
            },

            resolve(parent,args){
                let Boo = new Book ({
                    name : args.name,
                    id : args.id,
                })
               return Boo.save()
            }

        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
})