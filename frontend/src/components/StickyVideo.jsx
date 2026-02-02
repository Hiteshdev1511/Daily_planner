import { useEffect, useRef, useState } from "react";
import video1 from "../assets/video1.webm";
import video2 from "../assets/video2.webm";
import video3 from "../assets/video3.webm";
import video4 from "../assets/video4.webm";

const contentData = [
  {
    id: 1,
    heading: "Clear your mind",
    title: "Capture tasks at the speed of thought",
    content:
      "We’ve spent over a decade refining Todoist to be an extension of your mind. Capture and organize tasks instantly using easy-flowing, natural language.",
    videoUrl: video1,
  },
  {
    id: 2,
    heading: "Focus on what’s important",
    title: "Stay organized and focused",
    content:
      "Achieve mental clarity by sorting tasks into Today, Upcoming, or using custom filters. See only what you need, when you need it.",
    videoUrl: video2,
  },
  {
    id: 3,
    heading: "Plan with confidence",
    title: "Simplify your planning",
    content:
      "Make the most of your time. Schedule due dates, visualize your week in calendar view, and set recurring tasks with ease.",
    videoUrl: video3,
  },
  {
    id: 4,
    heading: "Organize your teamwork, too",
    title: "A home for your team’s tasks",
    content:
      "Give your team a shared space to collaborate and stay on top of it all – alongside but separate from your personal tasks and projects.",
    videoUrl: video4,
  },
];

function StickyVideo() {
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    contentData[0].videoUrl
  );
  const contentRefs = useRef([]);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.dataset.id);
          const newContent = contentData.find((content) => content.id === id);

          if (newContent) {
            setCurrentVideoUrl(newContent.videoUrl);
          }
        }
      });
    }, options);

    const refs = contentRefs.current;
    refs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="flex justify-around items-start m-25">
        <div>
          {contentData.map((content, index) => (
            <div
              key={content.id}
              ref={(el) => (contentRefs.current[index] = el)}
              className="flex flex-col h-135 w-120 items-start justify-center"
              data-id={content.id}
            >
              <span
                className={`text-xl mb-5 ${
                  index == 0
                    ? "text-amber-600"
                    : index == 1
                    ? "text-violet-400"
                    : index == 2
                    ? "text-red-500"
                    : "text-green-800"
                }`}
              >
                {content.heading}
              </span>
              <h1 className="text-4xl font-bold leading-12 mb-5">
                {content.title}
              </h1>
              <span className="text-xl text-gray-500 leading-8">
                {content.content}
              </span>
            </div>
          ))}
        </div>
        <div className="md:sticky top-1/5">
          <video
            src={currentVideoUrl}
            key={currentVideoUrl}
            width="550"
            height="550"
            loop={true}
            autoPlay
            muted
          ></video>
        </div>
      </div>
    </>
  );
}

export default StickyVideo;
