import {Link} from 'react-router';
export default class Index extends React.Component {
  render(){
    return <div>Hello<Link to="test">test</Link><br />{this.props.children}</div>;
  }
}
