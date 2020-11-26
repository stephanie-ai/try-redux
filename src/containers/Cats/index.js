import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CatCard } from '../../components';
import './style.css';

class Cats extends Component {
    render() {
        const renderCats = this.props.cats.length ?
            this.props.cats.map((d, indx) => <CatCard key={indx} cat={d}/>)
            : <h1>No cats here...</h1>

        return (
            <>
            { this.props.loading ? 
                "Loading..." 
                : <section id="cats">{ renderCats }</section>
            }
            </>
        );
    }
}

const mSTP = state => ({
    cats: state.allCats,
    loading: state.loading
})

export default connect(mSTP)(Cats);