import { Link } from 'react-router-dom';
import './services.css';

const dataServices = [
  {
    icon: 'fab fa-github',
    title: 'Web Development',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur?",
  },
  {
    icon: 'fas fa-cubes',
    title: 'Web Design',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur?",
  },
  {
    icon: 'fas fa-file-video',
    title: 'Video Editing',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur?",
  },
  {
    icon: 'fas fa-camera',
    title: 'Photography',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur?",
  },
  {
    icon: 'fab fa-apple',
    title: 'App Developing',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur?",
  },
  {
    icon: 'fab fa-yoast',
    title: 'SEO Export',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur?",
  },
]

const Services = () => {
  return (
    <div className="services container" id="services">
      <div className="services__wrap">
        <div className="services__title">My Services</div>
        <div className="services__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis itaque error ipsa! Repudiandae ullam rem debitis hic vel, sed suscipit quisquam, alias non, adipisci ducimus quia esse nemo quasi eaque?
        </div>
        <div className="services__line"></div>
        <div className="services__content">
          {
            dataServices.map((e, i) => (
              <div className="services__box" key={i}>
                <div className="services__icon"><i className={e.icon}></i></div>
                <div className="services__content__title">{e.title}</div>
                <div className="services__content__desc">{e.desc}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services;
