import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { ComponentLayout } from "../../components/common";

export default function AccordionPage() {
  return (
    <ComponentLayout heading={"Accordion"}>
      <Accordion data={accordionData} width={"600px"} />
    </ComponentLayout>
  );
}

function Accordion({ data, width }) {
  return (
    <div className="flex flex-col border" style={{ width: width }}>
      {data.map((item) => {
        const { name, description } = item;
        return (
          <AccordionRow key={name} name={name} description={description} />
        );
      })}
    </div>
  );
}

function AccordionRow({ name, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div key={name} className="flex flex-col">
      <button
        className="bg-gray-200 hover:bg-gray-300 flex flex-row justify-between items-center p-4"
        onClick={() => {
          setIsExpanded((isExpanded) => !isExpanded);
        }}
      >
        <div>{name}</div>
        <div>{isExpanded ? <MdExpandLess /> : <MdExpandMore />} </div>
      </button>
      {isExpanded && <div className="bg-white px-4">{description}</div>}
    </div>
  );
}

const accordionData = [
  {
    name: "Section 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Section 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Section 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
