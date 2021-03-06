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
            if ((props.location.state.blog.field.includes(props.location.state.blogs[blog].field)) && (props.location.state.blog.title !== props.location.state.blogs[blog].title)) {
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
                        <div className={relatedBlogs.length > 0 ? "container col-12 col-lg-8 col-md-8 mainColumn mx-auto" : "container col-12 col-lg-9 col-md-9 mainColumn mx-auto"}>
                            <div className="blogItemHeading">
                                <p className="blogItemTag" data-aos="fade-right">{props.location.state.blog.field}</p>
                                <h5 className="blogItemTitle" data-aos="zoom-in">
                                    {props.location.state.blog.title}
                                </h5>
                            </div>
                            <p className="blogDate"><span className="gold"><i className="far fa-clock"></i> {props.location.state.blog.date}</span></p>
                            <img src={props.location.state.blog.imageUrl} alt="" className="blogItemImg" data-aos="fade-up"/>
                            <div className="blogItemContent" dangerouslySetInnerHTML={{__html: element.innerHtml}}>    
                            </div>
                        </div> 
                        {relatedBlogs.length > 0 ? <div className="col-12 col-lg-3 col-md-4 mainColumn mx-auto sideColumn">
                            <p className="relatedHeading">Още по темата</p>
                            <div className="separator"></div>
                            {relatedBlogs.length > 0 ? relatedBlogs.slice(0,8).map(blog => {
                                return (
                                    <Link to={{
                                        pathname:`/статия/${blog.title}`,
                                        state: {
                                            blog: blog, 
                                            blogs: props.location.state.blogs
                                        }
                                        }} key={relatedBlogs.indexOf(blog)}>
                                        <div className="relatedContentCard" data-aos="fade-up">
                                            <p className="relatedContentTitle">
                                                {blog.title}
                                            </p>
                                            <img src={blog.imageUrl} alt=""/>
                                        </div>
                                    </Link>
                                )
                            }) : null}
                            {relatedBlogs.length > 8 ? <Link to="/блог"><button className="relatedContentButton" data-aos="fade-up">Виж повече</button></Link> : null}
                        </div> : null}
                    </React.Fragment>
                : null}
            </div>
        </BlogItemWrapper>
    )
}

const BlogItemWrapper = styled.div`
    margin-top: 3rem;
    padding-left: 0rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .mainColumn {
        padding: 2rem;
    }
    .pink {
        color: var(--mainBlue);
    }
    .relatedHeading {
        text-align: center;
        color: var(--mainBlue);
        font-weight: bold;
        font-size: 1.7rem;
        font-family: 'Pattaya', sans-serif !important;
    }
    .separator {
        margin-top: -0.5rem;
        border: solid 4px var(--mainDark);
        border-radius: 10px;
        width: 100%;
        margin-bottom: 1rem;
    }
    .relatedContentCard {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 10px -5px lightgrey;
        background: white;
        border-radius: 3px;
        transition: transform 0.5s;
        box-shadow: 0 0 10px grey;
        img {
            width: 90%;
            height: 10rem;
        }
        .relatedContentTitle {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            padding: 0.5rem;
            background: var(--mainGold);
            color: white;
            font-family: 'Pattaya', sans-serif !important;
            transition: background 0.5s;
        }
    }
    .relatedContentCard:hover {
        .relatedContentTitle {
            background: var(--mainBlue);
        }
    }
    .relatedContentButton {
        width: 100%;
        background: none;
        border: solid 2px var(--mainBlue);
        color: var(--mainBlue);
        border-radius: 3px;
        outline: none;
        transition: border 0.5s;
        transition: color 0.5s;
        padding: 0.5rem;
    }
    .relatedContentButton:hover {
        border: solid 2px var(--mainDark);
        color: var(--mainDark);
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
            box-shadow: 0px 0px 10px grey;
            filter: grayscale(10%) brightness(90%);
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