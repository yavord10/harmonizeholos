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
                <h5 className="blogItemTitle">
                    {props.location.state.title}
                </h5>
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
        background: var(--lightGold);
        box-shadow: 1px 1px 10px -5px grey;
        .blogItemTitle {
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
            color: var(--mainBlue);
        }
        .blogItemImg {
            width: 80%;
            height: auto;
            box-shadow: 0px 0px 10px -5px grey;
        }
        .blogItemContent {
            margin-top: 2rem;
            color: white;
        }
    }
`