import React from 'react';

const Spinner = () => {
    return (
        <div className="ui active dimmer">
            <div className="ui indeterminate loader">Loading</div>
        </div>
    );
}

export default Spinner;