import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Firebase from '../config/firebase';
import 'firebase/database';
import 'firebase/storage';
import BlogSummary from './BlogSummary';
import BlogItem from './BlogItem';

export default class Blog extends PureComponent {
    constructor() {
        super();
        this.state = {
            blogArray: [],
            openBlog: {}
        }
        this.urlArray=[];
        this.imgArray=[];
        this.blogArray=[];
        this.database = Firebase.database().ref("flamelink/environments/production/content/newSchema/en-US");
        this.mediadatabase = Firebase.database().ref("flamelink/media/files");
        this.storage = Firebase.storage().ref("flamelink/media");
        this.database.on("value", (snapshot) => {
            snapshot.forEach(childSnapshot => {
                let childVal = childSnapshot.val();
                let imgVal = childSnapshot.val().image;
                let imgData;
                if ((imgVal[0]) && childSnapshot.val().imageUrl === undefined) {
                    imgData = Firebase.database().ref(`flamelink/media/files/${imgVal[0]}`);
                    let imgName = "";
                    imgData.on("value", snapshot => {
                        imgName = snapshot.val().file
                    })
                    let imgFile = this.storage.child(imgName);
                    imgFile.getDownloadURL().then((url) => {
                        console.log(url)
                        this.database.child(childSnapshot.val().id).update({
                            imageUrl: url
                        })
                        childVal.imageUrl = url;
                        console.log(childVal)
                    }).catch(err => {
                        console.log(err)
                    })
                }
                this.blogArray.unshift(childVal)
            })
            this.setState({blogArray: this.blogArray})
        }, err => {
            console.log(err)
        });
    };
    openBlog = (blog) => {
        this.setState({
            openBlog: blog
        })
    }
    componentWillUnmount() {
        this.database.off()
    }
    render() {
        return (
            <BlogWrapper className="row">
                {this.state.blogArray ? this.state.blogArray.map((blog) => {
                    return (
                        <BlogSummary key={blog.id} blog={blog} openBlog={this.openBlog}/>
                    )
                }) : null}
            </BlogWrapper>
        )
    }
}

const BlogWrapper = styled.div`
    padding: 1rem;
    padding-top: 5rem;
    .blogTitle {
        color: black;
    }
`