import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  // JS

  return (
    //JSX
    <>
      {data.map((item) => {
        console.log(item);
        const { id, language, img, btnName } = item; //! destr.
        return <Card key={id} language={language} img={img} btn={btnName} />;
      })}
    </>
  );
}

export default App;
