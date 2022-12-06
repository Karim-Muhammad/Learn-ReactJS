import React from "react";

export default function Props(props) {
  //   props.name = "Memo"; Error props immutable
  const { name, view } = props;

  return (
    <div>
      props {name}, {view}
    </div>
  );
}

/*
export default class Props extends Component {
  render() {
     const {name, views} = this.props;

    return (
      <div>props {name}, {views}</div>
    )
  }
}
*/
