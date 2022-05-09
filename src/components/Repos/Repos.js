import Repo from './Repo';
import './Repos.css';

const Repos = (props) => {
  return (
    <div className="repos">
      <h2 className="repos__heading">Repositories ({props.repos.length})</h2>
      {props.repos.map((item) => (
        <Repo key={item.id} repo={item} />
      ))}
    </div>
  );
};

export default Repos;
