import logoImg from '../assets/imagem/logo.svg';

import '../styles/start.scss';

export function Home() {
  return (
    <div id="start-page">
      <header className="header">
        <div>
          <a href="/"><img src={logoImg} alt="Youtube"/></a>
        </div>
        <div>
          <div className="search-container">
            <input 
              type="text" 
            />
            <button>Search</button>
          </div>
          <div className="search-menu">
            <a href="">Home</a>
            <a href="">Vídeos</a>
            <a href="">Channels</a>
          </div>
        </div>
        <div className="auth-area">
          <div className="auth">
            <a href="">Create Account</a>
            <p>&nbsp;or&nbsp;</p>
            <a href="">Sign-In</a>
          </div>
          <div className="menu">
            <a href="">Subscriptions</a>
            <a href="">History</a>
            <a href="">Upload</a>
          </div>
        </div>
      </header>
      <body className="body">
        <aside className="left-side">
          <div>
            <h2>Featured</h2>
            <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          </div>
          <div>
            <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </aside>
        <aside className="right-side">
          <img src="https://images.unsplash.com/photo-1519215498729-0abf8367b98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW51bmNpb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </aside>
        <main>
          <h2>More imgs</h2>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <img src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </main>
      </body>
    </div>
  )
}