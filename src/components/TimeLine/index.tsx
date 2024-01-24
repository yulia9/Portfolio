import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const TimeLine = ({ items = [] }) => (
  <Timeline position="alternate">
    {items.map(({ title, date, anchor }, index) => (
      <TimelineItem key={title}>
        <TimelineOppositeContent>
          <div className="text-tiffany max-w-24 hover:text-crayola">
            <a href={`#${anchor}`}> {date}</a>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          {index !== items.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <div className="text-wenge max-w-32 hover:text-crayola">
            <a href={`#${anchor}`}>{title}</a>
          </div>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
);

export default TimeLine;
