import Link from 'next/link';

const projectCardStyle = {
  border: '1px solid #cccccc',
  padding: '10px',
  cursor: 'pointer',
  marginBottom: '10px',
  backgroundColor: '#f4f4f4',
  borderRadius: '2px'
}

const projectTitleStyle = {
  margin: '0px'
}

const ProjectCard = props => (
  <Link href={props.link} passHref>
    <div style={projectCardStyle} className="projectCard">
      <h4 style={projectTitleStyle}>{props.title}</h4>
      <div>{props.description}</div>
      <hr style={{ color: '#cccccc'}}/>
      {props.technologies.map(technology => (
        <div key={technology}>- {technology}</div>
      ))}
    </div>
  </Link>
)

export default ProjectCard;