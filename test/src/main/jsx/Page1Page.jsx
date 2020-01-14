import '../webapp/css/custom.css';

import React from 'react';
import ReactDom from 'react-dom';

class Page1Page extends React.Component {
    render() {
        return <div className="page1">no4gift Page1 페이지</div>;
    }
}

ReactDom.render(<Page1Page/>, document.getElementById('root'));