import { AutoComplete, Button, DatePicker, Space, version } from "antd";
import { useState } from "react";

function App() {
  const options = [
    {
      title: "",
      value: "Downing Street bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    },
  ];

  for (let index = 0; index < 30; index++) {
    options.push({
      title: "",
      value: "Downing Street",
    });
  }

  for (let index = 0; index < 30; index++) {
    options.push(options[0]);
  }

  return (
    <div className="w-full pl-20">
      <AutoComplete
        style={{
          width: 200,
        }}
        options={options}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        popupMatchSelectWidth={true}
        notFoundContent={<div>Not content</div>}
      />
    </div>
  );
}

export default App;
