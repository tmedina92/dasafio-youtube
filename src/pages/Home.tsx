import '../styles/start.scss';

export function Home() {
  return (
    <div id="start-page">
      <header className="header">
        <div className="logo">
          <a href="/"><h1>You<span className="logo2">Tube</span></h1></a>
          <p>Broadcast Yourself!</p>
        </div>
        <div>
          <div className="search-container">
            <input 
              type="text" 
            />
            <button>Search</button>
          </div>
          <div className="search-menu">
            <a href="#">Home</a>
            <p><strong>|</strong></p>
            <a href="#">Vídeos</a>
            <p><strong>|</strong></p>
            <a href="#">Channels</a>
          </div>
        </div>
        <div className="auth-area">
          <div className="auth">
            <a href="#">Create Account</a>
            <p>&nbsp;<strong>or</strong>&nbsp;</p>
            <a href="#">Sign-In</a>
          </div>
          <div className="menu">
            <a href="#">Subscriptions</a>
            <a href="#">History</a>
            <a href="#">Upload</a>
          </div>
        </div>
      </header>
      <main className="featured">
        <div className="featured-wrapper">
          <div className="featured-first">
            <h2>Featured</h2>
            <img src="https://images.unsplash.com/photo-1650305633654-3fec0ea2fb8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="exemplo" />
          </div>
          <div className="featured-second">
            <div className="first-video">
              <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
            </div>
            <div className="first-video">
              <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
            </div>
            <div className="first-video">
              <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
            </div>
          </div>
        </div>
        <div className="square-wrapper">
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque eius quas harum earum commodi, corporis fuga animi quae ab obcaecati hic, eos repellat iusto. Tempore commodi facere culpa maxime.</p>
        </div>
      </main>
      <div className="more-videos">
        <h2>More videos</h2>
        <div className="first-videos">
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
        </div>
        <div className="second-videos">
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
          <img src="https://images.unsplash.com/photo-1650296399459-975aac9856c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab rem sequi at saepe non? </p>
        </div>
      </div>
    </div>
  )
}