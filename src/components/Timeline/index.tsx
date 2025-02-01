import { Timeline } from "antd";
import React from "react";

interface TimelineItem {
  children: React.ReactNode;
}

interface CustomTimelineProps {
  items: TimelineItem[];
}

const CustomTimeline: React.FC<CustomTimelineProps> = ({ items }) => {
  return (
    <Timeline>
      {items?.map((item, index) => (
        <Timeline.Item key={index} className="fontMonospace">
          {item.children}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default CustomTimeline;
