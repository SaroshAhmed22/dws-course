import logo from './logo.svg';
import './App.css';
// import bikeImage from './img1.jfif'
import Menu from './menuapi';

function App() {
  console.log(Menu)


  return (
    <div>
      {
        Menu.map((elem, index) => {
          const { id, image, name, category, price, description } = elem;
          return (
            <div className="mt-5 col-md-4 col-12">
              <div className="card " >
                <img src={image} height="300px" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{category}</h5>
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">{price}</p>
                </div>

              </div>
            </div>
          )
        })
      }
    </div >
  );
}

export default App;
