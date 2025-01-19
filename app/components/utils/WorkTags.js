import HeadingLG from "./headings/HeadingLG";

export default function WorkTags({ timeline, impact, role, tools, className }) {
  return (
    <div className={`flex gap-8 md:flex-row flex-col ${className}`}>
      {impact && (
        <div>
          <HeadingLG>Impact</HeadingLG>
          <ul className="list-disc ml-4">
            {impact.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      {role && (
        <div>
          <HeadingLG>Role</HeadingLG>
          <ul className="list-disc ml-4">
            {role.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      {tools && (
        <div>
          <HeadingLG>Tools</HeadingLG>
          <ul className="list-disc ml-4">
            {tools.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      {timeline && (
        <div>
          <HeadingLG>Timeline</HeadingLG>
          <p>{timeline}</p>
        </div>
      )}
    </div>
  );
}
