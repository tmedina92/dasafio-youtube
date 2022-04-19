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
      <main>
        <img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /><img src="https://images.unsplash.com/photo-1650287996854-bdfeaa5fce94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </main>
    </div>
  )
}