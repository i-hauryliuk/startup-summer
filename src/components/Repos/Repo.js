import './Repo.css';

const Repo = (props) => {
  return (
    <div className="repo">
      <h3 className="repo__title">
        <a href={props.repo.url} className="repo__link">
          {props.repo.name}
        </a>
      </h3>
      <p className="repo_description">{props.repo.description}</p>
    </div>
  );
};

export default Repo;
