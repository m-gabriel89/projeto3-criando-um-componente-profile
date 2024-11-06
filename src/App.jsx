import Profile from "./components/Profile"

export default function App(){
  return(
    <body>
      <div>
      <Profile
      img={'./foto.jpg'}
      name={'Márcio Gabriel'} 
      bio={'Estudante de Desenvolvimento de Sistemas da EEEP Deputado Roberto Mesquita'} 
      phone={'+ 55 (85) 994160109'}
      email={'santossilvamarciogabriel17@gmail.com'} 
      instaUrl={'https://www.instagram.com/_biel.snts'}
      githubUrl={'https://github.com/m-gabriel89?tab=repositories'}
      ></Profile>
      </div>
    </body> 
  )
}