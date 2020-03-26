import React from 'react';
import styled from 'styled-components';

export default function BlogItem(props) {  
    var element = document.createElement('template');
    console.log(element);
    if (props.location.state) {
        element.innerHtml = props.location.state.content
        console.log(element.innerHtml)
    }
    window.scrollTo(0,0)
    console.log(props.location)
    return (
        <BlogItemWrapper>
            {props.location.state.title ? <div className="container">
                <p className="blogItemTag">{props.location.state.field}</p>
                <h5 className="blogItemTitle">
                    {props.location.state.title}
                </h5>
                <p className="blogDate">Качено: <span className="gold">{props.location.state.date}</span></p>
                <img src={props.location.state.imageUrl} alt="" className="blogItemImg"/>
                <div className="blogItemContent" dangerouslySetInnerHTML={{__html: element.innerHtml}}>
                    
                </div>
            </div> : null}
        </BlogItemWrapper>
    )
}

const BlogItemWrapper = styled.div`
    margin-top: 3rem;
    padding: 2rem;
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
        }
        .blogItemContent {
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
            color: var(--mainGold);
        }
    }
`