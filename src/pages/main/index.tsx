const HomePage = () => {
  return (
    <div className="relative flex justify-center items-center pt-20">
      <img src={"/images/saitama_hotpot.gif"} className="App-logo" alt="logo" />
      <img src={"/images/cloud_left.png"} className="absolute left-0 -bottom-2 w-1/2" alt="cloud" />
      <img
          src={"/images/cloud_right.png"}
          className="absolute right-0 -bottom-2 w-1/2"
          alt="cloud"
        />
    </div>
  );
};
export default HomePage;
