import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Firebase from '../config/firebase';
import 'firebase/database';
import 'firebase/storage';
import BlogSummary from './BlogSummary';

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
        this.holoArray = [];
        this.mediArray = [];
        this.soulArray = [];
        this.personalArray = [];
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
                if (childVal.field.includes("Холотропно дишане")) {
                    this.holoArray.unshift(childVal)
                }
                if (childVal.field.includes("Соул Колаж")) {
                    this.soulArray.unshift(childVal)
                }
                if (childVal.field.includes("Личностно развитие")) {
                    this.personalArray.unshift(childVal)
                }
                if (childVal.field.includes("Медитация")) {
                    this.mediArray.unshift(childVal)
                }
                this.blogArray.unshift(childVal)
            })
            this.setState({blogArray: this.blogArray})
            console.log(this.holoArray)
            console.log(this.blogArray)
        }, err => {
            console.log(err)
        });
    };
    openBlog = (blog) => {
        this.setState({
            openBlog: blog
        })
    }
    handleToggle = (e) => {
        let holoBtn = document.getElementsByClassName("holoToggle");
        let soulBtn = document.getElementsByClassName("soulToggle");
        let mediBtn = document.getElementsByClassName("mediToggle");
        let personalBtn = document.getElementsByClassName("personalToggle");
        let allBtn = document.getElementsByClassName("allToggle");
        if (e === "Холотропно дишане") {
            holoBtn[0].id = "clicked"
            mediBtn[0].id = ""
            soulBtn[0].id = ""
            personalBtn[0].id = ""
            allBtn[0].id = ""
            this.setState({
                blogArray: this.holoArray
            })
        } 
        else if (e === "Соул Колаж") {
            holoBtn[0].id = ""
            mediBtn[0].id = ""
            soulBtn[0].id = "clicked"
            personalBtn[0].id = ""
            allBtn[0].id = ""
            this.setState({
                blogArray: this.soulArray
            })
        }
        else if (e === "Личностно развитие") {
            holoBtn[0].id = ""
            mediBtn[0].id = ""
            soulBtn[0].id = ""
            personalBtn[0].id = "clicked"
            this.setState({
                blogArray: this.personalArray
            })
        }
        else if (e === "Медитация") {
            holoBtn[0].id = ""
            mediBtn[0].id = "clicked"
            soulBtn[0].id = ""
            personalBtn[0].id = ""
            allBtn[0].id = ""
            this.setState({
                blogArray: this.mediArray
            })
        }
        else if (e === "Всички") {
            holoBtn[0].id = ""
            mediBtn[0].id = ""
            soulBtn[0].id = ""
            personalBtn[0].id = ""
            allBtn[0].id = "clicked"
            this.setState({
                allToggle: true,
                blogArray: this.blogArray
            })
        }
        console.log(this.state.blogArray)
    }
    componentWillUnmount() {
        this.database.off()
    }
    render() {
        return (
            <BlogWrapper>
                {this.state.blogArray.length > 0 ? <div className="row buttonRow" data-aos="fade-left">
                    <div className="row ml-auto mr-3">
                        <button className="allToggle mx-1 btnToggle" id="clicked" onClick={() => this.handleToggle("Всички")}>Виж Всички</button>
                        <button className="holoToggle mx-1 btnToggle" onClick={() => this.handleToggle("Холотропно дишане")}>Холотропно дишане</button>
                        <button className="soulToggle mx-1 btnToggle" onClick={() => this.handleToggle("Соул Колаж")}>Соул Колаж</button>
                        <button className="personalToggle mx-1 btnToggle" onClick={() => this.handleToggle("Личностно развитие")}>Личностно развитие</button>
                        <button className="mediToggle mx-1 btnToggle" onClick={() => this.handleToggle("Медитация")}>Медитация</button>
                    </div>
                </div> : null}
                <div className="row">
                {this.state.blogArray.length > 0 ? this.state.blogArray.map((blog) => {
                    return (
                        <BlogSummary key={blog.id} blog={blog} openBlog={this.openBlog} blogs={this.state.blogArray} />
                    )
                }) : <div className="loadingContainer">
                        <div className="dotContainer row">
                            <div className="mx-auto row">
                                <div className="dot dot1 ml-auto mr-1"></div>
                                <div className="dot dot2 mx-auto"></div>
                                <div className="dot dot3 mr-auto ml-1"></div>
                            </div>
                        </div>
                    </div>}
                </div>
            </BlogWrapper>
        )
    }
}

const BlogWrapper = styled.div`
    background: gainsboro;
    padding: 1rem;
    padding-top: 5rem;
    .blogTitle {
        color: black;
    }
    #clicked {
        background: var(--mainDark);
    }
    .buttonRow {
        margin-bottom: 1.3rem;
        .btnToggle {
            background: var(--mainBlue);
            color: white;
            border: none;
            padding: 0.2rem;
            border-radius: 5px;
            transition: background 0.5s;
            font-family: 'Pattaya', sans-serif !important;
            outline: none;
        }
        .btnToggle:hover {
            background: var(--mainDark);
            transform: scale(1.05);
        }
    }
    .loadingContainer {
        margin-top: -2rem;
        height: 100vh;
        width: 100%;
    }
    .dot {
        margin-top: 5rem;
        background: var(--mainBlue);
        border: solid 2px var(--mainBlue);
        border-radius: 50px;
        width: 0.6rem;
        height: 0.6rem;
        padding: 0.6rem;
    }
    .dot1 {
        animation: jump 0.5s ease infinite;
    }
    .dot2 {
        animation: jump 0.5s ease infinite;
        animation-delay: 0.1s;
    }
    .dot3 {
        animation: jump 0.5s ease infinite;
        animation-delay: 0.2s;
    }
    @keyframes jump {
        0% {transform: translateY(0px)}
        50% {transform: translateY(-10px)}
        100% {transform: translateY(0px)}
    }
`