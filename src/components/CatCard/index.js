import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LikeButton } from '../LikeButton';
import { toggleLikeCat } from '../../actionCreators/CatActions';

class CatCard extends Component {
    handleToggleLike = id => {
        this.props.toggleLikeCat(id);
    }    

    render() {
        const { id, img, liked } = this.props.cat

        return (
            <div className="card">
                <img src={img} />
                <LikeButton liked={liked} handleClick={() => this.handleToggleLike(id)}/>
            </div>
        )
    }
}

export default connect(null, { toggleLikeCat })(CatCard);