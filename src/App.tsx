import Typical from "react-typical"

function App() {


  return (
    <>

      <h1>Welcome for portfol</h1>
      <div>
        <span>
          <h1>
            <Typical
              loop={Infinity}
              steps={[
                "Ethustic developer",
                1000,
                "MERN developer",
                1000,
                "NOde developer",
                1000,
                "Java developer",
                1000,
                "AI developer",
                1000,

              ]}
            />
          </h1>
        </span>
      </div>
    </>
  )
}

export default App
