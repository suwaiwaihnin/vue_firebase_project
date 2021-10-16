import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyClwKoVXPyuvDr18sFFLnURFVFvGAzHA7c",
    authDomain: "vue-firebase-project-30bf4.firebaseapp.com",
    projectId: "vue-firebase-project-30bf4",
    storageBucket: "vue-firebase-project-30bf4.appspot.com",
    messagingSenderId: "814940545155",
    appId: "1:814940545155:web:8e2cdebf24dad8b4b37bb6",
    measurementId: "G-8394PT7F49"
  };

  class firebase {
      constructor(){
          firebase.initializeApp(config);
          this.firestore = firebase.firestore();
          this.storage = firebase.storage();
          }

        getAllPosts(){
            return firebase.firestore().collection('posts').get();
        }

        getCurrentPosts(postid){
            return firebase.firestore().collection('posts').doc(postid).get();
        }

        createPosts(){
            return firebase.firestore().collection('posts').add(postObj);
        }

        updatePosts(postid,updatedDate){
            return firebase.firestore().collection('posts').doc(postid).set(updatedDate,{merge : true});
        }

        async handleFileUpload(file){
            let d;
            const storageRef = firebase.storage().ref();
            const stroageChild = storageRef.child(file.name);
            const postCover = storageChild.put(file);

            await new Promise(resolve => {
                postCover.on('state_changed',(snapshot)=>{
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(Math.trunc(progress));
                },(error) => {
                    console.log(error);
                }, async() => {
                    const downloadUrl = await storageChild.getDownloadURL();
                    d = downloadUrl;
                    resolve();
                });
            });
            return d;
        }

        async deletePosts(postid,fileref){
            const storeageRef = firebase.storage().ref();
            await firebase.firestore().collection('posts').doc(postid).delete().catch(err=>{
                console.log(err);
            });
            console.log('Post Deleted');

            await storeageRef.child(fileref).delete().catch(err => {
                console.log(err);
            });
            console.log('Image Deleted');
           
        }
  }

  export default new firebase();