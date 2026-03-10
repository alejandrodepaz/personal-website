import { useState, useRef, useEffect, type ChangeEvent, type KeyboardEvent } from 'react'
import Fuse from 'fuse.js'
import { QA_DATA_LIST } from '../chatData'

interface Message {
  role: 'user' | 'bot'
  text: string
}

const fuse = new Fuse(QA_DATA_LIST, { keys: ['questions'], includeScore: true, threshold: 0.6 })

function findBestMatch(query: string) {
  const results = fuse.search(query)
  return results[0]?.item ?? null
}

const Chat = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm Alejandro's assistant. Ask me anything about his background, experience, skills, or interests." },
  ])
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = messagesRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  const submit = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const match = findBestMatch(trimmed)
    const botReply = match
      ? match.response
      : "Sorry, I don't have an answer for that. Try asking about Alejandro's experience, skills, or education."

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'bot', text: botReply },
    ])
    setInput('')
  }

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <section className="section" id="chat">
      <div className="section-header">
        <h2 className="section-title">Ask Me</h2>
      </div>

      <div className="chat-window">
        <div className="chat-messages" ref={messagesRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat-row chat-row--${msg.role}`}>
              {msg.role === 'bot' && <div className="chat-avatar">ADP</div>}
              <div className={`chat-bubble chat-bubble--${msg.role}`}>{msg.text}</div>
            </div>
          ))}
        </div>

        <form className="chat-input-bar" onSubmit={onSubmit}>
          <input
            className="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Ask something about Alejandro..."
            autoComplete="off"
          />
          <button className="chat-send-btn" type="submit" disabled={!input.trim()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Chat;
