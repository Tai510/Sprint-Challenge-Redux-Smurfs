import React from 'react';
import {getsmurf} from '../actions/index';
import { connect } from 'react-redux';

class SmurfVillage extends React.Component {
    componentDidMount() {
        this.props.getsmurf();
    }

    render() {
        return (
            <div className='smurf-list'>
             {this.props.smurfs.map(smurf =>
               <div key={smurf.id}>
                <strong>Name: {smurf.name}</strong>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
               </div> 
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getsmurf}) (SmurfVillage);