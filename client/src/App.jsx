import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('加载中...')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('后端服务未启动'))
  }, [])

  return (
    <div className="app">
      <header>
        <h1>全栈应用</h1>
        <p className="subtitle">React + Node.js + GitHub Actions</p>
      </header>
      
      <main>
        <div className="card">
          <h2>后端消息</h2>
          <p className="message">{message}</p>
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