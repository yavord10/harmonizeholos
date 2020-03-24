import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function BlogSummary(props) {
    let currentDate = props.blog.date && new Date(props.blog.date)
    console.log(props.blog)
    return (
        <BlogSummaryWrapper className="col-12 col-lg-4 col-md-6 col-sm-6" img={props.blog.imageUrl}>
            <Link to={{
                pathname:`/статия/${props.blog.title}`,
                state: props.blog
                }} onClick={() => props.openBlog(props.blog)}>
                <div className="summaryContainer">
                    <div className="summaryTitle">{props.blog.title}</div>
                    <div className="summaryBody">
                        <div className="imgContainer"></div>
                        <div className="blogSummary">{props.blog.summary}</div>
                    </div>
                    <div className="row summaryFooter">
                        <div className="summaryDate ml-auto mr-3">{currentDate && currentDate.toDateString()}</div>
                    </div>
                </div>
            </Link>
        </BlogSummaryWrapper>
    )
}

const BlogSummaryWrapper = styled.div`
    .summaryContainer {
        width: 100%;
        border-radius: 3px;
        box-shadow: 1px 1px 10px -5px grey;
        margin-bottom: 2rem;
        background: white;
    }
    .summaryContainer:hover {
        animation: move-up 0.5s ease-in-out;
        box-shadow: 1px 1px 20px -10px grey;
    }
    .summaryFooter {
        padding: 1rem;
        color: var(--mainGold);
    }
    .summaryTitle {
        height: 6rem;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        padding: 1rem;
        color: white;
        background: var(--mainBlue);
    }
    .imgContainer {
        margin-top: 0.3rem;
        width: 100%;
        height: 10rem;
        background-image: url(${props => props.img});
        background-position: center;
        border-bottom: 0.4rem solid var(--mainGold);
        filter: grayscale(5%) brightness(95%);
        box-shadow: inset 0px 0px 10px var(--mainGold);
    }
    .summaryDate {
        font-size: 0.8rem;
    }
    .blogSummary{
        padding: 0.5rem;
        height: 10rem;
        margin-top: 0.5rem;
        font-size: 0.9rem;
        overflow-y: scroll;
        color: var(--mainBlue);
        ::-webkit-scrollbar-thumb {
            background-color: var(--mainGold);
            outline: 1px solid var(--mainGold);
        }
    }
    .summaryBody {
        padding: 1rem;
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