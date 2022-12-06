import React from "react";

export default function Derstructure(props) {
  // or we can destructure in parameter itself ({name, view})=>{}
  const [data, setData] = React.useState([1, 2, 3]);
  const { name, views } = props;
  const [firstE, , thirdE] = data;
  return <div>De</div>;
}

// export default class derstructure extends Component {
//   render() {
//        destructure here!
//        const {name, views} = this.props;
//     return (
//       <div>derstructure</div>
//     )
//   }
// }
