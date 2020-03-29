import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function BlogItem(props) {  
    var relatedBlogs = [];
    var element = document.createElement('template');
    console.log(element);
    if (props.location.state) {
        element.innerHtml = props.location.state.blog.content
        console.log(element.innerHtml)
        for (let blog in props.location.state.blogs) {
            console.log(props.location.state.blogs[blog].field)
            console.log(props.location.state.blog.field)
            if ((props.location.state.blog.field === props.location.state.blogs[blog].field) && (props.location.state.blog.title !== props.location.state.blogs[blog].title)) {
                relatedBlogs.push(props.location.state.blogs[blog])
            }
        }
    }
    window.scrollTo(0,0)
    console.log(props.location)
    return (
        <BlogItemWrapper>
            <div className="row">
                {props.location.state.blog.title ? 
                    <React.Fragment>
                        <div className="col-12 relatedHeadingCol">
                            <p className="relatedHeading">Още по темата <span className="pink">{props.location.state.blog.field}</span></p>
                        </div>
                        <div className="container col-12 col-lg-9 col-md-9 mainColumn">
                            <p className="blogItemTag">{props.location.state.blog.field}</p>
                            <h5 className="blogItemTitle">
                                {props.location.state.blog.title}
                            </h5>
                            <p className="blogDate"><span className="gold"><i className="far fa-clock"></i> {props.location.state.blog.date}</span></p>
                            <img src={props.location.state.blog.imageUrl} alt="" className="blogItemImg"/>
                            <div className="blogItemContent" dangerouslySetInnerHTML={{__html: element.innerHtml}}>    
                            </div>
                        </div> 
                        {relatedBlogs.length > 0 ? <div className="col-12 col-lg-3 col-md-3 mainColumn">
                            {relatedBlogs.length > 0 ? relatedBlogs.map(blog => {
                                return (
                                    <Link to={{
                                        pathname:`/статия/${blog.title}`,
                                        state: {
                                            blog: blog, 
                                            blogs: props.location.state.blogs
                                        }
                                        }}>
                                        <div className="relatedContentCard">
                                            <p className="relatedContentTitle">
                                                {blog.title}
                                            </p>
                                            <img src={blog.imageUrl} alt=""/>
                                        </div>
                                    </Link>
                                )
                            }) : null}
                        </div> : null}
                    </React.Fragment>
                : null}
            </div>
        </BlogItemWrapper>
    )
}

const BlogItemWrapper = styled.div`
    margin-top: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .mainColumn {
        padding: 2rem;
    }
    .pink {
        color: var(--mainBlue);
    }
    .relatedHeading {
        text-align:right;
        color: white;
        font-weight: bold;
        margin-right: 1rem;
    }
    .relatedHeadingCol {
        background: var(--mainGold);
        padding-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 10px grey;
    }
    .relatedContentCard {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 10px -5px lightgrey;
        background: var(--lightBlue);
        border-radius: 3px;
        transition: transform 0.5s;
        img {
            width: 90%;
            height: 10rem;
        }
        .relatedContentTitle {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            padding: 0.5rem;
            background: var(--mainDark);
            color: white;
            font-family: 'Pattaya', sans-serif !important;
            transition: background 0.5s;
        }
    }
    .relatedContentCard:hover {
        transform: scale(1.05);
        .relatedContentTitle {
            background: var(--mainBlue);
        }
    }
    .container {
        padding: 1rem;
        .blogItemTitle {
            font-size: 3rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
            color: var(--mainDark);
        }
        .blogItemImg {
            width: 100%;
            height: auto;
            box-shadow: 0px 0px 10px var(--lightBlue);
            filter: grayscale(10%) brightness(90%);
            margin-left: 0.5rem;
        }
        .blogItemContent {
            padding: 1rem;
            margin-top: 2rem;
            color: var(--mainDark);
            text-align: left;
        }
        .blogItemTag {
            margin-bottom: -1.5rem;
            font-size: 1.5rem;
            color: var(--mainGold);
            text-align: center;
        }
        .blogDate {
            text-align: right;
            margin-bottom: 0.2rem;
        }
        .gold {
            color: var(--mainBlue);
        }
    }
`