import Repo from './Repo';

const Repos = (props) => {
  return (
    <>
      {props.currentRepos &&
        props.currentRepos.map((item) => <Repo key={item.id} repo={item} />)}
    </>
  );
};

export default Repos;
