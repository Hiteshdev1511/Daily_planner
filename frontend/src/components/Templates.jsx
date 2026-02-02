import { useEffect, useState } from "react";
import templateImage from "../assets/template.png";
import { Link } from "react-router-dom";
import { List } from "lucide-react";

// eslint-disable-next-line no-unused-vars, react/prop-types
function TemplateCard({ title, description, img = "" }) {
  return (
    <div className="h-70 border-gray-300 border-1 w-60 rounded-xl mr-3">
      <div className="h-5/12 flex items-center justify-center bg-green-50 border-b-gray-300 border-b-1">
        <img src={templateImage} alt="error" width="90" />
      </div>
      <div className=" flex flex-col justify-around h-7/12 p-4">
        <div className="font-bold">{title}</div>
        <div className="text-gray-500">{description}</div>
        <Link className="flex items-center text-gray-500">
          <List size={"15"} />
          List
        </Link>
      </div>
    </div>
  );
}

const buttons = [
  "Work",
  "Personal",
  "Education",
  "Managment",
  "Marketing & Sales",
  "Customer Support",
];

const templateContent = {
  Work: [
    [
      "Accounting Tasks",
      "Create a system to keep your books,receipts,and invoices organized",
    ],
    [
      "Business Travel Packing",
      "Never forget your laptop charger, lucky shoes , or passport again",
    ],
    [
      "Client Management",
      "Organize your work with clients from the smallest to largest details",
    ],
    [
      "Deep Work",
      "Practice prioritizing focus and eliminating distraction with this template",
    ],
    [
      "Meeting Agenda",
      "Waste less time in meetings ensuring they're efficeint and action-oriented",
    ],
  ],
  Personal: [
    [
      "Goal Tracker",
      "Build a system that conencts your high level goals to your dialy actions",
    ],
    ["Appointements", "Never forget another meeting or appointment"],
    [
      "Fitness",
      "Make fitness a habit by adding your favorite exercises to oyur to-do list",
    ],
    [
      "Grocery List",
      "Keep your grocery list wherever you go by adding it all to your iTodo",
    ],
    [
      "Meal Planning",
      "Use this template and take the stress out of the meal planning and cooking",
    ],
  ],
  Education: [
    [
      "Class Planning",
      "Keep all the many details of your class plans organized and in one place",
    ],
    [
      "Language learning",
      "Set a goal, pick a method, and create a habit of learning a new language",
    ],
    [
      "Student Project",
      "Share this project with your classmates and make your way toward an A",
    ],
    [
      "Student Planning",
      "Never forget a single reading or assignement with this handy chekcliest for organizing each course",
    ],
    [
      "Educator Plainning",
      "Stay productive as an educator whether you're in front of the classroom or plainning and graidng after hours",
    ],
  ],
};

function Templates() {
  const [buttonClicked, setButtonClicked] = useState("");
  const [templateCards, setTemplateCards] = useState(templateContent["Work"]);

  useEffect(() => {
    if (buttonClicked) {
      setTemplateCards(templateContent[buttonClicked]);
    }
  }, [buttonClicked]);

  console.log(buttonClicked);

  return (
    <div className="flex flex-col h-170 items-center justify-start">
      {/* Main heading */}
      <div className="flex flex-col items-center justify-around h-35 mb-10">
        <h1 className="font-bold text-4xl">
          Kickstart your next project with Todoist Templates
        </h1>
        <h2 className="text-2xl text-gray-500 text-wrap w-180 text-center leading-10">
          No need to create projects or setups from scratch when we have 50+
          templates made for you.
        </h2>
      </div>
      <div className="flex items-center justify-between w-220 mb-6">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => setButtonClicked(button)}
            className={`text-xl hover:bg-gray-200 p-3 px-4 rounded-xl ${
              button === buttonClicked ? "bg-green-50" : "bg-gray-100"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-around w-fit">
        {templateCards.map((card, index) => (
          <TemplateCard key={index} title={card[0]} description={card[1]} />
        ))}
      </div>
      <div className="text-blue-700 hover:bg-blue-100 h-8 w-42 rounded flex items-center justify-center mt-8">
        <button>See more templates &gt; </button>
      </div>
    </div>
  );
}

export default Templates;
