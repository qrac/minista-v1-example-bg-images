import { Helmet } from "react-helmet"
import { render } from "minista"

const PageHome = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
      <div className="hoge" style={{ height: "200px", margin: "8px" }}></div>
      <div className="fuga" style={{ height: "200px", margin: "8px" }}></div>
    </>
  )
}

export default render(<PageHome />)
