import { AutoComplete, Button, DatePicker, Space, version } from "antd";
import { useEffect, useRef, useState } from "react";

function App() {
  const options = [
    {
      title: "",
      value: "orange",
    },
  ];

  const dropdownContainerRef = useRef(null);

  for (let index = 0; index < 20; index++) {
    options.push({
      title: "",
      value: "Downing Street bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    });
  }

  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("xxx custom dropdown", dropdownContainerRef);
    if (dropdownContainerRef.current) {
      const allItems =
        dropdownContainerRef.current.querySelectorAll(".ant-select-item");

      const holderInner = dropdownContainerRef.current.querySelector(
        ".rc-virtual-list-holder-inner"
      );
      const listHolder = dropdownContainerRef.current.querySelector(
        ".rc-virtual-list-holder > div:first-child"
      );

      if (holderInner) {
        const isOverflowing = holderInner.scrollWidth > holderInner.clientWidth;
        if (isOverflowing) {
          listHolder.style.width = holderInner.scrollWidth + "px";
        } else {
          listHolder.style.overflowX = "hidden";
          listHolder.style.removeProperty("width");
        }
      }
    }
  }, [dropdownContainerRef, value]);

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
        open={true}
        onChange={(value) => setValue(value)}
        value={value}
        dropdownRender={(item) => {
          // console.log('xxx dropdown render', item);
          return (
            <div className="fuzzy-dropdownwrapper" ref={dropdownContainerRef}>
              {item}
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
