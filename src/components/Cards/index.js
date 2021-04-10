import React from 'react'
// import API from "../../utils/API";

const Cards = () => {
  // const [imgUrl, setImg] = useState("")

  // const information = event => {
  //   API.searchPoke()
  //     .then(res => {
  //       setImg(res.data.sprites.front_default)
  //       console.log(res.data.sprites.front_default)
  //     })
  // }

  return (
        <div className="cards">
          <div className="card-single">
            <div>
              <h1>54</h1>
              <span>Customer</span>
            </div>
            <div>
              <span className="las la-users"></span>
            </div>
          </div>

          <div className="card-single">
            <div>
              <h1>79</h1>
              <span>Projects</span>
            </div>
            <div>
              <span className="las la-clipboard"></span>
            </div>
          </div>

          <div className="card-single">
            <div>
              <h1>123</h1>
              <span>Orders</span>
            </div>
            <div>
              <span className="las la-shopping-bag"></span>
            </div>
          </div>

          <div className="card-single">
            <div>
              <h1>$6k</h1>
              <span>Income</span>
            </div>
            <div>
              <span className="las la-google-wallet"></span>
            </div>
          </div>

        </div>
  )
}

export default Cards
