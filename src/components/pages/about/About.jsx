import './about.css';

const About = () => {
  return (
    <div className="about container" id="about">
      <div className="about__wrap">
        <div className="about__title">About Me</div>
        <div className="about__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, possimus reiciendis magni quisquam labore nobis ipsam fugiat nam repellat error iusto, odio voluptas magnam dignissimos cupiditate, facilis aperiam culpa dolor.
        </div>
        <div className="about__line"></div>
        <div className="about__contents">
          <div className="about__img">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30771d69-cd69-491f-8b64-3525205d4178/dbmcw3n-94fa3dda-81c6-440f-9343-98dab7fe7c6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwNzcxZDY5LWNkNjktNDkxZi04YjY0LTM1MjUyMDVkNDE3OFwvZGJtY3czbi05NGZhM2RkYS04MWM2LTQ0MGYtOTM0My05OGRhYjdmZTdjNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1bSEHTKh8hhVnhtOkqJA32eDWSm2218AzVNqAujIS0c" alt="" />
          </div>
          <div className="about__content">
            <div className="about__content__title">Hi There</div>
            <div className="about__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur ad, autem fuga ipsum quis repellat doloribus eum tempore ratione mollitia itaque inventore nesciunt est harum corporis. Fugit, dicta totam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, iure illo voluptatum ipsa delectus quaerat quia, excepturi quo, eum ipsam soluta doloremque? Laborum aperiam quae ex? Repudiandae atque impedit assumenda!</div>

            <div className="about__content__infos">
            <div className="about__content__info">
              <div className="about__info__title">Name:
                <p>Bui Huu Dat</p>
              </div>
              <div className="about__info__title">Email: 
                <p>buihuudat@gmail.com</p>
              </div>
              </div>
              <div className="about__content__info">
                <div className="about__info__title">Phone:
                  <p>+84 0987699999</p>
                </div>
                <div className="about__info__title">IG: 
                  <p>buihuudat_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;