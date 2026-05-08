import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>微电脑项目</h1>
        <p className="subtitle">React + Vite + GitHub Actions</p>
      </header>
      
      <main>
        <div className="card">
          <h2>欢迎</h2>
          <p className="message">🎉 项目部署成功！这是一个使用 GitHub Actions 自动化部署的 React 应用。</p>
        </div>
        
        <div className="card">
          <h2>计数器</h2>
          <p className="count">{count}</p>
          <button onClick={() => setCount(c => c + 1)}>
            点击增加
          </button>
        </div>
      </main>
      
      <footer>
        <p>使用 GitHub Actions 自动化部署</p>
      </footer>
    </div>
  )
}

export default App
