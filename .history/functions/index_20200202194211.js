const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello ninjas!");
});

exports.projectCreated = functions.firestore
.document('/projects/{projectId}')
.onCreate(doc=>{
    const project = doc.data()
    const notification = {
        content: 'Added a new project',
        user:`${project.authorfirstName} ${project.authorLastName}`
    }
})