import logo from './logo.svg';
import './App.css';
// import bikeImage from './img1.jfif'
import Menu from './menuapi';
import MaterialCOmp from './Mui'

function App() {
  console.log(Menu)


  return (
    <div>

      <MaterialCOmp />
      <div className="container">
        <div className="row ">
          {
            Menu.map((elem, index) => {
              const { id, image, name, category, price, description } = elem;
              return (
                <div className="col-md-4 col-12 ">
                  <div className="mt-5 ">
                    <div className="card " >
                      <img src={image} width="400px" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{category}</h5>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </div >
  );
}

export default App;
