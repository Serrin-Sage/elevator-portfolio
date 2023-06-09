const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-me">
          <img src="/images/HomerAndMe.jpg" className="about-image"/>
          <div className="about-text-container">
            <p className="first-paragraph">
              Welcome to my website! My name is Serrin Doscher and I'm a software engineer and full-stack developer.
              I have a passion for creative and unique UI designs that are fun to interact with.
              As a child, I used to create entire worlds through drawing, Lego building, acting, and even stop-motion animation, allowing my imagination to flourish. 
              Today, I channel my creative energy into coding and game tinkering.
            </p>
            <p className="second-paragraph">
              In addition to my technical experience gained over the years, I have also developed valuable team-building and cooperation skills. 
              During my time at Flatiron School, I frequently collaborated with and supported classmates who struggled with coding concepts. 
              These interactions fostered strong personal connections, establishing me as a dependable resource for assistance.
            </p>
            <div className="about-site-text">
              <h5>About this site</h5>
              <p>
                This site was built using React.js, Redux, and SCSS. I managed my work and project flow with Github and I'm hosting on Nelify.
                The site was inspired by a talk I attended during my time at Flatiron School. The speaker made an anology about the complications
                of programming an elevator and how the user interacts with it. This inspired me to make a wesbite that functions like a elevator,
                although significantly less complex. The elevator dial was designed using Inkscape, everything else was desgined using vanilla
                SCSS.
              </p>
            </div>
          </div>
        
        </div>
        <div className="plaque-rivet" id="top-left-rivet"></div>
        <div className="plaque-rivet" id="top-right-rivet"></div>
        <div className="plaque-rivet" id="bottom-right-rivet"></div>
        <div className="plaque-rivet" id="bottom-left-rivet"></div>
      </div>
    </div>
  )
}

export default About