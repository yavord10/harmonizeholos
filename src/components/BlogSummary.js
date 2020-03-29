import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function BlogSummary(props) {
    console.log(props.blog)
    return (
        <BlogSummaryWrapper className="col-12 col-lg-4 col-md-6 col-sm-6" img={props.blog.imageUrl}>
            <Link to={{
                pathname:`/статия/${props.blog.title}`,
                state: {
                    blog: props.blog, 
                    blogs: props.blogs
                }
                }} onClick={() => props.openBlog(props.blog)}>
                <div className="summaryContainer" data-aos="fade-up">
                    <div className="summaryTitle">{props.blog.title}</div>
                    <div className="summaryBody">
                        <div className="imgContainer"></div>
                        <div className="blogSummary">{props.blog.summary}</div>
                    </div>
                    <div className="row summaryFooter">
                        <div className="summaryDate ml-auto mr-3"><i className="far fa-clock"></i> {props.blog.date}</div>
                    </div>
                </div>
            </Link>
        </BlogSummaryWrapper>
    )
}

const BlogSummaryWrapper = styled.div`
    .summaryContainer {
        width: 100%;
        border-radius: 4px;
        box-shadow: 1px 1px 10px -5px var(--mainDark);
        margin-bottom: 2rem;
        background: white;
    }
    .summaryContainer:hover {
        animation: move-up 0.5s ease-in-out;
        box-shadow: 1px 1px 20px -10px var(--mainDark);
        transition: color 0.5s;
        .summaryTitle {
            color: var(--mainBlue);
        }
        .imgContainer {
            border-bottom: 0.4rem solid var(--mainBlue);
        }
    }
    .summaryFooter {
        padding-top: 0;
        padding: 1rem;
        color: var(--mainGold);
    }
    .summaryTitle {
        height: 6.5rem;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 1rem;
        color: var(--mainDark);
        background: var(--mainGold);
        font-size: 1.2rem;
        font-weight: bold;
        font-family: sans-serif;
    }
    }
    .imgContainer {
        width: 100%;
        height: 10rem;
        background-image: url(${props => props.img});
        background-position: center;
        border-bottom: 0.4rem solid var(--mainDark);
        filter: grayscale(5%) brightness(95%)
    }
    .summaryDate {
        font-size: 0.8rem;
        color: var(--mainBlue);
    }
    .blogSummary{
        padding: 0.5rem;
        height: 10rem;
        margin-top: 0.5rem;
        font-size: 0.9rem;
        overflow-y: scroll;
        color: var(--mainDark);
        ::-webkit-scrollbar-thumb {
            background-color: var(--mainGold);
            outline: 1px solid var(--mainGold);
        }
    }
    .summaryBody {
        padding: 1rem;
        padding-bottom: 0rem;
    }
    @media (max-width: 600px) {
        .summaryContainer {
            margin-left: auto;
            margin-right: auto;
        }
    }
    @keyframes move-up {
        0% {transform: translateY(0px)}
        50% {transform: translateY(-10px)}
        100% {transform: translateY(0px)}
    }
`