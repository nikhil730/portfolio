import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title head">
            Dev Samaj Modern School, Nehru Nagar, New delhi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">High School</h4>
          <p>Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi Technological University, Delhi
          </h3>

          <h4 className="vertical-timeline-element-subtitle">B.Tech</h4>

          <p> Electrical Engineering</p>
        </VerticalTimelineElement>
        {/* {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Engineer - Google
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - July 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDE Intern - Aumyaa Consulting Services LLP
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            <ul>
              <li>
                Worked on AUM-ERM tool, automating and adding ISO service used
                in doing audits.
              </li>
              {/* <li>
                Created a No code tool for Auditors, where they can upload an
                excel-sheet and the data fills the table on which they can work
                and then download the sheet
              </li> */}
              <li>
                Integrated OpenAi with ERP platform for various Policy
                Generation
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
