import React from "react";

class Ref_Comp extends React.Component {
  refArray = React.createRef(new Map());
  constructor() {
    super();
  }
  getMap() {
    if (!this.refArray.current) {
      this.refArray.current = new Map();
    }
    return this.refArray.current;
  }
  catList = [{ id: 1, name: "meow" }, { id: 2, name: "beatles" }, { id: 3, name: "snowy" }]
  render() {
    return (
      <div>
        <div>Ref_Comp UI</div>
        <ul>
          {this.catList.map(cat => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = this.getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <label>Cat Name</label>: <span>{cat.name}</span>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => {
            let liList = this.getMap();
            console.log(liList.get(2).innerText)
          }}>See Cat 3 Name</button>

        </div>
      </div>
    );
  }
}

export default Ref_Comp;
