const users = [{
    id: '1',
    name: 'Erdinc',
    email: 'erdinc@example.com',
    age: 28
},
{
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com',
},
{
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: '10',
    title: 'Book',
    body: 'Şu Çılgın Türkler',
    published: true,
    author: '1'
},
{
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '2'
},
{
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '3'
}]

const comments = [{
    id: '20',
    text: 'It is OK.',
    author: '1',
    post: '10'
},
{
    id: '21',
    text: 'It is fine.',
    author: '1',
    post: '10'
},
{
    id: '22',
    text: 'It is bad idea.',
    author: '2',
    post: '11'
},
{
    id: '23',
    text: 'Not bad.',
    author: '3',
    post: '12'
}]

const db = {
    users,
    posts,
    comments
}

export {db as default}