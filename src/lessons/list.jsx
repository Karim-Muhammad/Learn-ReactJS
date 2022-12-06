import React from "react";

export default function List() {
  const list = [
    { id: 0, title: "How to search well?" },
    { id: 1, title: "How to grow fast?" },
    { id: 2, title: "How to become dev?" },
    { id: 3, title: "How to play games?" },
    { id: 4, title: "How to speak confidently?" },
    { id: 5, title: "How to manage your time?" },
    { id: 6, title: "How to study hard?" },
    { id: 7, title: "How to be karizma?" },
  ];
  return (
    <div>
      {list.map((el) => (
        <div key={el.id}>
          <h4>{el.title}</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            accusamus recusandae veniam error, voluptas repellat porro aut atque
            quod, dolorum assumenda doloremque nobis inventore deleniti animi ex
            necessitatibus non sequi.
          </p>
        </div>
      ))}
    </div>
  );
}
