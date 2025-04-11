function Home() {
  return (
    <div className="home">
      <div className="desktop-me">

        <img src="/thatsme.png" className="profile-pic" />

        <div className="greeting high-text ballet" style={{ top: "50px", left: "340px", position: "absolute" }}>Hola!</div>
        <div className="greeting secondary-text" style={{ top: "160px", left: "480px", position: "absolute" }}>bienvenidx</div>
        <div className="name secondary-text" style={{ top: "300px", right: "450px", position: "absolute" }}>me llamo</div>
        <div className="name high-text ballet" style={{ top: "300px", right: "450px", position: "absolute" }}>Axel</div>

        <div className="icon" style={{ top: "200px", left: "100px", position: "absolute" }}>
          <img src="/folder.png" />
          <p>mis skills</p>
        </div>
        <div className="icon" style={{ top: "320px", left: "200px", position: "absolute" }}>
          <img src="/pdf.png" />
          <p>mi cv</p>
        </div>

        <div className="icon" style={{ top: "80px", right: "300px", position: "absolute" }}>
          <img src="/folder.png" />
          <p>flora: App para una florería</p>
        </div>
        <div className="icon" style={{ top: "200px", right: "150px", position: "absolute" }}>
          <img src="/folder.png" />
          <p>deli deli: App de recetas</p>
        </div>
        
      </div>
      <div id="about-me" className="about-me">
        <div className="left-text">
          <div className="header">
            <div className="secondary-text">Un poco</div>
            <div className="high-text ballet" style={{top: "0.2em", left: "10px", position: "absolute"}}>Sobre mi</div>
          </div>
          <div className="text">
            <p>Hola, soy Axel Mauricio Rodríguez Contreras, estudiante de último año en la carrera de Ingeniería en 
              Tecnologías de la Información. Me apasiona el desarrollo web, el diseño y la experiencia de usuario. 
              Creo firmemente en la importancia de hacer del internet un espacio accesible y amigable para todos.
            </p>
            <div className="btns">
              <a href="" className="btn">Informacion de contacto</a>
              <a href="" className="btn">Ver CV</a>
            </div>
          </div>
        </div>
        <div className="collage-me">
        <img src="/thatsme.png" className="" />
        </div>
      </div>
      <div className="facts">
        <div className="side">
          <div className="window">
            <div className="window-header">Mi experiencia</div>
            <div className="window-content">
              <div className="section">
                <h1>Tacea Music, UI Designer </h1>
                <h2>September 2024 - Octubre 2024 | Ciudad Victoria, Tamps.</h2>
                <p>Redesigned Tacea’s music website, creating a more unique and user-friendly interface.
                Focused on improving navigation and overall user experience.</p>
              </div>
            </div>
          </div>
          <div className="window">
            <div className="window-header">Mi educacion</div>
            <div className="window-content">
              <div className="section">
                <h1>Certificado de Diseño de UX de Google </h1>
                <h2>Febrero 2025 - Present</h2>
                <p>Online course by Coursera</p>
              </div>
              <div className="section">
                <h1>Universidad Politécnica de Victoria</h1>
                <h2>September 2022 - Present | Ciudad Victoria, Tamps.</h2>
                <p>Bachelor’s Degree in Information Technology Engineering</p>
              </div>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="window">
            <div className="window-header">Mis skills</div>
            <div className="window-content">
              <div className="section2">
                <img src="/design.gif" alt="" />
                <div className="skill">
                  <h1>Desing</h1>
                  <div className="skills">
                    <p>Prototyping</p>
                    <p>Wirefraiming</p>
                    <p>Ilustration</p>
                    <p>Sketching</p>
                  </div>
                </div>
              </div>
              <div className="section2">
                <img src="/coding.gif" alt="" />
                <div className="skill">
                  <h1>Coding</h1>
                  <div className="skills">
                    <p>HTML & CSS</p>
                    <p>Javascript</p>
                    <p>React</p>
                    <p>Laravel</p>
                  </div>
                </div>
              </div>
              <div className="section2">
                <img src="/software.gif" alt="" />
                <div className="skill">
                  <h1>Software</h1>
                  <div className="skills">
                    <p>Figma</p>
                    <p>Canva</p>
                  </div>
                </div>
              </div>
              <div className="section2">
                <img src="/language.gif" alt="" />
                <div className="skill">
                  <h1>Languages</h1>
                  <div className="skills">
                    <p>English</p>
                    <p>Spanish (Native)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
