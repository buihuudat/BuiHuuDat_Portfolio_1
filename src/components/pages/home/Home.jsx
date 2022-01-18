import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <div className="home container" id="home">
      <div className="home__wrap">
        <div className="home__img">
          <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/270116905_10226168771703020_7597375430965970359_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aodgXhjHWrYAX993Ei5&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9DIVw4d-7ew5S84sqLdQJNju4VARD0s0iamD-6kqiRyQ&oe=61EA80CE" alt="" />
        </div>
        <div className="home__content">
          <div className="home__social">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-pinterest-p"></i></a>
            <a href=""><i className="fas fa-paper-plane"></i></a>
            <a href=""><i className="fab fa-behance"></i></a>
          </div>
          <div className="home__name">
            I am Bui Huu Dat
          </div>
          <div className="home__desc">
            i'm Dat, professional web developer with long time experience in this field.
          </div>
          <div className="home__button">
            <div className="home__cv">
              <button><a href="">My CV</a></button>
            </div>
            <div className="home__view">
              <button><a href="https://www.youtube.com/watch?v=TFxQstI_jkA">View</a></button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;