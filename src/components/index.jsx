import {Link} from 'react-router';
export default class Index extends React.Component {
  render(){
    return <div>Index<Link to="test">test</Link><br />{this.props.children}</div>;
  }
}
