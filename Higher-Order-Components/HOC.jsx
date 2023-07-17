const HOC = (Component) => {
  const myBio = {
    name: "I am kartik chhabra",
    bio: {
      role: "A Web developer with ReactJs",
      from: "from India"
    }
  };
  const returnComponent = () => {
    return <Component objValue={myBio} />;
  };

  return returnComponent;

  // other way to retun component in inline function
  // return () => <Component objValue={myBio} />;
};

export default HOC;
